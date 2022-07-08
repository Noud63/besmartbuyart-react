import React from 'react';
import { useGlobalContext } from '../Context'
import './likes.css';

const Likes = ({ showLikes, setShowLikes }) => {

    let { liked, setLiked, paintings, setPaintings } = useGlobalContext()

    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);


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

        //remove sidebar overlay
        if (liked.length === 0) {
            setShowLikes(false)
        }

        setPaintings(paintings)
        setLiked(liked)
        localStorage.setItem("PAINTINGS", JSON.stringify(paintings))
        localStorage.setItem('LIKES', JSON.stringify(liked))
    }

    const class1 = showLikes && scrolled ? "likesContainer top" : "likesContainer show"
    const class2 = showLikes && !scrolled  ? "likesContainer show" : "likesContainer"

    return (

        <div className={showLikes ? class1 : class2}>
    
            <div className="likesHeader">You like these paintings</div>
            {liked && liked.map(item => {
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
