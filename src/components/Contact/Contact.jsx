import CustomBtn from "../ui/Button.jsx";
import Typography from "@mui/material/Typography";
const Contact = () => {
    return (
        <div
            style={{
                backgroundColor: "#c4ceda70",
                width: "100%",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                color: "var(--primary-color)",
                margin: "20px auto",
            }}
        >
            <Typography sx={{m:'20px'}} variant="h2">Need to reach us?</Typography>
            <Typography variant="body2">
                Contact us for any enquiries or assistance with your drone
                delivery experience. We are here for you.
            </Typography>
            <CustomBtn csx={{m:'15px',width:'150px'}} content="Contact Us" />
        </div>
    );
};

export default Contact;
