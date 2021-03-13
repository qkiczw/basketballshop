import React from 'react';
import './Sign-in-and-sign-up-page.component.scss';

// Components
import SignIn from '../../components/sign-in/Sign-in.component';
import SignUp from '../../components/sign-up/Sign-up.component';

const SingInAndSignUpPage = () => (
    <div className="sign-in-sign-up-container">
        <SignIn />
        <SignUp />
    </div>
)

export default SingInAndSignUpPage; 