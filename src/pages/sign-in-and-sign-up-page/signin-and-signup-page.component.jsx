import React from 'react';
import './sign-in-and-signup-page.style.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninSignupPage = () => (

    <div className='sing-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SigninSignupPage;