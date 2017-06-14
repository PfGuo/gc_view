import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

class Dictory extends Component {
    render() {
        return (
            <div>Dictory</div>
        );
    }
}

Dictory.PropTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(Dictory);