import { Card, CardContent, Typography } from "@mui/material";

interface InfoCardProps {
  title: string;
  text: string;
}

function InfoCard({ title, text }: InfoCardProps) {
  return (
    <Card 
      elevation={0} 
      sx={{ 
        bgcolor: "background.paper", 
        borderRadius: 3, 
        borderTop: "3px solid",
        borderTopColor: "secondary.main",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" component="p" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: 17 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.7, opacity: 0.9 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;