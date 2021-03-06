import React from 'react'
import signupstyle from './Signup.module.css'
import Signupform from './Signupform'
import axios from 'axios'

const Signup = () => {

    const [overlay, setOverlay] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [firstname, setFirstname] = React.useState('')

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (overlay) {
                setOverlay(false)
            }
            if (error) {
                setError(false)
            }
        }, 5000)
        return () => clearTimeout(timer);
    }, [overlay, error])


    const getUserData = async (data) => {
        try {
            const response = await axios.post('users', data)
            console.log(response)
            setOverlay(true)
        } catch (error) {
            setError(true)
            setOverlay(false)
        }
    }

    return (
        <>
            <div className={signupstyle.container2}>
                <div className={signupstyle.wrapper2}>
                    <div className={signupstyle.register}>Register</div>
                        <Signupform setOverlay={setOverlay} setFirstname={setFirstname} getUserData={getUserData} />
                </div>
            </div>

            {overlay ? <div className={signupstyle.overlayShow}>
                <div className={signupstyle.registerednameShow}>
                    <div>{`Hi ${firstname}!`}</div>
                    <div className={signupstyle.welcome}>Welcome to <span className={signupstyle.bsba}>BSBA.</span></div>
                </div>
            </div> : ""}

            {error ? <div className={signupstyle.overlayShow}>
                <div className={signupstyle.registerednameShow}>
                    <div>{`Oooops!`}</div>
                    <div className={signupstyle.welcome}>Email already exists!</div>
                </div>
            </div> : ""}
        </>
    )
}

export default Signup

