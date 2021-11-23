import React from 'react'
import signupstyle from './Signup.module.css'
import { useForm } from "react-hook-form";


const Signupform = ({ setOverlay, setFirstname, getUserData }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (error) {
                setError(false)
            }
        }, 5000)
        return () => clearTimeout(timer);
    }, [error])

    const onSubmit = data => {
        if(data.password !== data.repeatpassword){
            setError(true)
            return
        }
        if (data) {
            setOverlay(true)
            getUserData(data)
        }
        const firstname = data.firstname
        setFirstname(firstname)
        reset()
    };

    const onErrors = errors => console.error(errors);

    return (
        <form action="" onSubmit={handleSubmit(onSubmit, onErrors)} className={signupstyle.form}>

            <div className={signupstyle.firstname}>
                <div className={signupstyle.textInput}><label htmlFor="firstname" className={signupstyle.pass}>Firstname: </label>
                    <input type="text" placeholder="" name="firstname" {...register("firstname", { required: 'firstname required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.firstname && <div>{errors.firstname.message}</div>}
                </div>
            </div>

            <div className={signupstyle.lastname}>
                <div className={signupstyle.textInput}><label htmlFor="lastname" className={signupstyle.pass}>Lastname: </label>
                    <input type="text" placeholder="" name="lastname" {...register("lastname", { required: 'lastname required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.lastname && <div>{errors.lastname.message}</div>}
                </div>
            </div>

            <div className={signupstyle.address2}>
                <div className={signupstyle.textInput}><label htmlFor="address" className={signupstyle.pass}>Address: </label>
                    <input type="text" placeholder="" name="address" {...register("address", { required: 'address and number required!' })} />
                    <label htmlFor="number" className={signupstyle.numLabel}>Num:</label>
                    <input type="text" placeholder="" className={signupstyle.number} name="number" {...register("number", { required: 'number required!' })}/>
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.address && <div>{errors.address.message}</div>}
                </div>

            </div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="city" className={signupstyle.pass}>City: </label>
                    <input type="text" placeholder="" name="city" {...register("city", { required: 'city required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.city && <div>{errors.city.message}</div>}
                </div>
            </div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="country" className={signupstyle.pass}>Country: </label>
                    <input type="text" placeholder="" name="country" {...register("country", { required: 'country required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.country && <div>{errors.country.message}</div>}
                </div>
            </div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="email" className={signupstyle.pass}>E-mail: </label>
                    <input type="email" placeholder="" name="email" {...register("email", { required: 'email required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.email && <div>{errors.email.message}</div>}
                </div>
            </div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="telephone" className={signupstyle.pass}>Tel: </label>
                    <input type="number" placeholder="" name="telephone" {...register("telephone", { required: 'telephone required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.telephone && <div>{errors.telephone.message}</div>}
                </div>
            </div>

            <div className={signupstyle.choose}>Choose a username and password</div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="username" className={signupstyle.pass}>Username: </label>
                    <input type="text" placeholder="" name="username" {...register("username", { required: 'username required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.username && <div>{errors.username.message}</div>}
                </div>
            </div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="password" className={signupstyle.pass}>Password: </label>
                    <input type="text" placeholder="" name="password" {...register("password", { required: 'password required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
            </div>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="repeatpassword" className={signupstyle.pass}>Repeat password: </label>
                    <input type="text" placeholder="" name="repeatpassword" {...register("repeatpassword", { required: 'repeat password!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.repeatpassword && <div>{errors.repeatpassword.message}</div>}
                </div>
            </div>

            {error ? <div className={signupstyle.overlayShow}>
                <div className={signupstyle.registerednameShow}>
                    <div>{`Oooops!`}</div>
                    <div className={signupstyle.welcome}>Passwords don't match!</div>
                </div>
            </div> : ""}

            <button type="submit" className={signupstyle.btn}>Submit</button>

        </form>
    )
}

export default Signupform
