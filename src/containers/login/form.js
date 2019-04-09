import React, { PureComponent } from 'react';
import * as Antd from 'antd';
import { withFormik, Field, Form } from 'formik';
import * as yup from "yup";

import { InputField } from '../../components/formFields';
import { email, password, required } from '../../assets/yupschemas';

const schemaList = {
    "emailSchema":email.concat(required),
    "passwordSchema":password.concat(required)
}

const { Form: AntForm, Icon, Button } = Antd;

let validationShape = {};
let mapPropsToValues = {};
const formJSON = [
    {
        name:"email",
        size:"large",
        icon:"user",
        placeholder:"Mail adresinizi giriniz",
        type:"text",
        schema: "emailSchema"
    },
    {
        name:"password",
        size:"large",
        icon:"lock",
        placeholder:"Şifrenizi giriniz",
        type:"password",
        schema: "passwordSchema"
    }
]

formJSON.map(a=> {
    validationShape[a.name]=schemaList[a.schema];
    mapPropsToValues[a.name]="";
});

class L extends PureComponent {
    render() {
        return (
            <Form className="login-form">
            {
                formJSON && formJSON.map((item,i)=>
                <Field
                    key={`field${i}`}
                    name={item.name}
                    size={item.size}
                    prefix={<Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder={item.placeholder}
                    type={item.type}
                    component={InputField}
                />
                )}
                
                <AntForm.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Giriş Yap</Button>
                </AntForm.Item>
            </Form>
        );
    }
}

const validationSchema = yup.object().shape(validationShape);

const LoginForm = withFormik({
    validationSchema,
    mapPropsToValues: () => (mapPropsToValues),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(L);

export default LoginForm;
