import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Popconfirm, Modal, message, Typography, Layout  } from 'antd';
import { Link } from "react-router-dom";

import List from "../../components/list";
import Breadcrumb from '../../components/breadcrumb';

const {Title} = Typography;
const {Content} = Layout;

const ButtonGroup = Button.Group;

const bcData = [
  {
    "label": "Anasayfa",
    "link": "/"
  },
  {
    "label": "Kullanıcılar",
    "link": "/users"
  }
];

class Users extends PureComponent {

  confirm = (e) => {
    message.success(e);
  }


  render() {
    const columns = this.props.users ? this.props.users.columns.slice() : [];
    columns.push({
      title: 'İşlem',
      dataIndex: 'action',
      width: 'auto',
      align: 'right',
      render: (text, record) => (
        <ButtonGroup>
          <Link to={`/users/${record.id}`}><Button>Detay</Button></Link>
          <Popconfirm title="Bu kaydı silmek istediğinize emin misiniz?" onConfirm={() => this.confirm(record.id)} okText="Evet" cancelText="Hayır">
            <Button type="danger">Sil</Button>
          </Popconfirm>
        </ButtonGroup>
      )
    })
    return (
      <>
        <Breadcrumb data={bcData} />
        <Content style={{
          background: '#fff', padding: 15, margin: 15, borderWidth:3, borderColor:'#f1f1f1', borderStyle:'solid'
        }}
        >
        <h1>Kullanıcılar</h1>
          {this.props.users && <List data={this.props.users.data} columns={columns} />}
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.login.accessToken,
  users: state.user.users
});

export default connect(mapStateToProps)(Users);