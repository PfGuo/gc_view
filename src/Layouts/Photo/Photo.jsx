import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

class Photo extends Component {
    render() {
        return (
            <div>Photo</div>
        );
    }
}

Photo.PropTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(Photo);