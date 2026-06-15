import { Box, Typography } from "@mui/material";

interface ChapterProps {
  num: number;
  title: string;
  rating?: number;
  reflections?: number;
}

export function ChapterItem({
  num,
  title,
  rating,
  reflections = 0,
}: ChapterProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        p: 2.5,
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(250, 246, 238, 0.4)",
        borderRadius: 2,
        mb: 1.5,
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            bgcolor: "#EAE2D5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#5C3D2E",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {num}
        </Box>
        <Typography
          sx={{ fontWeight: 600, color: "primary.main", fontSize: 16 }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, sm: 5 },
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "flex-end", sm: "flex-start" },
        }}
      >
        {rating !== undefined && (
          <Typography
            variant="caption"
            sx={{ color: "#D4922A", fontWeight: 700, fontSize: 13 }}
          >
            ★ {rating.toFixed(1)}
          </Typography>
        )}

        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontSize: 13 }}
        >
          {reflections === 0
            ? "0 reflexões"
            : reflections === 1
              ? "1 reflexão"
              : `${reflections} reflexões`}
        </Typography>
      </Box>
    </Box>
  );
}
