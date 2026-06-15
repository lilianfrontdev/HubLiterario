import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

interface BookFormProps {
  onCancel: () => void;
  onSave: (bookData: any) => void;
}

function BookForm({ onCancel, onSave }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [chapters, setChapters] = useState("");
  const [historyContext, setHistoryContext] = useState("");
  const [geoContext, setGeoContext] = useState("");
  const [culturalContext, setCulturalContext] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      year: Number(year) || new Date().getFullYear(),
      password,
      tags: tags,
      description: synopsis,
      chapter: chapters,
      "historical-context": historyContext,
      "geographic-context": geoContext,
      "cultural-context": culturalContext,
      reflections: 0,
      rating: 0,
    };

    onSave(newBook);
  };

  return (
    <Card
      elevation={0}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 5,
        border: "1px solid #EAE2D5",
        p: { xs: 2, md: 4 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            color: "primary.main",
            mb: 4,
          }}
        >
          Nova Obra
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1,
                display: "block",
              }}
            >
              TÍTULO *
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Título da obra"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                bgcolor: "#FAF6EE",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1,
                display: "block",
              }}
            >
              AUTOR *
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Nome do autor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              sx={{
                bgcolor: "#FAF6EE",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1,
                display: "block",
              }}
            >
              ANO
            </Typography>
            <TextField
              fullWidth
              placeholder="2022"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              sx={{
                bgcolor: "#FAF6EE",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1,
                display: "block",
              }}
            >
              SENHA DOS ALUNOS *
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Ex: sonhos2025"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              TAGS (VÍRGULA)
            </Typography>
            <TextField
              fullWidth
              placeholder="Refúgio, Identidade"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
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
              SINOPSE
            </Typography>
            <TextField
              fullWidth
              required
              multiline
              rows={3}
              placeholder="Breve descrição..."
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
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
              CAPÍTULOS / PARTES (UM POR LINHA)
            </Typography>
            <TextField
              fullWidth
              required
              multiline
              rows={3}
              placeholder="Parte I: O Início&#10;Parte II: O Meio"
              value={chapters}
              onChange={(e) => setChapters(e.target.value)}
              sx={{
                bgcolor: "#FAF6EE",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mt: 2, mb: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                letterSpacing: "0.05em",
                fontSize: 13,
              }}
            >
              CONTEXTUALIZAÇÃO PEDAGÓGICA
            </Typography>
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
              CONTEXTO HISTÓRICO
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Fatos históricos relevantes sobre a obra..."
              value={historyContext}
              onChange={(e) => setHistoryContext(e.target.value)}
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
              CONTEXTO GEOGRÁFICO
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Países, cidades, regiões..."
              value={geoContext}
              onChange={(e) => setGeoContext(e.target.value)}
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
              CONTEXTO CULTURAL
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Tradições, povos, práticas culturais..."
              value={culturalContext}
              onChange={(e) => setCulturalContext(e.target.value)}
              sx={{
                bgcolor: "#FAF6EE",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          color="error"
          sx={{ display: "block", mt: 4, mb: 2, fontWeight: 500 }}
        >
          Preencha título, autor e senha para salvar.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!title || !author || !password}
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              textTransform: "none",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: 2,
              "&:hover": { bgcolor: "secondary.dark" },
            }}
          >
            Salvar Obra
          </Button>
          <Button
            variant="outlined"
            onClick={onCancel}
            sx={{
              borderColor: "divider",
              color: "text.secondary",
              textTransform: "none",
              px: 4,
              py: 1.2,
              borderRadius: 2,
            }}
          >
            Cancelar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default BookForm;
