import React from 'react';

// Components
import SignIn from '../../components/sign-in/Sign-in.component';
import SignUp from '../../components/sign-up/Sign-up.component';

// Styled Components
import { SingInSignUpContainer } from './sign-in-and-sign-up-page.styles';

const SingInAndSignUpPage = () => (
    <SingInSignUpContainer>
        <SignIn />
        <SignUp />
    </SingInSignUpContainer>
)

export default SingInAndSignUpPage; 