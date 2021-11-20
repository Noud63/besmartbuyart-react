import React from 'react';
import { useGlobalContext } from '../Context'
import './likes.css';

const Likes = ({ showLikes, setShowLikes }) => {

    let { liked, setLiked, paintings, setPaintings } = useGlobalContext()

    //Remove item from likes list
    const removeItemFromLikeslist = (_id) => {
        liked = liked.filter(item => {
            return item._id !== _id;
        });

        //Change likes-heart to green
        paintings = paintings.map(el => {
            if (el._id === _id) {
                el.like = false
            }
            return el
        })

        //remove s_idebar overlay
        if (liked.length === 0) {
            setShowLikes(false)
        }

        setPaintings(paintings)
        setLiked(liked)
        localStorage.setItem("PAINTINGS", JSON.stringify(paintings))
        localStorage.setItem('LIKES', JSON.stringify(liked))
    }


return (

    <div className={showLikes ? "likesContainer show" : "likesContainer"}>
            <div className="likesHeader">You like these paintings</div>
            {liked.map(item => {
                const { _id, name, imgSrc } = item;
                return (
                    <div className="like-item" onClick={() => removeItemFromLikeslist(_id)} key={_id}>
                        <div className="like-info">
                            <img src={imgSrc} style={{ width: "100px" }} alt={name} className="picInCart" />
                        </div>
                        <div className="like-name">
                            <h5>{name}</h5>
                        </div>
                    </div>
                )
            })}
            <div className="clickToDelete">Click item to remove</div>
        </div>
    )
}

export default Likes
