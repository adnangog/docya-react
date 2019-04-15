import React, { PureComponent } from 'react';
import * as Antd from 'antd';
import { withFormik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import * as yup from "yup";

import { InputField, SelectField } from './formFields';
import { email, password, required } from '../assets/yupschemas';

const formitemlayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};

const { Form: AntForm, Button } = Antd;

let validationShape = {};
let mapPropsToValues = {};

class L extends PureComponent {

    render() {
        const { form, action,sending } = this.props;
        const label = (action && action.label) ? action.label : "Kaydet";
        form && form.map(a => {
            mapPropsToValues[a.name] = a.value;
        });

        return (
            <Antd.Spin tip="Yükleniyor..." spinning={sending} delay={500}>
            <Form className="login-form">
                {
                    form && form.map((item, i) =>
                        <Field
                            key={`field${i}`}
                            label={item.label}
                            name={item.name}
                            size="large"
                            prefix={"*"}
                            placeholder={item.placeholder}
                            type={item.type}
                            mode={item.mode}
                            data={item.getprops ? this.props.departments : null}
                            component={(item.type === "text" || item.type === "password" || item.type === "email") ? InputField : SelectField }
                            formitemlayout={formitemlayout}
                            hidden={item.hidden}
                            defaultValue={item.value}
                        />
                    )}

                <AntForm.Item>
                    <Antd.Row>
                        <Antd.Col sm={formitemlayout.labelCol.sm} xs={formitemlayout.labelCol.xs}>
                        </Antd.Col>
                        <Antd.Col sm={formitemlayout.wrapperCol.sm} xs={formitemlayout.wrapperCol.xs}>
                            <Button type="primary" htmlType="submit" className="login-form-button">{label}</Button>
                        </Antd.Col>
                    </Antd.Row>
                </AntForm.Item>
            </Form>
            </Antd.Spin>
        );
    }
}

const LoginForm = withFormik({
    validationSchema: (props) => {
        props.form.map((a) => {
            validationShape[a.name] = null;

            if (a.isRequired) {

                if (validationShape[a.name] === null) {
                    validationShape[a.name] = required;
                } else {
                    validationShape[a.name] = validationShape[a.name].concat(required);
                }
            }

            if (a.isEmail) {

                if (validationShape[a.name] === null) {
                    validationShape[a.name] = email;
                } else {
                    validationShape[a.name] = validationShape[a.name].concat(email);
                }
            }

            if (a.isPassword) {

                if (validationShape[a.name] === null) {
                    validationShape[a.name] = password;
                } else {
                    validationShape[a.name] = validationShape[a.name].concat(password);
                }
            }
        });
        return (
            yup.object().shape(validationShape)
        )
    },
    mapPropsToValues: () => (mapPropsToValues),
    handleChange: (a)=> console.log(a),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(L);


const mapStateToProps = (state) => ({
    accessToken: state.login.accessToken,
    users: state.user.usersfordll,
    departments : state.department.departmentsfordll
  });
  
  export default connect(mapStateToProps)(LoginForm);
