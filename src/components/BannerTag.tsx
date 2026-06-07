import { Typography } from "@mui/material";
import type { ReactNode } from "react";

interface BannerTagProps {
  children: ReactNode;
  variant?: "light" | "dark"; 
  align?: "left" | "center" | "right"; 
}

function BannerTag({ children, variant = "light", align = "left" }: BannerTagProps) {
  const isLight = variant === "light";

  return (
    <Typography
      variant="body2"
      align={align} 
      sx={{
        color: isLight ? "#F0B84A" : "secondary.main", 
        fontWeight: 700,
        mb: 1.5,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        fontSize: 12,
        display: "block", 
      }}
    >
      {children}
    </Typography>
  );
}

export default BannerTag;