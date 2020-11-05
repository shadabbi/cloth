import React, { Component } from 'react';

import classes from './SingIn.module.scss';
import FormInput from '../formInput/FormInput'
import Btn from '../customBtn/CustomBtn'
import {auth,signInWithGoogle} from '../../firebase/firebase.util'


class SignIn extends Component {
    state = {
        email:'',
        password:''
    }

    submitHandler = async e=>{
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (error) {
                console.log(error)
        }
        
    }


    changeHandler = e=>{
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className={classes['sing-in']}>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput name='email' label='Email' changeHandler={this.changeHandler} type='email' value={this.state.email} required></FormInput>
                    <FormInput name='password' label='Password' changeHandler={this.changeHandler} type='password' value={this.state.password} required></FormInput>
                    <div className={classes.btns}>

                        <Btn type="submit" >Sign in</Btn>
                        <Btn isGoogleSingIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Btn>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;