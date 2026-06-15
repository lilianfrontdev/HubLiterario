import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

interface TeacherBookProps {
  id: string; 
  title: string;
  author: string;
  year: number;
  reflections: number;
  rating: number;
  password: string;
}

function TeacherBook({
  id,
  title,
  author,
  year,
  reflections = 0,
  rating = 0,
  password,
}: TeacherBookProps) {
  const navigate = useNavigate();

  const handleNavigateToHub = () => {
    navigate(`/obras/${id}`);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.2s",
        "&:hover": {
          borderColor: "secondary.main",
          bgcolor: "rgba(250, 246, 238, 0.4)",
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: 18,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>

          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.5,
              rowGap: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {author} • {year}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {reflections === 0
                ? "0 reflexões"
                : reflections === 1
                  ? "1 reflexão"
                  : `${reflections} reflexões`}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StarIcon sx={{ color: "#D4922A", fontSize: 16 }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: "#D4922A" }}
              >
                {Number(rating).toFixed(1)}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ml: { xs: 0, sm: 1 },
                bgcolor: "#FAF6EE",
                px: 1,
                py: 0.2,
                borderRadius: 1,
              }}
            >
              <KeyIcon sx={{ color: "#11CAA0", fontSize: 16 }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {password}
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Button
          variant="outlined"
          onClick={handleNavigateToHub}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            borderColor: "divider",
            color: "text.secondary",
            px: 3,
            whiteSpace: "nowrap",
            width: { xs: "100%", md: "auto" },
            "&:hover": { borderColor: "primary.main", color: "primary.main" },
          }}
        >
          Ver Hub
        </Button>
      </Stack>
    </Paper>
  );
}

export default TeacherBook;
