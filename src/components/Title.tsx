import { Typography, Box } from "@mui/material";

interface TitleProps {
  text: string;
  highlightText?: string;
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
        width: "100%",          
        maxWidth: "100%",       
        boxSizing: "border-box",
        wordBreak: "break-word" 
      }}
    >
      <Box component="span" sx={{ display: "block", maxWidth: "100%" }}>
        {text}
      </Box>
      
      <Box 
        component="span" 
        sx={{ 
          display: "block", 
          color: "#F0B84A",
          maxWidth: "100%"
        }}
      >
        {highlightText}
      </Box>
    </Typography>
  );
}

export default Title;