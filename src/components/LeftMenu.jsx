import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
            mode: 'inline'
        };
    }

    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        return (
            <Menu style={{ height: "100%" }} theme="light" mode={this.state.mode} defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/'>
                        <Icon type="home" />
                        <span className="nav-text">首页</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="smile-o" /><span className="nav-text">记录</span></span>}
                >
                    <Menu.Item key="2"><Link to='/record/dictory'>日志</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/record/photo'>照片</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="4">
                    <Link to='/user'>
                        <Icon type="user" />
                        <span className="nav-text">用户</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

LeftMenu.propTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(LeftMenu);