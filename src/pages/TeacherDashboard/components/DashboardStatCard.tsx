import { Paper, Typography } from "@mui/material";

interface DashboardStatCardProps {
  value: string | number;
  label: string;
}

export function DashboardStatCard({ value, label }: DashboardStatCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "#EAE2D5",
        borderRadius: 4,
        p: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 120,
        boxShadow: "0px 8px 24px rgba(92, 61, 46, 0.03)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 700,
          color: "#BC5A33",
          lineHeight: 1,
          mb: 1.5,
          fontSize: { xs: "2.5rem", sm: "2.75rem", md: "3rem" },
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontSize: 14,
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 500,
          opacity: 0.8,
        }}
      >
        {label}
      </Typography>
    </Paper>
  );
}

export default DashboardStatCard;