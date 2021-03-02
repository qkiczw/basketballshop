import React from 'react';
import './Sign-in.styles.scss';


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
        const {value, name} = event.target;

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
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.eamil} required placeholder="Enete your email"/>
                    <label htmlFor="password">Password</label>                    
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required placeholder="Enter your password"/>
                    <input type="submit" value="submit" />
                </form>

            </div>
        )
    }
}

export default SignIn;