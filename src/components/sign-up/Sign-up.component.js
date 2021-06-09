import React from 'react';

// Components
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';

// Styled Components
import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles.js';


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
            await createUserProfileDocument(user, { displayName: displayName });

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
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state; 
        return (
            <SignUpContainer onSubmit={this.handleSubmit}>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' >
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display name'
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
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    >
                    </FormInput>
                    <CustomButton>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;