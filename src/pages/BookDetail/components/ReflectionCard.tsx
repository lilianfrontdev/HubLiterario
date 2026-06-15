import { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { reflectionService } from "../../../services/reflection";

interface ReflectionCardProps {
  id: string;
  name: string;
  grade: string;
  date: string;
  stars: number;
  chapterTag: string;
  text: string;
  likes: number;
}

function ReflectionCard({
  id,
  name,
  grade,
  date,
  stars,
  chapterTag,
  text,
  likes,
}: ReflectionCardProps) {
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    if (hasLiked || loading) return;

    try {
      setLoading(true);
      setCurrentLikes((prev) => prev + 1);
      setHasLiked(true);

      await reflectionService.likeReflection(id, likes);
    } catch (error) {
      console.error("Erro ao registrar curtida no acervo:", error);
      setCurrentLikes(likes);
      setHasLiked(false);
    } finally {
      setLoading(false);
    }
  };

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
          "&:last-child": { pb: { xs: 2.5, sm: 4 } },
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
              {name ? name.charAt(0).toUpperCase() : "?"}
            </Avatar>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, color: "primary.main", fontSize: 15 }}
              >
                {name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 0.2 }}
              >
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
              justifyContent: "space-between",
            }}
          >
            <Rating
              value={stars}
              readOnly
              size="small"
              sx={{ color: "secondary.main" }}
            />
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
          onClick={handleLike}
          disabled={hasLiked}
          startIcon={
            hasLiked ? (
              <FavoriteIcon
                sx={{ fontSize: "16px !important", color: "#BC5A33" }}
              />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "16px !important" }} />
            )
          }
          sx={{
            borderRadius: 3,
            borderColor: hasLiked ? "#BC5A33" : "divider",
            color: hasLiked ? "#BC5A33" : "text.secondary",
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
            "&.Mui-disabled": {
              borderColor: "transparent",
              bgcolor: "#FAF6EE",
              color: "#BC5A33",
            },
          }}
        >
          {currentLikes}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ReflectionCard;
