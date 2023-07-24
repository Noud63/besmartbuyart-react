import React from 'react'
import signinStyle from './Signin.module.css'
import { useForm } from "react-hook-form";

const SigninForm = ({loginData, loggedIn, setUserName}) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [passwordShown, setPasswordShown] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const togglePasswordVisiblity = (e) => {
        if (!password && e.target.checked === true) {
            e.target.checked = false
            return
        }
        setPasswordShown(!passwordShown);
    };

    const onSubmit = (data) => {
        loginData(data)
        
        reset()
    };

    const onErrors = errors => console.error(errors);

    return (
        <form action="" onSubmit={handleSubmit(onSubmit, onErrors)} className="form">

            <div className={signinStyle.name}>
                <label htmlFor="username">Username: </label>
                <div className={signinStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.username && <div>{errors.username.message}</div>}
                </div>
                <input type="text" placeholder="" name="username" {...register("username", { required: 'username required!' })} />
            </div>

            <div className={signinStyle.pw}>
                <label htmlFor="password" className={signinStyle.pass}>Password: </label>
                <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <input type={passwordShown ? "text" : "password"} placeholder="" name="password3"
                    {...register("password", { required: 'password required!', minLength: { value: 1, message: 'Minimum of 8 characters required!' } })}
                    onChange={(e) => setPassword(e.target.value)} />


                <div className={signinStyle.showPass}> Show password: </div>
                <input type="checkbox" className={signinStyle.check} onChange={(e) => togglePasswordVisiblity(e)} />
            </div>

            <button type="submit" className={signinStyle.btn}>Submit</button>

        </form>
    )
}

export default SigninForm
