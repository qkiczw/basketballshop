import React from 'react';
import './Sign-in.styles.scss';

// Components
import FormInput from '../form-input/Form-input.component';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = ( event ) => {
        event.preventDefault();
        this.setState({
            name: '',
            password: '',
        }) 
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
                <h2>I have an account</h2>
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
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default SignIn;