import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import BannerPattern from "../../../components/BannerPattern";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  year: number;
  tags: string[];
  reflections: number;
  rating: number;
}

function BookCard({
  id,
  title,
  author,
  year,
  tags,
  reflections,
  rating,
}: BookCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 24px rgba(92, 61, 46, 0.05)",
          borderColor: "secondary.light",
        },
      }}
    >
      <CardActionArea component={Link} to={`/obras/${id}`}>
        <Box sx={{ p: 1.5 }}>
          <Box
            sx={{
              height: 320,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <BannerPattern maxWidth={false}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  px: 2,
                  py: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#F0B84A",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    mb: 1,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "white", opacity: 0.8, fontWeight: 500 }}
                >
                  {author}
                </Typography>
              </Box>
            </BannerPattern>
          </Box>
        </Box>

        <CardContent sx={{ pt: 1 }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mb: 2,
              minHeight: 24,
            }}
          >
            {tags.length > 0 ? (
              tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: "#FAF6EE",
                    color: "#5C3D2E",
                    fontWeight: 500,
                    fontSize: 11,
                  }}
                />
              ))
            ) : (
              <Chip
                label="Literatura"
                size="small"
                sx={{
                  bgcolor: "#FAF6EE",
                  color: "#5C3D2E",
                  fontWeight: 500,
                  fontSize: 11,
                }}
              />
            )}
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 1.3,
              mb: 0.5,
              color: "primary.main",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: 44,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {author} • {year}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "text.secondary" }}
            >
              {reflections}{" "}
              {reflections === 1 ? "reflexão" : "reflexões"}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: "#D4922A" }}
              >
                ★ {rating > 0 ? rating.toFixed(1) : "Novo"}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;
