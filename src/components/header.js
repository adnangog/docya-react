import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Header extends Component {

  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout.Header className="header">
        <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faFileSignature} /> Docya</Link>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="topMenu"
          align="right"
        >
          <Menu.Item key="main">
            <Link to="/">Anasayfa</Link>
          </Menu.Item>
          <Menu.SubMenu title={<Link to="">Tanımlamalar</Link>}>
            <Menu.Item key="definations:1"><Link to="/users" className="menuItem"><FontAwesomeIcon className="menuIcon" icon={faFileSignature} /> Kullanıcılar</Link></Menu.Item>
            <Menu.Item key="definations:2"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
            <Menu.Item key="definations:3"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
            <Menu.Item key="definations:4"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
            <Menu.Item key="definations:5"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
          </Menu.SubMenu>
        </Menu>

        <Menu
          theme="light"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="topMenu"
          style={{float: 'right'}}
        >
          <Menu.SubMenu title={<a href="#" > <div className="header-avatar" ><img src="http://localhost:8000/cdn/image-fb303dedc09be1cabbb1954d6360ede3b9b5e47b.jpeg" /></div> Adnan GÖG</a>}>
            <Menu.Item key="definations:1"><Link to="/users" className="menuItem"><FontAwesomeIcon className="menuIcon" icon={faFileSignature} /> Kullanıcılar</Link></Menu.Item>
            <Menu.Item key="definations:2"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
            <Menu.Item key="definations:3"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
            <Menu.Item key="definations:4"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
            <Menu.Item key="definations:5"><a href="/kullanici" className="menuItem"><Icon type="mail" />Kullanıcılar</a></Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Header>

    );
  }
}

export default Header;
