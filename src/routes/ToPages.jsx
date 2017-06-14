import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';

import Dictory from '../Layouts/Dictory/Dictory';
import Photo from '../Layouts/Photo/Photo';
import User from '../Layouts/User/User';
import HelloPage from '../Layouts/HelloPage/HelloPage';

class ToPages extends Component {

    constructor() {
        super();
    }

    render() {

        const { location } = this.props;

        if(location.pathname == '/') {
            return (
              <HelloPage />
            );
        } else if(location.pathname == '/record/dictory') {
            return (
                <Dictory />
            );
        } else if(location.pathname == '/record/photo') {
            return (
                <Photo />
            );
        } else if(location.pathname == '/user') {
            return (
                <User />
            );
        }
    }

}

ToPages.propTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(ToPages);