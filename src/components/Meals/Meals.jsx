import classes from "./meals.module.css";
import Meal from "./Meal.jsx";
import burger from "../assets/meals/burger.png";
import pasta from "../assets/meals/pasta.png";
import rice from "../assets/meals/rice.png";
import salad from "../assets/meals/salad.png";
import sushi from "../assets/meals/sushi.png";
import taco from "../assets/meals/taco.png";
const dummy_meals = [
    {
        title: "fried rice",
        desc: "Savor the authentic tate of fried rice cooked with fresh ingredients and traditional spices.",
        image: rice,
        price: 11,
        id: 1,
    },
    {
        title: "sushi platter",
        desc: "Experience the best sushi featuring a variety of fresh fish and perfectly seasoned rice.",
        image: sushi,
        price: 42,
        id: 2,
    },
    {
        title: "taco fiesta",
        desc: "Enjoy a vibrant mix of tacos with flavorful fillings and fresh toppings.",
        image: taco,
        price: 18,
        id: 3,
    },
    {
        title: "pasta delight",
        desc: "Indulge in creamy and delicious pasta dishes that are perfect for any occasion.",
        image: pasta,
        price: 29,
        id: 4,
    },
    {
        title: "burger bliss",
        desc: "Satisfy your cravings with juicy burgers mede with premium angus beef and fresh sauces.",
        image: burger,
        price: 22,
        id: 5,
    },
    {
        title: "salad bowl",
        desc: "Refresh yourself with a healthy and colorful salad featuring fresh greens an vegetables.",
        image: salad,
        price: 8,
        id: 6,
    },
];
const Meals = () => {
    const content = dummy_meals.map((meal) => {
        return (
            <Meal
                title={meal.title}
                desc={meal.desc}
                image={meal.image}
                price={meal.price}
                id={meal.id}
            />
        );
    });
    return (
        <>
            <h2 style={{ fontFamily: ' "Raleway", sans-serif',margin: '10% auto 0',
                         width: '100%',
                         textAlign: 'center',
                         fontSize: '2.5rem',
                         textTransform: 'capitalize',
                         color: 'var(--primary-color)'}}>
                Our Most Popular Meals
            </h2>
            <div className={classes.meals}>{content}</div>
        </>
    );
};

export default Meals;
