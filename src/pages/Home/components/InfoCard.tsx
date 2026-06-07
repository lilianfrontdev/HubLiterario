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
        width: "100%",            
        maxWidth: "100%",         
        boxSizing: "border-box",  
        display: "flex",
        flexDirection: "column"
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 3 }, boxSizing: "border-box", width: "100%" }}>
        <Typography 
          variant="h6" 
          component="p" 
          color="primary" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: 17,
            wordBreak: "break-word" 
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.primary" 
          sx={{ 
            lineHeight: 1.7, 
            opacity: 0.9,
            fontSize: { xs: 13.5, sm: 14 }
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;