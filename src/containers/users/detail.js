import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import Breadcrumb from '../../components/breadcrumb';
import Form from '../../components/form';
import callApi from '../../utils/api';
import {updateuser} from "../../actions/users";

class UserDetail extends PureComponent {

  state = {
    user: null,
    form: null,
    name: null,
    action: {
      type:null,
      label:null,
      method:null
    },
    loading: false,
    isEdit: false
  }

  bcData = () => {
    const { userId } = this.props.match.params;
    return [
      {
        "label": "Anasayfa",
        "link": "/"
      },
      {
        "label": "Kullanıcılar",
        "link": "/users"
      },
      {
        "label": `${this.state.name}`,
        "link": `/users/${userId}`
      }
    ]
  };

  getUser = async () => {
    try {

      const { getusers, accessToken } = this.props;
      const { userId } = this.props.match.params;

      await callApi(accessToken, `user/v2/${userId}`, 'get', null).then(res => {
        this.setState({
          form: res.form,
          user: res.data,
          action: res.action,
          name: res.data.name
        });
      });


    } catch (e) {
      alert("hata var 2");
    }
  }

  save = async (values) => {
    try {

      const { accessToken,dispatch } = this.props
      const { form,user } = this.state
      let body = {}

      form && form.map(a => {
        body[a.name] = values[a.name];
      });

      dispatch(updateuser(accessToken,user._id,body));


    } catch (e) {
      alert("hata var 3");
    }
  }

  componentWillMount() {
    const { match } = this.props;

    if (match && match.path.indexOf("/edit/") > -1) {
      this.setState({
        isEdit: true
      });
    }

    this.getUser();

  }


  render() {
    const { loading, form, action } = this.state;

    return (
      <>
        <Breadcrumb data={this.bcData()} />
        <Layout style={{ padding: '10px', margin: '30px' }}>
        <h2>KULLANICI DETAY</h2>
        <Row>
          <Col sm={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
          <Form form={form} submit={this.save} action={action} />
          </Col>
        </Row>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.login.accessToken
});

export default connect(mapStateToProps)(UserDetail);