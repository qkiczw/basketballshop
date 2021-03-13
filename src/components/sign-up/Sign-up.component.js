import React from 'react';
import './Sign-up.styles.scss';

// Components
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utilities';


class SignUp extends React.Component {
    constructor() {
        super();
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state; 
        
        if(password !== confirmPassword) {
            alert(`Passwords don't match`);
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        event.preventDefault();
        const {name, vaule} = event.target;
        this.setState({[name]: vaule});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state; 
        return (
            <div className='sign-up' onSubmit={this.handleSubmit}>
                <h2>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-un-form' >
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type='text'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type='text'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    >
                    </FormInput>
                    <CustomButton>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;