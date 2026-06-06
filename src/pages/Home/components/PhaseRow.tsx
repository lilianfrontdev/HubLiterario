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
        gap: 3, 
        alignItems: "flex-start", 
        bgcolor: "background.paper", 
        borderRadius: 4, 
        p: 4,
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
          fontWeight: 600
        }}
      >
        {num}
      </Avatar>
      
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Box 
            component="img" 
            src={icon} 
            alt={title}
            sx={{ 
              width: 24, 
              height: 24, 
              objectFit: "contain" 
            }} 
          />
          <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.75, opacity: 0.9 }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default PhaseRow;