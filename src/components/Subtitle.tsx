import { Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

function Subtitle({ children }: SubtitleProps) {
  return (
    <Typography
      variant="body1"
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        opacity: 0.9,
        fontSize: { xs: 15, sm: 16 },
        lineHeight: 1.6,
        mb: 4,
      }}
    >
      {children}
    </Typography>
  );
}

export default Subtitle;
