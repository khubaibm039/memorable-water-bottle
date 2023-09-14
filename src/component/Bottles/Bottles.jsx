import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css"
import { addToLS, getStorageCart } from "../../utilities/localstrage";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    useEffect(() => {
        console.log('bottles length', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStorageCart()
            console.log(storedCart);
        }
    }, [bottles])

    const handleAddToCard = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }
    return (
        <div>
            <h3>Bottles Available : {bottles.length}</h3>
            <h4>Cart : {cart.length}</h4>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id} handleAddToCard={handleAddToCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;