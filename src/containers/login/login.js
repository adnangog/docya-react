import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';

import {login} from "../../actions/login";
import Breadcrumb from '../../components/breadcrumb';
import LoginForm from './form';

const bcData = [
    {
        "label": "Giriş Yapın",
        "link": "/login"
    }
];

class Login extends PureComponent {


    signIn = (values) => {
        
            this.props.dispatch(login({
                "email": values.email,
                "password": values.password
            }));

    }

    render() {
        return (
            <>
                <Breadcrumb data={bcData} />
                <div style={{ padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8} offset={8}>
                            <Card title="Giriş Yapın" bordered={false}>
                                <LoginForm submit={this.signIn} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    accessToken: state.login.accessToken,
    isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(Login);