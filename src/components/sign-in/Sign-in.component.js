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
            <div className="sign-in">
                <h2>I have an account</h2>
                <div>Sign In with your email and password.</div>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required placeholder="Enete your email"/>
                    <label htmlFor="password">Password</label>                    
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required placeholder="Enter your password"/>
                    <input type="submit" value="submit" />
                </form>

                {/* test forminput*/}
                <FormInput label="email" handleChange={this.handleChange}/>
                <FormInput label="password" handleChange={this.handleChange}/>

            </div>
        )
    }
}

export default SignIn;