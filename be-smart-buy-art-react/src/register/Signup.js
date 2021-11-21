import React from 'react'
import signupstyle from './Signup.module.css'
import Signupform from './Signupform'
import axios from 'axios'

const Signup = () => {

    const [overlay, setOverlay] = React.useState(false)
    const [firstname, setFirstname] = React.useState('')

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (overlay) {
                setOverlay(false)
            }
        }, 6000)
        return () => clearTimeout(timer);
    }, [overlay])


    const registerUser = (data) =>{
        axios.post('http://localhost:3000/signup', data)
        .then(()=> {})
        console.log(data)
    }

    return (
        <>
            <div className={signupstyle.container2}>
                <div className={signupstyle.wrapper2}>
                    <div className={signupstyle.register}>Register</div>

                    <Signupform setOverlay={setOverlay} setFirstname={setFirstname} registerUser={registerUser}/>

                </div>
            </div>

            {overlay ? <div className={signupstyle.overlayShow}>
                <div className={signupstyle.registerednameShow}>
                    <div>{`Hi ${firstname}!`}</div>
                    <div className={signupstyle.welcome}>Welcome to <span className={signupstyle.bsba}>BSBA.</span></div>
                </div>
            </div> : ""}
        </>
    )
}

export default Signup

