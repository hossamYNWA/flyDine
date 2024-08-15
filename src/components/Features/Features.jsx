import classes from "./Features.module.css";
import Feature from "./Feature.jsx";
import CustomBtn from "../ui/Button.jsx";
const f_Data = [
    {
        title: "Flightrix",
        desc: "experience the future of food delivery with flightrix. Fast, efficient, and eco-friendly drone delivery.",
        btnText: "learn more",
    },
    {
        title: "Wing",
        desc: "Elevate your dining exprience with Wing's cutting-edge drone techology. Quick and reliable delivery.",
        btnText: "discover now",
    },
    {
        title: "DorDash",
        desc: "DorDash offers seamless drone delivery services to bring your favourite meals right to your doorstep",
        btnText: "order today",
    },
];
const Features = () => {
    const features = f_Data.map((feature) => {
        return (
            <Feature
                title={feature.title}
                desc={feature.desc}
                btnText={feature.btnText}
            />
        );
    });
    return (
        <div className={classes.f_container}>
            <h2 style={{fontFamily:' "Raleway", sans-serif'}}>Explore Our Features</h2>
            <div className={classes.f_wrapper}>{features}</div>
            <CustomBtn
                csx={{
                    margin: "15px",
                    color: "white",
                    width: "150px",
                    borderRadius: "25px",
                }}
                content="Get Started"
                darkBg={false}
            ></CustomBtn>
        </div>
    );
};

export default Features;
