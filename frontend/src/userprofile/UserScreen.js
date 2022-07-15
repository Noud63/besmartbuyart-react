import React from 'react'
import styles from './UserScreen.module.css'
import { useGlobalContext } from '../Context'

const UserScreen = () => {

    let { userData } = useGlobalContext()
    
    return (
        <div className={styles.container}>

            <div className={styles.profileHeader}>USER PROFILE</div>

            <div className={styles.personalDataBox}>

                <div className={styles.personalData}>
                    <div className={styles.data}>Firstname</div>:
                    <div className={styles.data2}>{userData.firstname}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Lastname</div>:
                    <div className={styles.data2}>{userData.lastname}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Address</div>:
                    <div className={styles.data2}>{userData.address}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Number</div>:
                    <div className={styles.data2}>{userData.number}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Zip</div>:
                    <div className={styles.data2}>{userData.zip}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>City</div>:
                    <div className={styles.data2}>{userData.city}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Country</div>:
                    <div className={styles.data2}>{userData.country}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Email</div>:
                    <div className={styles.data2}>{userData.email}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Telephone</div>:
                    <div className={styles.data2}>{userData.telephone}</div>
                </div>

            </div>

        </div>

    )
}

export default UserScreen
