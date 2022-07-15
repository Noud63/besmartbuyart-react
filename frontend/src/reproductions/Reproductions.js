import React from 'react'
import styles from  './Reproductions.module.css';
// import ListItems from './ListItems'
//import { useGlobalContext } from '../Context';

const Paintings = () => {

   //let { paintings } = useGlobalContext()

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.reproductionsHeader}>Preview, reproductions are coming soon!</div>
                <div className={styles.listContainer}>
                      <div className={styles.reproductionsList}>
                        <img src={process.env.PUBLIC_URL + '/img/discoinframe.jpg'} alt="" style={{ width: '300px' }} />
                        <img src={process.env.PUBLIC_URL + '/img/enigmainframe.jpg'} alt="" style={{ width: '300px' }} />
                        <img src={process.env.PUBLIC_URL + '/img/hotelinframe.jpg'} alt="" style={{ width: '300px' }} />
                        <img src={process.env.PUBLIC_URL + '/img/ufoinframe.jpg'} alt="" style={{ width: '300px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paintings