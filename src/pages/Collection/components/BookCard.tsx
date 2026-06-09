import { Card, CardContent, Box, Typography, Chip, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import BannerPattern from "../../../components/BannerPattern";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  year: number;
  tags: string[];
  reflectionsCount: number;
  rating: number;
}

function BookCard({ id, title, author, year, tags, reflectionsCount, rating }: BookCardProps) {
  return (
    <Card 
      elevation={0} 
      sx={{ 
        borderRadius: 4, 
        border: "1px solid", 
        borderColor: "divider",
        transition: "transform 0.2s",
        "&:hover": { transform: "translateY(-4px)" }
      }}
    >
      <CardActionArea component={Link} to={`/obras/${id}`}>
        <Box sx={{ p: 1.5 }}>
          <Box sx={{ height: 320, borderRadius: 2, overflow: "hidden", position: "relative" }}>
             <BannerPattern>
                <Box sx={{ py: 4 }}>
                   <Typography variant="h6" sx={{ color: "#F0B84A", fontFamily: '"Cormorant Garamond", serif', fontSize: 20 }}>
                     {title}
                   </Typography>
                   <Typography variant="caption" sx={{ color: "white", opacity: 0.8 }}>
                     {author}
                   </Typography>
                </Box>
             </BannerPattern>
          </Box>
        </Box>

        <CardContent sx={{ pt: 1 }}>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            {tags.map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ bgcolor: "#FAF6EE", color: "#5C3D2E", fontWeight: 500, fontSize: 11 }} />
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, lineHeight: 1.3, mb: 0.5, color: "primary.main" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {author} • {year}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1, borderTop: "1px solid", borderColor: "divider" }}>
             <Typography variant="caption" sx={{ fontWeight: 500, color: "text.secondary" }}>
               {reflectionsCount} reflexões
             </Typography>
             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "#D4922A" }}>★ {rating}</Typography>
             </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;