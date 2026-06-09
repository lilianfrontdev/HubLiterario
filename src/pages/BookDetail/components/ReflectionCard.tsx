import { Card, CardContent, Box, Typography, Avatar, Rating, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface ReflectionCardProps {
  name: string;
  grade: string;
  date: string;
  stars: number;
  chapterTag: string;
  text: string;
  likes: number;
}

function ReflectionCard({ name, grade, date, stars, chapterTag, text, likes }: ReflectionCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        width: "100%",
        boxSizing: "border-box",
        mb: 2,
      }}
    >
      <CardContent 
        sx={{ 
          p: { xs: 2.5, sm: 4 }, 
          "&:last-child": { pb: { xs: 2.5, sm: 4 } } 
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "secondary.light",
                color: "secondary.main",
                fontWeight: 600,
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 15,
              }}
            >
              {name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "primary.main", fontSize: 15 }}>
                {name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.2 }}>
                {grade} • {date}
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 2, 
              width: { xs: "100%", sm: "auto" }, 
              justifyContent: "space-between" 
            }}
          >
            <Rating value={stars} readOnly size="small" sx={{ color: "secondary.main" }} />
            <Box
              sx={{
                bgcolor: "#FAF6EE",
                color: "#5C3D2E",
                fontSize: 11,
                fontWeight: 600,
                px: 1.5,
                py: 0.5,
                borderRadius: 5,
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {chapterTag}
            </Box>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            color: "text.primary",
            lineHeight: 1.8,
            fontSize: 15,
            mb: 3,
            fontFamily: '"Georgia", serif', 
          }}
        >
          "{text}"
        </Typography>

        <Button
          variant="outlined"
          startIcon={<FavoriteBorderIcon sx={{ fontSize: "16px !important" }} />}
          sx={{
            borderRadius: 3,
            borderColor: "divider",
            color: "text.secondary",
            textTransform: "none",
            fontSize: 13,
            fontFamily: '"DM Sans", sans-serif',
            px: 2,
            py: 0.5,
            "&:hover": {
              borderColor: "secondary.main",
              bgcolor: "rgba(212, 146, 42, 0.04)",
              color: "secondary.main",
            },
          }}
        >
          {likes}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ReflectionCard;