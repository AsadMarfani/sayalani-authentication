import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from '../Actions/actions';

export class Logout extends Component {
    onLogout(){
        var { dispatch } = this.props;
        dispatch(actions.onLogout());
    }

    render(){
        return (
            <div>
                <button onClick = {this.onLogout.bind(this)} className = "btn btn-danger">Logout User</button>
            </div>
        )
    }
}

export default Redux.connect()(Logout)