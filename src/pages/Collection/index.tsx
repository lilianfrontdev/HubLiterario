import { Container, Grid, Box, Typography } from "@mui/material";
import BannerPattern from "../../components/BannerPattern";
import BannerTag from "../../components/BannerTag";
import Title from "../../components/Title";
import BookCard from "./components/BookCard";
import Subtitle from "../../components/Subtitle";

const BOOKS_MOCK = [
  {
    id: "1",
    title: "No Caminho Contaremos Nossos Sonhos",
    author: "Severino Rodrigues",
    year: 2022,
    tags: ["Refúgio", "Identidade"],
    reflectionsCount: 3,
    rating: 4.7,
  },
  {
    id: "2",
    title: "No Caminho Contaremos Nossos Sonhos",
    author: "Severino Rodrigues",
    year: 2022,
    tags: ["Refúgio", "Identidade"],
    reflectionsCount: 3,
    rating: 4.7,
  },
];

function CollectionPage() {
  return (
    <Box>
      <BannerPattern maxWidth="lg">
        <Box sx={{ textAlign: "left", py: { xs: 2, md: 4 } }}>
          <BannerTag variant="light">Acervo Literário</BannerTag>
          <Title text="Explore as" highlightText="obras do Hub" />
          <Typography
            sx={{ color: "white", opacity: 0.8, maxWidth: 600, mb: 4 }}
          >
            Navegue pelo acervo, aprofunde-se no contexto de cada obra e
            compartilhe suas reflexões com a senha do seu professor.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{ color: "#F0B84A", fontWeight: 700, fontSize: 24 }}
              >
                2
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                obras
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{ color: "#11CAA0", fontWeight: 700, fontSize: 24 }}
              >
                3
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                reflexões
              </Typography>
            </Box>
          </Box>
        </Box>
      </BannerPattern>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Subtitle>Obras disponíveis</Subtitle>
        <Grid container spacing={4}>
          {BOOKS_MOCK.map((book) => (
            <Grid key={book.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <BookCard {...book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CollectionPage;
