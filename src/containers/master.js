import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Breadcrumb from '../components/breadcrumb';

class Master extends Component {

    render() {
        return (
            <>
                <Breadcrumb />
                <div style={{ padding: '30px' }}>
                    <Link to="/login">Giriş</Link>
                </div>
            </>
        );
    }
}

export default Master;

