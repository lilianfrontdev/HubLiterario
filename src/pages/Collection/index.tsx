import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import BannerPattern from "../../components/BannerPattern";
import BannerTag from "../../components/BannerTag";
import Title from "../../components/Title";
import BookCard from "./components/BookCard";
import Subtitle from "../../components/Subtitle";
import type { Book, Reflection } from "../../types/api";
import { bookService } from "../../services/book";
import { reflectionService } from "../../services/reflection";

function CollectionPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [allReflections, setAllReflections] = useState<Reflection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCollectionData() {
      try {
        const [fetchedBooks, fetchedReflections] = await Promise.all([
          bookService.getAllBooks(),
          reflectionService.getAllReflections(),
        ]);

        setBooks(fetchedBooks);
        setAllReflections(fetchedReflections);
      } catch (error) {
        console.error("Erro ao carregar dados do acervo:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCollectionData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          bgcolor: "#FAF6EE",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CircularProgress color="secondary" size={48} thickness={4.5} />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}
        >
          Carregando acervo literário...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#FAF6EE", minHeight: "100vh" }}>
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
                {books.length}
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
                {allReflections.length}
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
          {books.map((book) => {
            const formattedTags = book.tags
              ? book.tags.split(",").map((tag) => tag.trim())
              : [];
            const reflectionsCount = allReflections.filter(
              (ref) => ref["book-title"] === book.title,
            ).length;

            return (
              <Grid key={book.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <BookCard
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  tags={formattedTags}
                  reflections={reflectionsCount}
                  rating={book.rating || 0}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default CollectionPage;
