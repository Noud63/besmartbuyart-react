import React from 'react'
import styles from './UserScreen.module.css'
import { useGlobalContext } from '../Context'

const UserScreen = () => {

    let { userData } = useGlobalContext()
    const { loggedInUser } = userData

    return (
        <div className={styles.container}>

            <div className={styles.profileHeader}>USER PROFILE</div>

            <div className={styles.personalDataBox}>

                <div className={styles.personalData}>
                    <div className={styles.data}>Firstname</div>:
                    <div className={styles.data2}>{loggedInUser.firstname}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Lastname</div>:
                    <div className={styles.data2}>{loggedInUser.lastname}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Address</div>:
                    <div className={styles.data2}>{loggedInUser.address}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Number</div>:
                    <div className={styles.data2}>{loggedInUser.number}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Zip</div>:
                    <div className={styles.data2}>{loggedInUser.zip}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>City</div>:
                    <div className={styles.data2}>{loggedInUser.city}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Country</div>:
                    <div className={styles.data2}>{loggedInUser.country}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Email</div>:
                    <div className={styles.data2}>{loggedInUser.email}</div>
                </div>

                <div className={styles.personalData}>
                    <div className={styles.data}>Telephone</div>:
                    <div className={styles.data2}>{loggedInUser.telephone}</div>
                </div>

            </div>

        </div>

    )
}

export default UserScreen
