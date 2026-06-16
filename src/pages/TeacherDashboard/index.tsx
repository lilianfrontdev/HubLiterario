import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BannerPattern from "../../components/BannerPattern";
import TeacherBook from "./components/TeacherBook";
import Text from "../../components/Text";
import Title from "../../components/Title";
import BookForm from "./components/BookForm";
import type { Book } from "../../types/api";
import { bookService } from "../../services/book";
import { useNavigate } from "react-router-dom";
import DashboardStatCard from "./components/DashboardStatCard";

function TeacherDashboard() {
  const [isCreating, setIsCreating] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [totalReflections, setTotalReflections] = useState(0);
  const [averageRating, setAverageRating] = useState<string | number>("0.0");
  const [loading, setLoading] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isTeacherAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    async function loadDashboardMetrics() {
      try {
        const fetchedBooks = await bookService.getAllBooks();
        setBooks(fetchedBooks);

        if (fetchedBooks.length > 0) {
          const reflectionsCount = fetchedBooks.reduce(
            (acc, b) => acc + (b.reflections || 0),
            0,
          );
          setTotalReflections(reflectionsCount);
          const ratedBooks = fetchedBooks.filter((b) => (b.rating || 0) > 0);
          const avg =
            ratedBooks.length > 0
              ? (
                  ratedBooks.reduce((acc, b) => acc + b.rating, 0) /
                  ratedBooks.length
                ).toFixed(1)
              : "0.0";
          setAverageRating(avg);
        }
      } catch (error) {
        console.error(
          "Falha ao sincronizar painel gerencial do professor:",
          error,
        );
      } finally {
        setLoading(false);
      }
    }

    loadDashboardMetrics();
  }, [isCreating, navigate]);

  const handleSaveBook = async (bookData: any) => {
    try {
      const payload = {
        title: bookData.title,
        author: bookData.author,
        year: Number(bookData.year),
        password: bookData.password,
        tags: Array.isArray(bookData.tags)
          ? bookData.tags.join(", ")
          : bookData.tags,
        description: bookData.synopsis || bookData.description || "",
        chapter: Array.isArray(bookData.chapters)
          ? bookData.chapters.join("\n")
          : bookData.chapter,
        "historical-context":
          bookData.context?.history || bookData["historical-context"] || "",
        "geographic-context":
          bookData.context?.geometry || bookData["geographic-context"] || "",
        "cultural-context":
          bookData.context?.cultural || bookData["cultural-context"] || "",
        reflections: 0,
        rating: 0,
      };

      await bookService.createBook(payload);
      setIsCreating(false);
      setOpenAlert(true);
    } catch (error) {
      alert("Houve um erro de comunicação ao salvar a nova obra no banco.");
      console.log(error);
    }
  };

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
          Carregando área do professor...
        </Typography>
      </Box>
    );
  }

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

              {!isCreating && (
                <Button
                  variant="contained"
                  onClick={() => setIsCreating(true)}
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
              )}
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
        {!isCreating ? (
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={3} sx={{ mb: 5 }}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <DashboardStatCard
                  value={books.length}
                  label="obras cadastradas"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <DashboardStatCard
                  value={totalReflections}
                  label="reflexões totais"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <DashboardStatCard
                  value={`${averageRating}★`}
                  label="estrelas médias"
                />
              </Grid>
            </Grid>

            <Box sx={{ width: "100%", mt: 5 }}>
              {books.length > 0 ? (
                books.map((book) => (
                  <TeacherBook
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    reflections={book.reflections || 0}
                    rating={book.rating || 0}
                    password={book.password}
                  />
                ))
              ) : (
                <Typography
                  color="text.secondary"
                  sx={{ py: 4, textAlign: "center" }}
                >
                  Nenhuma obra cadastrada no painel. Clique no botão acima para
                  iniciar.
                </Typography>
              )}
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: "100%", mt: 2 }}>
            <BookForm
              onCancel={() => setIsCreating(false)}
              onSave={handleSaveBook}
            />
          </Box>
        )}
      </Container>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ zIndex: 9999 }}
      >
        <Alert
          severity="success"
          icon={<FavoriteIcon sx={{ color: "white" }} />}
          sx={{
            bgcolor: "#11CAA0",
            color: "white",
            borderRadius: 3,
            fontWeight: 600,
            boxShadow: "0px 8px 24px rgba(17, 202, 160, 0.2)",
            "& .MuiAlert-icon": { color: "white" },
          }}
        >
          A nova obra foi cadastrada com sucesso e já está no acervo!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default TeacherDashboard;
