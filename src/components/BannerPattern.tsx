import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";

interface BannerPatternProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

function BannerPattern({ children, maxWidth = "md" }: BannerPatternProps) {
  return (
    <Box
      sx={{
        color: "primary.contrastText",
        py: { xs: 6, sm: 8, md: 12 },
        px: 2,
        textAlign: "center",
        position: "relative",
        backgroundColor: "#4D3225", 
        backgroundImage: `
          linear-gradient(45deg, #5C3D2E 25%, transparent 25%, transparent 75%, #5C3D2E 75%, #5C3D2E),
          linear-gradient(45deg, #5C3D2E 25%, transparent 25%, transparent 75%, #5C3D2E 75%, #5C3D2E)
        `,
        backgroundPosition: "0 0, 20px 20px", 
        backgroundSize: "40px 40px", 
      }}
    >
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </Box>
  );
}

export default BannerPattern;