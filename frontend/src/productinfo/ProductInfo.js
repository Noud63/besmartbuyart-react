import React, { useCallback, useState, useEffect } from 'react'
import styles from './ProductInfo.module.css'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const ProductInfo = () => {

    const { id } = useParams();
    const [project, setProject] = useState({});

    const getProduct = useCallback(() => {
        let products = localStorage.getItem('PAINTINGS')
        if (products) {
            let item = JSON.parse(products).find(el => el._id === id)
            setProject(item)
            console.log(item)
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            getProduct()
        }
    }, [getProduct, id]);

    
    return (
        <div className={styles.container}>

            <div className={styles.productHeader}>PRODUCT INFO</div>

            <div className={styles.productBox}>

                <div className={styles.infoImg}>
                    <div className={styles.data1}><img src={project.imgSrc} alt={project.name} style={{ width: 'auto', height: '130px' }} /></div>
                </div>

                <div className={styles.infoData}>
                    <div className={styles.data}>Title</div>:
                    <div className={styles.data2}>{project.name}</div>
                </div>

                <div className={styles.infoData}>
                    <div className={styles.data}>Written in full</div>:
                    <div className={styles.data2}>{project.fullname}</div>
                </div>

                <div className={styles.infoData}>
                    <div className={styles.data}>Technique</div>:
                    <div className={styles.data2}>{project.technique}</div>
                </div>

                <div className={styles.infoData}>
                    <div className={styles.data}>Year</div>:
                    <div className={styles.data2}>{project.year}</div>
                </div>

                <div className={styles.infoData}>
                    <div className={styles.data}>Size</div>:
                    <div className={styles.data2}>{project.size}</div>
                </div>

                <div className={styles.infoData}>
                    <div className={styles.data}>Price (incl. vat)</div>:
                    <div className={styles.data2}>&euro; {project.price},-</div>
                </div>

                <Link to='/paintings' className={styles.link}>
                    <button className={styles.gobackBtn}>Go Back</button>
                </Link>


            </div>

        </div>


    )
}

export default ProductInfo
