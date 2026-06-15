import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Rating,
  Card,
  CardContent,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { Book } from "../../../types/api";
import { bookService } from "../../../services/book";
import { reflectionService } from "../../../services/reflection";

interface ReflectionFormProps {
  bookTitle: string;
  onCancel: () => void;
  onSuccess: () => void;
}

function ReflectionForm({
  bookTitle,
  onCancel,
  onSuccess,
}: ReflectionFormProps) {
  const [step, setStep] = useState<"password" | "form">("password");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState<number | null>(0);
  const [openAlert, setOpenAlert] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [reflectionText, setReflectionText] = useState("");
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    async function fetchBookData() {
      try {
        const allBooks = await bookService.getAllBooks();
        const foundBook = allBooks.find((b) => b.title === bookTitle);
        if (foundBook) {
          setCurrentBook(foundBook);
        }
      } catch (error) {
        console.error(
          "Erro ao sincronizar informações da obra para o formulário:",
          error,
        );
      } finally {
        setLoading(false);
      }
    }
    fetchBookData();
  }, [bookTitle]);

  const handleConfirmPassword = () => {
    if (!currentBook) {
      alert("Erro ao validar. Dados da obra não carregados.");
      return;
    }

    if (password === currentBook.password) {
      setStep("form");
    } else {
      alert("Senha incorreta. Peça a senha correta ao seu professor.");
    }
  };

  const handlePublish = async () => {
    if (!rating) return;
    try {
      setPublishing(true);

      const payload = {
        "book-title": bookTitle,
        name: studentName,
        grade: studentGrade,
        "chapter-tag": selectedChapter,
        text: reflectionText,
        stars: rating,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      };

      await reflectionService.createReflection(payload);

      setOpenAlert(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      alert("Erro ao registrar sua reflexão no servidor.");
      setPublishing(false);
      console.log(error)
    }
  };

  const chaptersList = currentBook?.chapter
    ? currentBook.chapter.split("\n").filter((c) => c.trim() !== "")
    : [];

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", mt: 2, boxSizing: "border-box" }}>
      {step === "password" && (
        <Card
          elevation={0}
          sx={{
            bgcolor: "#FAF6EE",
            borderRadius: 4,
            border: "1px solid",
            borderColor: "#EAE2D5",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <KeyIcon sx={{ color: "#D4922A", fontSize: 28 }} />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                Acesso por senha
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "text.secondary",
                mb: 4,
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Seu professor forneceu uma senha específica para a obra{" "}
              <strong>"{bookTitle}"</strong>. Insira-a para liberar a publicação
              da sua reflexão.
            </Typography>

            <Box sx={{ maxWidth: 600, width: "100%" }}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  color: "text.secondary",
                  mb: 1,
                  display: "block",
                  letterSpacing: "0.05em",
                }}
              >
                SENHA DO LIVRO
              </Typography>
              <TextField
                fullWidth
                type="password"
                placeholder="Senha fornecida pelo professor"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": { borderRadius: 2 },
                }}
              />
              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleConfirmPassword}
                  sx={{
                    bgcolor: "secondary.main",
                    color: "white",
                    textTransform: "none",
                    px: 4,
                    py: 1,
                    fontWeight: 600,
                    borderRadius: 2,
                    "&:hover": { bgcolor: "secondary.dark" },
                  }}
                >
                  Confirmar
                </Button>
                <Button
                  variant="outlined"
                  onClick={onCancel}
                  sx={{
                    borderColor: "divider",
                    color: "text.secondary",
                    textTransform: "none",
                    px: 4,
                    py: 1,
                    borderRadius: 2,
                  }}
                >
                  Cancelar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {step === "form" && (
        <Card
          elevation={0}
          sx={{
            bgcolor: "background.paper",
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                color: "primary.main",
                mb: 1,
                fontSize: 24,
              }}
            >
              Compartilhe sua Reflexão
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Deixe suas impressões sobre o livro <strong>{bookTitle}</strong>
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 8 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  SEU NOME
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Nome"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  sx={{
                    bgcolor: "#FAF6EE",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  TURMA
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Ex: 3ºA"
                  value={studentGrade}
                  onChange={(e) => setStudentGrade(e.target.value)}
                  sx={{
                    bgcolor: "#FAF6EE",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  CAPÍTULO
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  sx={{
                    bgcolor: "#FAF6EE",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                  }}
                >
                  <MenuItem value="" disabled>
                    Selecione o capítulo
                  </MenuItem>
                  {chaptersList.map((chapterName) => (
                    <MenuItem key={chapterName} value={chapterName}>
                      {chapterName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  SUA REFLEXÃO
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="O que este capítulo despertou em você?"
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  sx={{
                    bgcolor: "#FAF6EE",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  AVALIAÇÃO DO CAPÍTULO
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 0.5,
                  }}
                >
                  <ThemeRating
                    value={rating}
                    onChange={(_, newValue) => setRating(newValue)}
                    sx={{ color: "secondary.main" }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Clique para avaliar
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography
              variant="caption"
              color="error"
              sx={{ display: "block", mt: 4, mb: 2, fontWeight: 500 }}
            >
              Preencha todos os campos e dê uma avaliação para publicar.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={handlePublish}
                disabled={
                  !studentName ||
                  !studentGrade ||
                  !selectedChapter ||
                  !reflectionText ||
                  !rating ||
                  publishing
                }
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  textTransform: "none",
                  px: 5,
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                {publishing ? "Publicando..." : "Publicar"}
              </Button>
              <Button
                variant="outlined"
                onClick={onCancel}
                disabled={publishing}
                sx={{
                  borderColor: "divider",
                  color: "text.secondary",
                  textTransform: "none",
                  px: 4,
                  borderRadius: 2,
                }}
              >
                Cancelar
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          icon={<FavoriteIcon sx={{ color: "white" }} />}
          sx={{
            bgcolor: "#11CAA0",
            color: "white",
            borderRadius: 3,
            fontWeight: 600,
            "& .MuiAlert-icon": { color: "white" },
          }}
        >
          Sua reflexão foi publicada com sucesso e já está no acervo!
        </Alert>
      </Snackbar>
    </Box>
  );
}

const ThemeRating = Rating;

export default ReflectionForm;
