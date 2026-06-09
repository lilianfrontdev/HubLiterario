import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import BannerPattern from "../../components/BannerPattern";
import InfoCard from "../Home/components/InfoCard";
import { ChapterItem } from "./components/ChapterItem";
import ReflectionCard from "./components/ReflectionCard";

function BookDetail() {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}
    >
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/obras")}
        sx={{
          textTransform: "none",
          color: "text.secondary",
          mb: 4,
          "&:hover": { bgcolor: "transparent", color: "primary.main" },
        }}
      >
        Voltar ao acervo
      </Button>

      <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: 8 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: { xs: 380, md: 500 },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <BannerPattern>
              <Box sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#F0B84A",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  No Caminho Contaremos Nossos Sonhos
                </Typography>
                <Typography sx={{ color: "white", opacity: 0.8, fontSize: 14 }}>
                  Severino Rodrigues
                </Typography>
                <Box
                  sx={{
                    width: 40,
                    height: 2,
                    bgcolor: "#F0B84A",
                    mx: "auto",
                    mt: 3,
                  }}
                />
              </Box>
            </BannerPattern>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
            {["Refúgio", "Identidade", "Cultura Afro", "Migração"].map((t) => (
              <Chip
                key={t}
                label={t}
                sx={{
                  bgcolor: "#FAF6EE",
                  color: "#5C3D2E",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              />
            ))}
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 600,
              color: "primary.main",
              fontSize: { xs: 32, md: 48 },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            No Caminho Contaremos Nossos Sonhos
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "secondary.main", mb: 3, fontWeight: 500 }}
          >
            Severino Rodrigues • 2022
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
            <Typography
              sx={{ color: "#D4922A", fontWeight: 700, fontSize: 20 }}
            >
              ★ 4.7
            </Typography>
            <Typography variant="body2" color="text.secondary">
              média das avaliações
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "text.primary",
              fontSize: { xs: 16, md: 18 },
              opacity: 0.9,
              maxWidth: 700,
            }}
          >
            Um romance que acompanha jovens refugiados africanos em sua jornada
            pelo Brasil, entrelaçando identidade, pertencimento e a força dos
            sonhos como resistência.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 5 }}>
        <Tabs
          value={tabValue}
          onChange={(_, v) => setTabValue(v)}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label="Contextualização"
            sx={{ textTransform: "none", fontWeight: 600, px: 4 }}
          />
          <Tab
            label="Capítulos"
            sx={{ textTransform: "none", fontWeight: 600, px: 4 }}
          />
          <Tab
            label="Reflexões (3)"
            sx={{ textTransform: "none", fontWeight: 600, px: 4 }}
          />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              title="Contexto Histórico"
              text="A obra se passa em um contexto de crescente migração africana para o Brasil, especialmente após conflitos na África Central e Ocidental nos anos 2010."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              title="Contexto Geográfico"
              text="A narrativa percorre desde Guiné-Bissau e Senegal até as cidades brasileiras de São Paulo e Porto Alegre."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              title="Contexto Cultural"
              text="Aborda rituais, línguas e tradições de povos Mandinga e Wolof, conectando-os à diáspora afro-brasileira."
            />
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <ChapterItem
            num={1}
            title="Parte I: O Horizonte"
            rating={5.0}
            reflections={1}
          />
          <ChapterItem
            num={2}
            title="Parte II: As Estradas"
            rating={4.0}
            reflections={1}
          />
          <ChapterItem
            num={3}
            title="Parte III: As Vozes"
            rating={5.0}
            reflections={1}
          />
          <ChapterItem num={4} title="Parte IV: Os Sonhos" reflections={0} />
        </Box>
      )}

      {tabValue === 2 && (
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 1, overflowX: "auto", pb: 1 }}>
              {["Todos", "Parte I", "Parte II", "Parte III"].map((f, i) => (
                <Chip
                  key={f}
                  label={f}
                  clickable
                  variant={i === 0 ? "filled" : "outlined"}
                  sx={{
                    bgcolor: i === 0 ? "secondary.main" : "transparent",
                    color: i === 0 ? "white" : "#5C3D2E",
                    fontWeight: i === 0 ? 600 : 500,
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                />
              ))}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
            >
              + Publicar Reflexão
            </Button>
          </Box>

          <ReflectionCard
            name="Maria Clara"
            grade="3ºA"
            date="2025-05-10"
            stars={5}
            chapterTag="Parte I: O Horizonte"
            text="Quando Aminata olha para o mar pela primeira vez no Brasil, senti que ela estava olhando para um espelho — ela via o mesmo oceano que seus antepassados cruzaram, mas agora ela escolhia estar aqui."
            likes={14}
          />
        </Box>
      )}
    </Container>
  );
}

export default BookDetail;
