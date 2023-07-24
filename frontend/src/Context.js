import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'

const allData = React.createContext()

const Context = ({ children }) => {

    const [liked, setLiked] = useState([]);
    const [cart, setCart] = useState([]);
    const [paintings, setPaintings] = useState([]);
    const [userName, setUserName] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({})

    let [total, setTotal] = useState(0)
    let [vat, setVat] = useState(0)
    let [price, setPrice] = useState(0)
    let [units, setUnits] = useState(1)


    const loadProducts = useCallback(() => {
          const fetchData = async () => {
            try {
                const res = await axios.get('/artworks')
                    const data = res.data
                
                    if(localStorage.getItem("PAINTINGS")){
                       setPaintings(JSON.parse(localStorage.getItem("PAINTINGS")))
                    }else{
                        setPaintings(data)
                    }
                } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        loadProducts()
    }, [loadProducts])


    const storage = useCallback(() => {
        localStorage.getItem("CART") ? setCart(JSON.parse(localStorage.getItem("CART"))) : setCart([]);
        localStorage.getItem("LIKES") ? setLiked(JSON.parse(localStorage.getItem("LIKES"))) : setLiked([]);
        if (localStorage.getItem("USERNAME")) {
            setLoggedIn(true)
            setUserName(JSON.parse(localStorage.getItem("USERNAME")))
            setUserData(JSON.parse(localStorage.getItem("LOGGEDINUSER")))
        }

    }, []);

    useEffect(() => {
        storage()
    }, [storage]);


    const setTotals = useCallback(() => {
        let totalPerProduct = 0
        let totalUnits = 0
        let price = 0
        let vat = 0
        let tax = 15
        let total = 0
        cart.forEach(el => {
            totalUnits += el.numberOfUnits
            totalPerProduct = el.numberOfUnits * el.price
            price += totalPerProduct
            vat = (price / 100) * tax
            total = price + vat
        })
        setUnits(totalUnits)
        setPrice(price)
        setVat(vat)
        setTotal(total)
    }, [cart])

    useEffect(() => {
        setTotals()
    }, [setTotals])

    // console.log(userData)

    return (
        <allData.Provider value={{
            liked, setLiked,
            cart, setCart,
            paintings, setPaintings,
            userName,
            setUserName,
            loggedIn,
            setLoggedIn,
            userData,
            setUserData,
            total,
            vat,
            price,
            units
        }}>{children}</allData.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(allData)
}

export { allData, Context }