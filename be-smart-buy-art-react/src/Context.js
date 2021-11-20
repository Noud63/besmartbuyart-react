import React, { useCallback } from 'react'
//import products from './products'
import axios from 'axios'

const allData = React.createContext()

const Context = ({ children }) => {

    const [liked, setLiked] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const [paintings, setPaintings] = React.useState([])


    let [total, setTotal] = React.useState(0)
    let [vat, setVat] = React.useState(0)
    let [price, setPrice] = React.useState(0)
    let [units, setUnits] = React.useState(0)


    const loadProducts = useCallback(() => {
        
        if (localStorage.getItem("PAINTINGS")) return
        
        const fetchData = async () => {
            try {
                await axios.get('artworks').then(res => {
                    const data = res.data
                    setPaintings(data)
                })
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    React.useEffect(() => {
        loadProducts()
    }, [loadProducts])


    const storage = useCallback(() => {
        localStorage.getItem("CART") ? setCart(JSON.parse(localStorage.getItem("CART"))) : setCart([]);
        localStorage.getItem("PAINTINGS") ? setPaintings(JSON.parse(localStorage.getItem("PAINTINGS"))) : setPaintings([]);
        localStorage.getItem("LIKES") ? setLiked(JSON.parse(localStorage.getItem("LIKES"))) : setLiked([]);
    }, []);

    React.useEffect(() => {
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

    React.useEffect(() => {
        setTotals()
    }, [setTotals])


    return (
        <allData.Provider value={{ liked, setLiked, cart, setCart, paintings, setPaintings, total, vat, price, units }}>{children}</allData.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(allData)
}

export { allData, Context }
