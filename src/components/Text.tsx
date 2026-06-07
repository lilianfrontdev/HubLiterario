import { Typography } from "@mui/material";
import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "dark" | "light";
  align?: "left" | "center" | "right" | "justify";
  mb?: number; 
}

function Text({ children, variant = "dark", align = "left", mb = 2 }: TextProps) {
  const isDark = variant === "dark";

  return (
    <Typography
      variant="body1"
      align={align}
      sx={{
        color: isDark ? "primary.main" : "primary.contrastText",
        lineHeight: 1.8,
        fontSize: 15,
        mb: mb,
        opacity: isDark ? 1 : 0.9, 
      }}
    >
      {children}
    </Typography>
  );
}

export default Text;