import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import BannerPattern from "../../components/BannerPattern";
import TeacherBook from "./components/TeacherBook";
import Text from "../../components/Text";
import Title from "../../components/Title";

interface DashboardStatCardProps {
  value: string | number;
  label: string;
}

function DashboardStatCard({ value, label }: DashboardStatCardProps) {
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

function TeacherDashboard() {
  return (
    <Box
      sx={{
        bgcolor: "#FAF6EE",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ width: "100%", bgcolor: "primary.main" }}>
        <BannerPattern maxWidth={false}>
          <Container
            maxWidth="lg"
            sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3 } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 3,
                width: "100%",
              }}
            >
              <Box>
                <Title text="Área do Professor" />
                <Text variant="light">
                  Gerencie o acervo e as senhas de acesso dos alunos
                </Text>
              </Box>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#BC5A33",
                  color: "white",
                  borderRadius: 2.5,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: 15,
                  fontFamily: '"DM Sans", sans-serif',
                  boxShadow: "none",
                  whiteSpace: "nowrap",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { bgcolor: "#A04625", boxShadow: "none" },
                }}
              >
                + Cadastrar Obra
              </Button>
            </Box>
          </Container>
        </BannerPattern>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: -4, md: -5 },
          mb: 8,
          px: { xs: 2, sm: 3 },
          position: "relative",
          zIndex: 3,
        }}
      >
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <DashboardStatCard value="1" label="obras cadastradas" />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <DashboardStatCard value="4" label="reflexões totais" />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <DashboardStatCard value="4.8★" label="estrelas médias" />
          </Grid>
        </Grid>

        <Box sx={{ width: "100%", mt: 5 }}>
          <TeacherBook
            title="No Caminho Contaremos Nossos Sonhos"
            author="Severino Rodrigues"
            year={2022}
            reflections={4}
            rating={4.8}
            password="sonhos2025"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default TeacherDashboard;
