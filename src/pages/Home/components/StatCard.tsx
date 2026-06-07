import { Card, CardContent, Typography, Box } from "@mui/material";

interface StatCardProps {
  n: number | string;
  label: string;
  icon: string; 
  iconColor?: string;
}

function StatCard({ n, label, icon, iconColor = "secondary.main" }: StatCardProps) {
  return (
    <Card 
      elevation={0} 
      sx={{ 
        bgcolor: "background.paper", 
        border: "1px solid",
        borderColor: "primary.light",
        opacity: 0.9,
        borderRadius: 3,
        width: "100%",           
        maxWidth: "100%",         
        boxSizing: "border-box"
      }}
    >
      <CardContent 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" }, 
          alignItems: { xs: "center", sm: "center" }, 
          textAlign: { xs: "center", sm: "left" },
          gap: 2, 
          p: { xs: "1rem !important", sm: "1.25rem 1.5rem !important" }, 
          boxSizing: "border-box",
          width: "100%"
        }}
      >
        <Box 
          component="img" 
          src={icon} 
          alt={label}
          sx={{ 
            width: 32, 
            height: 32, 
            objectFit: "contain",
            flexShrink: 0,
            color: iconColor 
          }} 
        />
        <Box sx={{ width: "100%" }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: "secondary.main", 
              fontWeight: 600, 
              lineHeight: 1,
              fontSize: { xs: "1.75rem", sm: "2.125rem" }
            }}
          >
            {n}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.primary" 
            sx={{ 
              fontSize: 13, 
              opacity: 0.8, 
              mt: 0.5,
              wordBreak: "break-word" 
            }}
          >
            {label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;