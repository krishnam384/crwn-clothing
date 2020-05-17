import React from 'react';
import './signin.style.scss';
import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state={

            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {

        event.preventDefault();
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (error){
            console.log(error);
        }
        
    }

    handleChange = event => {

        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render(){

        return (

            <div className='sign-in'>

                <h3>I already have an account</h3>
                <h4>Please signin with email and Password</h4>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        type='email' 
                        name='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='Email'
                        required 
                    />

                    <FormInput 
                        type='password' 
                        name='password'  
                        handleChange={this.handleChange} 
                        value={this.state.password}
                        label='Password' 
                        required 
                    />

                    <div className='buttons'>

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}SIGNIN withGoogle {' '}</CustomButton>
                    
                    </div>

                    
                </form>
            
            
            </div>
        )
    }

}


export default SignIn;