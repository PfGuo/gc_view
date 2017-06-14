import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

class HelloPage extends Component {
    render() {
        return (
            <div>HelloPage</div>
        );
    }
}

HelloPage.PropTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(HelloPage);