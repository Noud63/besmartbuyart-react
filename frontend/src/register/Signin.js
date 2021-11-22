import React from 'react'
import signinstyle from './Signin.module.css';
import { useForm } from "react-hook-form";
import dotenv from 'dotenv'

dotenv.config()

const Signin = () => {

    const [passwordShown, setPasswordShown] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [login, setLogin] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const togglePasswordVisiblity = (e) => {
        if (!password && e.target.checked === true) {
            e.target.checked = false
            return
        }
        setPasswordShown(!passwordShown);
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (login) {
                setLogin(false)
            }
        }, 3000);
        return () => clearTimeout(timer);

    }, [login]);


    const onSubmit = data => {
        //Only for test purpose, never store passwords in an .env file!!
        if (data.username !== process.env.REACT_APP_LOGIN_USERNAME || data.password !== process.env.REACT_APP_LOGIN_PASSWORD) {
            alert("Invalid username or password")
        }

        if (data.username === process.env.REACT_APP_LOGIN_USERNAME && data.password === process.env.REACT_APP_LOGIN_PASSWORD) {
            setLogin(true)
        }
        reset()
    };

    const onErrors = errors => console.error(errors);

    return (
        <div className={signinstyle.container}>
            <div className={signinstyle.wrapper}>

                <div className={signinstyle.login}>Login</div>

                <form action="" onSubmit={handleSubmit(onSubmit, onErrors)} className="form">

                    <div className={signinstyle.name}>
                        <label htmlFor="username">username: </label>
                        <div className={signinstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.username && <div>{errors.username.message}</div>}
                        </div>
                        <input type="text" placeholder="" name="username" {...register("username", { required: 'username required!' })} />
                    </div>

                    <div className={signinstyle.pw}>
                        <label htmlFor="password" className={signinstyle.pass}>Password: </label>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.password && <div>{errors.password.message}</div>}
                        </div>

                        <input type={passwordShown ? "text" : "password"} placeholder="" name="password3"
                            {...register("password", { required: 'password required!', minLength: { value: 8, message: 'Minimum of 8 characters required!' } })}
                            onChange={(e) => setPassword(e.target.value)} />


                        <div className={signinstyle.showPass}> Show password: </div>
                        <input type="checkbox" className={signinstyle.check} onChange={(e) => togglePasswordVisiblity(e)} />
                    </div>

                    <button type="submit" className={signinstyle.btn}>Submit</button>

                </form>
                {login ? <div className={signinstyle.loginSuccess}>Logged in successfully</div> : ""}
            </div>

        </div>
    )
}

export default Signin

