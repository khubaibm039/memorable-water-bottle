import PropTypes from './props-types';
import "./bottle.css"

const Bottle = ({ bottle, handleAddToCard }) => {
    const { name, img, price } = bottle
    return (
        <div className="bottle">
            <h3>Bottle Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price : {price}$</p>
            <button onClick={() => handleAddToCard(bottle)}>perchase Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}


export default Bottle;