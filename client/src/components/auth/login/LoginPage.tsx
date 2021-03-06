import React from 'react'
import PageStructure from '../../page_structure/PageStructure'
import AuthFormWrapper from '../AuthFormWrapper'
import LoginForm from './form/LoginForm'
import { Link } from 'react-router-dom'
import PageType from '../../pages/PageType'

const LoginPage = () => (
    <PageStructure
        pageType={PageType.Login}
    >
        <AuthFormWrapper>
            <h2>Login</h2>
            <LoginForm />
            <div><Link to="/auth/register">Register instead</Link></div>
        </AuthFormWrapper>
    </PageStructure>
)

export default LoginPage
