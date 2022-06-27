import React, { useState, useEffect, useCallback } from 'react'
import styles from './UserScreen.module.css'

const UserScreen = () => {

    const [data, setData] = useState({})

    const getUserFromLocalStorage = useCallback(() => {
        const userData = localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')) : {}
        setData(userData)
        console.log(userData)
    }, [])

    useEffect(() => {
        getUserFromLocalStorage()
    }, [getUserFromLocalStorage])


    return (
        <div className={styles.container}>

            <div className={styles.profileHeader}>USER PROFILE</div>

            <div className={styles.personalDataBox}>

                <div className={styles.personalData}>
                    <div className={styles.data}>Firstname</div>:
                    <div className={styles.data2}>{data.firstname}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Lastname</div>:
                    <div className={styles.data2}>{data.lastname}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Address</div>:
                    <div className={styles.data2}>{data.address}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Number</div>:
                    <div className={styles.data2}>{data.number}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Zip</div>:
                    <div className={styles.data2}>{data.zip}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>City</div>:
                    <div className={styles.data2}>{data.city}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Country</div>:
                    <div className={styles.data2}>{data.country}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Email</div>:
                    <div className={styles.data2}>{data.email}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Telephone</div>:
                    <div className={styles.data2}>{data.telephone}</div>
                </div>

            </div>

        </div>

    )
}

export default UserScreen
