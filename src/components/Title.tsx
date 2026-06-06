import { Typography, Box } from "@mui/material";

interface TitleProps {
  text: string;
  highlightText: string;
}

function Title({ text, highlightText }: TitleProps) {
  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: { xs: 32, sm: 42, md: 54 },
        fontWeight: 600,
        lineHeight: 1.2,
        mb: 3,
        color: "primary.contrastText",
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        {text}
      </Box>
      
      <Box 
        component="span" 
        sx={{ 
          display: "block", 
          color: "#F0B84A" 
        }}
      >
        {highlightText}
      </Box>
    </Typography>
  );
}

export default Title;