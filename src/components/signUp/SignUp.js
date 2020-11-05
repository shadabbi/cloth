import React, { Component } from 'react';

import classes from './SignUp.module.scss';
import FormInput from '../../components/formInput/FormInput';
import Btn from '../../components/customBtn/CustomBtn';

import {auth, createUserProfile} from '../../firebase/firebase.util';

class SignUp extends Component {
    state = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('passwords are not same');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user)
            await createUserProfile(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        } catch (error) {
            console.log(error)
        }
    }

    changeHandler = (e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className={classes['sing-up']} >
                <h2 className={classes.title}>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className={classes['sing-up-form']}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange = {this.changeHandler}
                        label = 'Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange = {this.changeHandler}
                        label = 'Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange = {this.changeHandler}
                        label = 'Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange = {this.changeHandler}
                        label = 'confirmPassword'
                        required
                    />

                    <Btn type="submit" onClick={this.submitHandler}>Sign Up</Btn>
                </form>
            </div>
        )
    }
}

export default SignUp;