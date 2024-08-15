import Button from "@mui/material/Button";
const CustomBtn = ({ csx, content,darkBg }) => {
    return (
        <Button
            variant="contained"
            sx={{
                transition: "all ease-in-out 0.3s",
                bgcolor: darkBg
                    ? "var(--primary-light)"
                    : "var(--primary-color)",
                textTransform: "capitalize",
                color: darkBg ? "var(--primary-color)" : "var(--primary-light)",
                "&:hover": {
                    bgcolor: darkBg
                        ? "var(--primary-light)"
                        : "var(--primary-color)",
                    color: darkBg
                        ? "var(--primary-color)"
                        : "var(--primary-light)",
                    opacity: "0.8",
                }, ...csx
            }}
        >
            {content}
        </Button>
    );
};

export default CustomBtn;
