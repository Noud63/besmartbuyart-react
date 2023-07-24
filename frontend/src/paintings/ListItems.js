import React,{useEffect, useCallback, useState} from 'react'
import { useGlobalContext } from '../Context';
// import { SRLWrapper } from "simple-react-lightbox";
import { Link } from 'react-router-dom'
import ImageEnlarge from  '../lightbox'

const ListItems = ({ _id, name, price, imgSrc, imgBig, like, technique }) => {

    let { liked, paintings, setPaintings, cart, setCart } = useGlobalContext()

    const getProduct = (_id) => {
        if (cart.some(el => el._id === _id)) {
            alert('Already in Cart!')
            return
        }
        paintings.forEach(el => {
            if (el._id === _id) {
                cart.push(el);
            }
            setCart([...cart])
        })
        localStorage.setItem("CART", JSON.stringify(cart));
    }

    const toggleHeart = (_id) => {
        if (liked.some(el => el._id === _id)) {
            alert('Liked already!')
            return
        }
        paintings = paintings.map(el => {
            if (el._id === _id) {
                el.like = true
                liked.push(el)
            }
            return el
        })
        setPaintings([...paintings])
        localStorage.setItem('PAINTINGS', JSON.stringify(paintings))
        localStorage.setItem('LIKES', JSON.stringify(liked))
        
        
    }
    
return (

        <div className="item" key={_id}>

            <div className='add-to-wish-list' >
                <img src={like ?
                    process.env.PUBLIC_URL + '/icons/redheart.png' : process.env.PUBLIC_URL + '/icons/greenheart.png'}
                    style={{ width: "48px", height: "48px" }} className="addToWishList" alt="heart" onClick={() => toggleHeart(_id)} />
            </div>

            <div className="add-to-cart" onClick={() => getProduct(_id)}>
                <img src={process.env.PUBLIC_URL + '/icons/bag-plus.png'} alt="" />
            </div >
       
             <ImageEnlarge name={name}  imgBig={imgBig}  imgSrc={imgSrc}/>
            {/* <SRLWrapper options={options}> */}
            {/* <div className="pic">
                <a href={process.env.PUBLIC_URL + `${imgBig}`}>
                        <img src={process.env.PUBLIC_URL + `${imgSrc}`} alt={name} className="paintingPic"/>
                    </a>
            </div> */}
            {/* </SRLWrapper> */}

            <div className="info">
                <div><span>Title: </span>{name}</div>
                <div><span>Technique: </span>{technique}</div>
                <div><span>Price: </span>&euro; {price},-</div>
            </div>
           
           <Link to={`/productinfo/${name}`} style={{textDecoration: 'none'}}>
            <div className="itemFooter">Product Info</div>
           </Link>
            
        </div>
    )
}

export default ListItems
