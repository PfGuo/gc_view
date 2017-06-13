import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';

class ToPages extends Component {

    constructor() {
        super();
    }

    render() {

        const { location } = this.props;

        if(location.pathname == '/') {
            return (
              <div>xxx</div>
            );
        }
    }

}

ToPages.propTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(ToPages);