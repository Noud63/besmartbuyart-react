import React from 'react'
import './paintings.css';
import ListItems from './ListItems'
import { useGlobalContext } from '../Context';

const Paintings = () => {

    let { paintings } = useGlobalContext()

    console.log('Returns HTML File?? =>', paintings) 

return (
        <div>
            <div className="wrapper">
                <div className="listContainer">
                    <div className="paintingsList">
                        {paintings && paintings.map((product, index) => {
                            const { _id, name, price, imgSrc, imgBig, like, artNr, technique } = product
                            return (
                                <ListItems key={index} _id={_id} name={name} price={price} imgSrc={imgSrc} like={like} artNr={artNr} technique={technique} imgBig={imgBig}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paintings
