import { Card, CardContent, Typography, Box } from "@mui/material";

interface StatCardProps {
  n: number | string;
  label: string;
  icon: string; 
  iconColor?: string; 
}

function StatCard({ n, label, icon }: StatCardProps) {
  return (
    <Card 
      elevation={0} 
      sx={{ 
        bgcolor: "background.paper", 
        border: "1px solid",
        borderColor: "primary.light",
        opacity: 0.9,
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: "1.25rem 1.5rem !important" }}>
        <Box 
          component="img" 
          src={icon} 
          alt={label}
          sx={{ 
            width: 32, 
            height: 32, 
            objectFit: "contain" 
          }} 
        />
        <Box>
          <Typography variant="h4" sx={{ color: "secondary.main", fontWeight: 600, lineHeight: 1 }}>
            {n}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ fontSize: 13, opacity: 0.8, mt: 0.5 }}>
            {label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;