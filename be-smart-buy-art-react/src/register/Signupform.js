import React from 'react'
import signupstyle from './Signup.module.css'
import { useForm } from "react-hook-form";

const Signupform = ({ setOverlay, setFirstname, setData }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        if (data) {
            setData(data)
            setOverlay(true)
        }
        const firstname = data.name.split(' ')[0]
        setFirstname(firstname)
        reset()
    };

    const onErrors = errors => console.error(errors);

    return (
        <form action="" onSubmit={handleSubmit(onSubmit, onErrors)} className={signupstyle.form}>

            <div className={signupstyle.name}>
                <div className={signupstyle.textInput}><label htmlFor="name" className={signupstyle.pass}>Name: </label>
                    <input type="text" placeholder="" name="name" {...register("name", { required: 'name required!' })} />
                </div>
                <div className={signupstyle.error} style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.name && <div>{errors.name.message}</div>}
                </div>
            </div>

            <div className={signupstyle.address2}>
                <div className={signupstyle.textInput}><label htmlFor="address" className={signupstyle.pass}>Address: </label>
                    <input type="text" placeholder="" name="address" {...register("address", { required: 'address and number required!' })} />
                    <label htmlFor="number" className={signupstyle.numLabel}>Num:</label>
                    <input type="text" placeholder="" className={signupstyle.number} />
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


            <button type="submit" className={signupstyle.btn}>Submit</button>

        </form>
    )
}

export default Signupform
