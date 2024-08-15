import classes from "./Header.module.css";
import drone from "../assets/drone.mp4";
import Typography from "@mui/material/Typography";

function Header() {
    return (
        <div className={classes.header}>
            <video autoPlay muted loop id="dronemp4">
                <source src={drone} type="video/mp4" />
            </video>
            <div className={classes.slogan}>
                <Typography
                    sx={{
                        fontSize: {
                            xs: "2.5rem",
                            sm: "3rem",
                            md: "4rem",
                            lg: "5.5rem",
                        },
                        fontWeight: "bold",fontFamily:' "Raleway", sans-serif',
                    }}
                >
                    Dine on Cloud Nine
                </Typography>
                <Typography sx={{ fontSize: { xs: "1rem", sm: "2rem" },fontFamily:' "Raleway", sans-serif' }}>
                    Instant Food Delivery at Your Fingertips!
                </Typography>
            </div>
        </div>
    );
}

export default Header;
