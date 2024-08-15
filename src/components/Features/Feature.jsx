import classes from "./Features.module.css";
import Button from "@mui/material/Button";

const Feature = ({ title, desc, btnText }) => {
    return (
        <div className={classes.feature}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <Button variant="outlined" sx={{ width: "150px", borderColor:'var(--primary-bright)', color:'var(--primary-bright)',textTransform:'capitalize' }}>
                {btnText}
            </Button>
        </div>
    );
};

export default Feature;
