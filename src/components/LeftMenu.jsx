import React, { Component } from 'react';
import { connect } from 'dva';
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
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
                >
                    <Menu.Item key="1">Tom</Menu.Item>
                    <Menu.Item key="2">Bill</Menu.Item>
                    <Menu.Item key="3">Alex</Menu.Item>
                </SubMenu>
                <Menu.Item key="4">
                    <span>
                        <Icon type="file" />
                        <span className="nav-text">File</span>
                    </span>
                </Menu.Item>
            </Menu>
        );
    }
}

LeftMenu.propTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(LeftMenu);