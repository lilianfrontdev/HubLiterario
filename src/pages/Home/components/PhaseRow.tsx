import { Box, Typography, Avatar } from "@mui/material";

interface PhaseRowProps {
  num: string;
  title: string;
  desc: string;
  icon: string; 
}

function PhaseRow({ num, title, desc, icon }: PhaseRowProps) {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", sm: "row" }, 
        alignItems: "flex-start", 
        gap: 3, 
        bgcolor: "background.paper", 
        borderRadius: 4, 
        p: { xs: 3, sm: 4 }, 
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <Avatar 
        sx={{ 
          bgcolor: "secondary.main", 
          color: "secondary.contrastText", 
          width: 56, 
          height: 56, 
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 18,
          fontWeight: 600,
          flexShrink: 0 
        }}
      >
        {num}
      </Avatar>
      
      <Box sx={{ width: "100%" }}>
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 1.5, 
            mb: 1,
            flexWrap: "wrap" 
          }}
        >
          <Box 
            component="img" 
            src={icon} 
            alt={title}
            sx={{ 
              width: 24, 
              height: 24, 
              objectFit: "contain",
              flexShrink: 0
            }} 
          />
          <Typography 
            variant="h5" 
            color="primary" 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: "1.15rem", sm: "1.25rem" } 
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography 
          variant="body1" 
          color="text.primary" 
          sx={{ 
            lineHeight: 1.75, 
            opacity: 0.9,
            fontSize: { xs: 14, sm: 15 } 
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default PhaseRow;