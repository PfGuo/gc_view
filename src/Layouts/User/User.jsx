import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

class User extends Component {
    render() {
        return (
            <div>User</div>
        );
    }
}

User.PropTypes = {};

export default connect(({indexpage}) => ({
    indexpage
}))(User);