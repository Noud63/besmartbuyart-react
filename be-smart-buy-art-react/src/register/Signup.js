import React from 'react'
import signupstyle from './Signup.module.css'
import Signupform from './Signupform'

const Signup = () => {

    const [overlay, setOverlay] = React.useState(false)
    const [data, setData] = React.useState({})
    const [firstname, setFirstname] = React.useState('')

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (overlay) {
                setOverlay(false)
            }
        }, 6000)
        return () => clearTimeout(timer);
    }, [overlay])

    console.log(data)

    return (
        <>
            <div className={signupstyle.container2}>
                <div className={signupstyle.wrapper2}>
                    <div className={signupstyle.register}>Register</div>

                    <Signupform setOverlay={setOverlay} setFirstname={setFirstname} setData={setData} />

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

