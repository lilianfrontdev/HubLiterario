import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  to: string;
  variant?: "contained" | "outlined"; 
}

function CustomButton({ children, to, variant = "contained" }: CustomButtonProps) {
  const isContained = variant === "contained";

  return (
    <Button
      component={Link}
      to={to}
      variant={variant}
      sx={{
        textTransform: "none",
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 500,
        px: 4,
        py: 1.2,
        borderRadius: 1.5,
        fontSize: 15,
        width: { xs: "100%", sm: "auto" }, 

        ...(isContained
          ? {
              bgcolor: "secondary.main",
              color: "white",
              "&:hover": {
                bgcolor: "secondary.light",
              },
            }
          : {
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "#FAF6EE",
                bgcolor: "rgba(250, 246, 238, 0.08)",
              },
            }),
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;