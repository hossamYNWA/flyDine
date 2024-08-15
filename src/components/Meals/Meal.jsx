import classes from "./meals.module.css";

const Meal = ({ title, desc, price, image }) => {
    return (
        <div className={classes.meal}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <span className={classes.price}>${price}</span>
            <img src={image} alt={title}></img>
        </div>
    );
};


export default Meal 