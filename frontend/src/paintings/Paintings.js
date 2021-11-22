import React from 'react'
import './paintings.css';
import ListItems from './ListItems'
import { useGlobalContext } from '../Context';

const Paintings = () => {

    let { paintings } = useGlobalContext()
   
return (
        <div>
            <div className="wrapper">
                <div className="listContainer">
                    <div className="paintingsList">
                        {paintings.map(product => {
                            const { _id, name, price, imgSrc, like, artNr, technique } = product
                            return (
                                <ListItems key={_id} _id={_id} name={name} price={price} imgSrc={imgSrc} like={like} artNr={artNr} technique={technique}/>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Paintings
