import React from 'react'
import { Layout } from 'antd'

export default function Footer() {
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
    )
}
