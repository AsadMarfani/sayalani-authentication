import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from '../Actions/actions';

export class Login extends Component {
    _onLogin(e){
        e.preventDefault();
        var email = this.refs.email.value;
        var pass = this.refs.pass.value;

        if(email.length > 0 && pass.length > 0) {
            console.log('email and pass is : ',email,pass);
            var {dispatch} = this.props;
            dispatch(actions.startLogin(email, pass));
        }

    }
    render(){
        return (
            <div>
                <h3>Signup Form</h3>
                <hr/>
                <form action="" onSubmit = {this._onLogin.bind(this)}>
                    <input type="text" ref = "email" placeholder = "Enter Email" required/>
                    <br/><br/>
                    <input type="password" ref = "pass" placeholder = "Enter Password" required/>
                    <br/>
                    <hr/>
                    <button className = "btn btn-success">User Signup</button>
                </form>
            </div>
        )
    }
}

export default Redux.connect()(Login)