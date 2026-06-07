import { Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
  variant?: "light" | "dark"; 
  align?: "left" | "center" | "right"; 
  mb?: number; 
  fontStyle?: "italic" | "normal";
}

function Subtitle({ children, variant = "dark", align = "left", mb = 6, fontStyle = "normal" }: SubtitleProps) {
  const isDark = variant === "dark";

  return (
    <Typography
      variant="h2"
      component="h2"
      align={align}
      sx={{
        color: isDark ? "primary.main" : "primary.contrastText",
        fontWeight: 600,
        fontSize: { xs: 26, md: 32 },
        lineHeight: 1.3,
        mb: mb,
        fontStyle:fontStyle
      }}
    >
      {children}
    </Typography>
  );
}

export default Subtitle;