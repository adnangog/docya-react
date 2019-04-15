import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import Breadcrumb from '../../components/breadcrumb';
import Form from '../../components/form';
import callApi from '../../utils/api';
import { withRouter } from "react-router-dom";
import { updateuser, insertuser } from "../../actions/users";

import PageHeader from '../../components/pageHeader'

class UserDetail extends PureComponent {

  state = {
    user: null,
    form: null,
    title: null,
    action: {
      type: null,
      label: null,
      method: null
    },
    sending: false,
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
        "label": `${this.state.title}`,
        "link": userId ? `/users/${userId}` : "/users/add"
      }
    ]
  };

  getUser = async () => {
    try {

      const { accessToken } = this.props;
      const { userId } = this.props.match.params;

      await callApi(accessToken, `user/v2/${userId}`, 'get', null).then(res => {
        this.setState({
          form: res.form,
          user: res.data,
          action: res.action,
          title: res.action.title
        });
      });


    } catch (e) {
      alert("hata var 2");
    }
  }

  getForm = async () => {
    try {

      const { accessToken } = this.props;

      await callApi(accessToken, `user/v2/form`, 'get', null).then(res => {
        this.setState({
          form: res.form,
          action: res.action,
          title: res.action.title
        });
      });


    } catch (e) {
      alert("hata var 2");
    }
  }

  save = async (values) => {
    try {

      const { accessToken, dispatch } = this.props
      const { form, user } = this.state
      let body = {}

      this.setState({
        sending: true
      })

      form && form.map(a => {
        body[a.name] = values[a.name];
      });

      user ? dispatch(updateuser(accessToken, user._id, body)) : dispatch(insertuser(accessToken,body));

      this.setState({
        sending: false
      })

      this.props.history.push("/users");


    } catch (e) {
      alert("hata var 3");
    }
  }

  componentWillMount() {
    const { match } = this.props;
    const { userId } = this.props.match.params;

    if (match && match.path.indexOf("/edit/") > -1) {
      this.setState({
        isEdit: true
      });
    }

    userId ? this.getUser() : this.getForm();

  }


  render() {
    const { sending, form, action, title } = this.state;

    return (
      <>
        <Breadcrumb data={this.bcData()} />
        <Layout style={{ padding: '10px', margin: '30px' }}>
          <PageHeader title={title} />
          <Row>
            <Col sm={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
              <Form form={form} submit={this.save} action={action} sending={sending} />
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

export default connect(mapStateToProps)(withRouter(UserDetail));