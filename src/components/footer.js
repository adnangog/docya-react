import React, { Component } from 'react';
import { Layout } from 'antd';

class Footer extends Component {

    render() {
        return (
            <Layout.Footer style={{
                textAlign: 'center', position: 'fixed',
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1030
            }}>
                Ant Design ©2018 Created by Ant UED
    </Layout.Footer>
        );
    }
}

export default Footer;
