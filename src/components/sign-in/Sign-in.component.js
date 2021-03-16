import React from 'react';
import './Sign-in.styles.scss';

// Firebase Google Auth
import { auth, signInWithGoogle } from '../../../src/firebase/firebase.utilities';

// Components
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async ( event ) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            
            // if its done setState clear the state
            this.setState({
                email: '',
                password: '',
            }) 

        } catch(error) {
            console.log(error)
        }

        
    }
    handleChange = ( event ) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='sign-in-title'>I have an account</h2>
                <div>Sign In with your email and password.</div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='password'
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        required 
                    />
                    <div className='sign-in-buttons'>
                        <CustomButton type='submit' type='submit'>Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle} >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;