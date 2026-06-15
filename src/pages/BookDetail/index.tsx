import { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BannerPattern from "../../components/BannerPattern";
import InfoCard from "../Home/components/InfoCard";
import { ChapterItem } from "./components/ChapterItem";
import ReflectionCard from "./components/ReflectionCard";
import ReflectionForm from "./components/ReflectionForm";
import type { Book, Reflection } from "../../types/api";
import { bookService } from "../../services/book";
import { reflectionService } from "../../services/reflection";

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [book, setBook] = useState<Book | null>(null);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookAndReflections() {
      if (!id) return;
      try {
        setLoading(true);

        const [fetchedBook, allReflections] = await Promise.all([
          bookService.getBookById(id),
          reflectionService.getAllReflections(),
        ]);

        setBook(fetchedBook);

        const filteredReflections = allReflections.filter(
          (ref) => ref["book-title"] === fetchedBook.title,
        );
        setReflections(filteredReflections);
      } catch (error) {
        console.error("Erro ao carregar detalhes da obra:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBookAndReflections();
  }, [id, isPublishing]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography color="text.secondary">
          Carregando detalhes do hub literário...
        </Typography>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography color="error">Obra não encontrada no acervo.</Typography>
        <Button onClick={() => navigate("/obras")} sx={{ mt: 2 }}>
          Voltar ao acervo
        </Button>
      </Container>
    );
  }

  const tagsArray = book.tags ? book.tags.split(",").map((t) => t.trim()) : [];
  const chaptersArray = book.chapter
    ? book.chapter.split("\n").filter((c) => c.trim() !== "")
    : [];

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
            <BannerPattern maxWidth={false}>
              <Box
                sx={{
                  py: { xs: 6, md: 10 },
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#F0B84A",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600,
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {book.title}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    opacity: 0.8,
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  {book.author}
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
            {tagsArray.map((t) => (
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
            {book.title}
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "secondary.main", mb: 3, fontWeight: 500 }}
          >
            {book.author} • {book.year}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
            <Typography
              sx={{ color: "#D4922A", fontWeight: 700, fontSize: 20 }}
            >
              ★ {book.rating > 0 ? book.rating.toFixed(1) : "Novo"}
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
            {book.description || "Nenhuma sinopse disponível para este livro."}
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
            label={`Reflexões (${reflections.length})`} // Contador dinâmico na aba
            sx={{ textTransform: "none", fontWeight: 600, px: 4 }}
          />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              title="Contexto Histórico"
              text={
                book["historical-context"] ||
                "Contexto histórico não preenchido."
              }
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              title="Contexto Geográfico"
              text={
                book["geographic-context"] ||
                "Contexto geográfico não preenchido."
              }
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              title="Contexto Cultural"
              text={
                book["cultural-context"] || "Contexto cultural não preenchido."
              }
            />
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {chaptersArray.length > 0 ? (
            chaptersArray.map((chapterName, index) => {
              const chapterReflections = reflections.filter(
                (r) => r["chapter-tag"] === chapterName,
              );

              return (
                <ChapterItem
                  key={index}
                  num={index + 1}
                  title={chapterName}
                  reflections={chapterReflections.length}
                  rating={
                    chapterReflections.length > 0
                      ? Number(
                          (
                            chapterReflections.reduce(
                              (acc, r) => acc + r.stars,
                              0,
                            ) / chapterReflections.length
                          ).toFixed(1),
                        )
                      : undefined
                  }
                />
              );
            })
          ) : (
            <Typography color="text.secondary">
              Nenhum capítulo cadastrado.
            </Typography>
          )}
        </Box>
      )}

      {tabValue === 2 && (
        <Box sx={{ width: "100%" }}>
          {!isPublishing ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 4,
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}></Box>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setIsPublishing(true)}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  + Publicar Reflexão
                </Button>
              </Box>

              {reflections.length > 0 ? (
                reflections.map((ref) => (
                  <ReflectionCard
                    key={ref.id}
                    id={ref.id}
                    name={ref.name}
                    grade={ref.grade}
                    date={ref.date}
                    stars={ref.stars}
                    chapterTag={ref["chapter-tag"]}
                    text={ref.text}
                    likes={ref.likes || 0}
                  />
                ))
              ) : (
                <Typography
                  color="text.secondary"
                  sx={{ py: 4, textAlign: "center" }}
                >
                  Seja o primeiro a compartilhar uma reflexão sobre esta obra!
                </Typography>
              )}
            </>
          ) : (
            <ReflectionForm
              bookTitle={book.title}
              onCancel={() => setIsPublishing(false)}
              onSuccess={() => setIsPublishing(false)}
            />
          )}
        </Box>
      )}
    </Container>
  );
}

export default BookDetail;
