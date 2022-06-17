import React from 'react'
import signinStyle from './Signin.module.css';
import SigninForm from './SigninForm'
import axios from 'axios'
import { useGlobalContext } from '../Context';

const Signin = () => {

    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false)

    let { setLoggedIn, setUserName} = useGlobalContext()

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (success) {
                setSuccess(false)
            }
            if (error) {
                setError(false)
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [success, error]);


    const loginData = async (data) => {

        try {
            const response = await axios.post('logins', data)
            const name = JSON.parse(response.config.data)
            if (response.status === 200) {
                setSuccess(true)
                setLoggedIn(true)
                setUserName(`Hi, ${name.username}!`)
            }
        } catch (error) {
            setSuccess(false)
            setError(true)
        }
}

    return (
        <div className={signinStyle.container}>
            <div className={signinStyle.wrapper}>
                <div className={signinStyle.login}>Signin</div>

                <SigninForm loginData={loginData} />

                {success ? <div className={signinStyle.loginSuccess}>Logged in successfully</div> : ""}

                {error ? <div className={signinStyle.overlayShow}>
                    <div className={signinStyle.registerednameShow}>
                        <div>{`Oooops!`}</div>
                        <div className={signinStyle.welcome}><span>Invalid password</span><span>or username!</span></div>
                    </div>
                </div> : ""}
            </div>
        </div>
    )
}

export default Signin

