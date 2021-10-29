
import React from 'react'
import{
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Reset,
}from './SigninElements';

const SignIn = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">Pronto</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>Sign in to your account</FormH1>
                         <FormLabel htmlFor='for'>UserId</FormLabel>
                         <FormInput type='text' required/>
                         <FormLabel htmlFor='for'>Password</FormLabel>
                         <FormInput type='password' required/>
                         <Reset href='/'>Forgot password?</Reset>
                         <FormButton type = 'submit'>Continue</FormButton>
                         

                     </Form>
                 </FormContent>
             </FormWrap>
          </Container>   
        </>
    )
}

export default SignIn;
