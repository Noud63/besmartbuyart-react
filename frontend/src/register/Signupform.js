import React from 'react'
import signupStyle from './Signup.module.css'
import { useForm } from "react-hook-form";


const Signupform = ({ setOverlay, setFirstname, getUserData }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [error, setError] = React.useState(false)
    const [error2, setError2] = React.useState(false)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (error) {
                setError(false)
            }

            if(error2){
                setError2(false)
            }
        }, 5000)
        return () => clearTimeout(timer);
    }, [error, error2])

    const onSubmit = data => {
        if (data.password !== data.repeatpassword) {
            setError(true)
            return
        }
        if (data.password.length < 8) {
            setError2(true)
            return
        }

        getUserData(data)

        const firstname = data.firstname
        setFirstname(firstname)
        reset()
    };

    const onErrors = errors => console.error(errors);

    return (
        <form action="" onSubmit={handleSubmit(onSubmit, onErrors)} className={signupStyle.form}>

            <div className={signupStyle.firstname}>
                <div className={signupStyle.textInput}><label htmlFor="firstname" className={signupStyle.pass}>Firstname: </label>
                    <input type="text" placeholder="" name="firstname" {...register("firstname", { required: 'firstname required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.firstname && <div>{errors.firstname.message}</div>}
                </div>
            </div>

            <div className={signupStyle.lastname}>
                <div className={signupStyle.textInput}><label htmlFor="lastname" className={signupStyle.pass}>Lastname: </label>
                    <input type="text" placeholder="" name="lastname" {...register("lastname", { required: 'lastname required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.lastname && <div>{errors.lastname.message}</div>}
                </div>
            </div>

            <div className={signupStyle.address2}>
                <div className={signupStyle.textInput}><label htmlFor="address" className={signupStyle.pass}>Address: </label>
                    <input type="text" placeholder="" name="address" {...register("address", { required: 'address and number required!' })} />
                    <label htmlFor="number" className={signupStyle.numLabel}>Num:</label>
                    <input type="text" placeholder="" className={signupStyle.number} name="number" {...register("number", { required: 'number required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.address && <div>{errors.address.message}</div>}
                </div>

            </div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="city" className={signupStyle.pass}>City: </label>
                    <input type="text" placeholder="" name="city" {...register("city", { required: 'city required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.city && <div>{errors.city.message}</div>}
                </div>
            </div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="country" className={signupStyle.pass}>Country: </label>
                    <input type="text" placeholder="" name="country" {...register("country", { required: 'country required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.country && <div>{errors.country.message}</div>}
                </div>
            </div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="email" className={signupStyle.pass}>E-mail: </label>
                    <input type="email" placeholder="" name="email" {...register("email", { required: 'email required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.email && <div>{errors.email.message}</div>}
                </div>
            </div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="telephone" className={signupStyle.pass}>Tel: </label>
                    <input type="number" placeholder="" name="telephone" {...register("telephone", { required: 'telephone required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.telephone && <div>{errors.telephone.message}</div>}
                </div>
            </div>

            <div className={signupStyle.choose}>Choose a username and password</div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="username" className={signupStyle.pass}>Username: </label>
                    <input type="text" placeholder="" name="username" {...register("username", { required: 'username required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.username && <div>{errors.username.message}</div>}
                </div>
            </div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="password" className={signupStyle.pass}>Password: </label>
                    <input type="text" placeholder="" name="password" {...register("password", { required: 'password required!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
            </div>

            <div className={signupStyle.name}>
                <div className={signupStyle.textInput}><label htmlFor="repeatpassword" className={signupStyle.pass}>Repeat password: </label>
                    <input type="text" placeholder="" name="repeatpassword" {...register("repeatpassword", { required: 'repeat password!' })} />
                </div>
                <div className={signupStyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.repeatpassword && <div>{errors.repeatpassword.message}</div>}
                </div>
            </div>

            {error ? <div className={signupStyle.overlayShow}>
                <div className={signupStyle.registerednameShow}>
                    <div>{`Oooops!`}</div>
                    <div className={signupStyle.welcome}>Passwords don't match!</div>
                </div>
            </div> : ""}

            {error2 ? <div className={signupStyle.overlayShow}>
                <div className={signupStyle.registerednameShow}>
                    <div>{`Oooops!`}</div>
                    <div className={signupStyle.welcome}><span>Password must be at least</span><span>8 characters long!</span></div>
                </div>
            </div> : ""}

            <button type="submit" className={signupStyle.btn}>Submit</button>

        </form>
    )
}

export default Signupform
