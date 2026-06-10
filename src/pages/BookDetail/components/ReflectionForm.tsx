import { useState } from "react";
import { 
  Box, Typography, TextField, Button, Grid, MenuItem, 
  Rating, Card, CardContent, Snackbar, Alert 
} from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ReflectionFormProps {
  bookTitle: string;
  onCancel: () => void;
  onSuccess: () => void;
}

function ReflectionForm({ bookTitle, onCancel, onSuccess }: ReflectionFormProps) {
  const [step, setStep] = useState<'password' | 'form'>('password');
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState<number | null>(0);
  const [openAlert, setOpenAlert] = useState(false);

  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [reflectionText, setReflectionText] = useState("");

  const handleConfirmPassword = () => {
    if (password === "1234") { 
      setStep('form');
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  };

  const handlePublish = () => {
    setOpenAlert(true);
    setTimeout(() => {
      onSuccess(); 
    }, 2000);
  };

  return (
    <Box sx={{ width: "100%", mt: 2, boxSizing: "border-box" }}>
      
      {step === 'password' && (
        <Card elevation={0} sx={{ bgcolor: "#FAF6EE", borderRadius: 4, border: "1px solid", borderColor: "#EAE2D5" }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <KeyIcon sx={{ color: "#D4922A", fontSize: 28 }} />
              <Typography variant="h5" sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: "primary.main" }}>
                Acesso por senha
              </Typography>
            </Box>
            
            <Typography sx={{ color: "text.secondary", mb: 4, fontSize: 15, lineHeight: 1.6 }}>
              Seu professor forneceu uma senha específica para a obra <strong>"{bookTitle}"</strong>. Insira-a para liberar a publicação da sua reflexão.
            </Typography>

            <Box sx={{ maxWidth: 600, width: "100%" }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block", letterSpacing: "0.05em" }}>
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
                  "& .MuiOutlinedInput-root": { borderRadius: 2 }
                }}
              />
              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                <Button 
                  variant="contained" 
                  onClick={handleConfirmPassword}
                  sx={{ bgcolor: "secondary.main", color: "white", textTransform: "none", px: 4, py: 1, fontWeight: 600, borderRadius: 2, "&:hover": { bgcolor: "secondary.dark" } }}
                >
                  Confirmar
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={onCancel}
                  sx={{ borderColor: "divider", color: "text.secondary", textTransform: "none", px: 4, py: 1, borderRadius: 2 }}
                >
                  Cancelar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {step === 'form' && (
        <Card elevation={0} sx={{ bgcolor: "background.paper", borderRadius: 4, border: "1px solid", borderColor: "divider" }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h5" sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: "primary.main", mb: 1, fontSize: 24 }}>
              Compartilhe sua Reflexão
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Deixe suas impressões sobre o livro <strong>{bookTitle}</strong>
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 8 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block" }}>SEU NOME</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Nome" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  sx={{ bgcolor: "#FAF6EE", borderRadius: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }} 
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block" }}>TURMA</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Ex: 3ºA" 
                  value={studentGrade}
                  onChange={(e) => setStudentGrade(e.target.value)}
                  sx={{ bgcolor: "#FAF6EE", borderRadius: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }} 
                />
              </Grid>
              
              <Grid size={{ xs: 12 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block" }}>CAPÍTULO</Typography>
                <TextField 
                  select 
                  fullWidth 
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  sx={{ bgcolor: "#FAF6EE", borderRadius: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                >
                  <MenuItem value="" disabled>Selecione o capítulo</MenuItem>
                  <MenuItem value="Parte I: O Horizonte">Parte I: O Horizonte</MenuItem>
                  <MenuItem value="Parte II: As Estradas">Parte II: As Estradas</MenuItem>
                  <MenuItem value="Parte III: As Vozes">Parte III: As Vozes</MenuItem>
                  <MenuItem value="Parte IV: Os Sonhos">Parte IV: Os Sonhos</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block" }}>SUA REFLEXÃO</Typography>
                <TextField 
                  fullWidth 
                  multiline 
                  rows={4} 
                  placeholder="O que este capítulo despertou em você?" 
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  sx={{ bgcolor: "#FAF6EE", borderRadius: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }} 
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block" }}>AVALIAÇÃO DO CAPÍTULO</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 0.5 }}>
                  <Rating 
                    value={rating} 
                    onChange={(_, newValue) => setRating(newValue)}
                    sx={{ color: "secondary.main" }}
                  />
                  <Typography variant="caption" color="text.secondary">Clique para avaliar</Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography variant="caption" color="error" sx={{ display: "block", mt: 4, mb: 2, fontWeight: 500 }}>
              Preencha todos os campos e dê uma avaliação para publicar.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button 
                variant="contained" 
                onClick={handlePublish}
                disabled={!studentName || !studentGrade || !selectedChapter || !reflectionText || !rating}
                sx={{ bgcolor: "secondary.main", color: "white", textTransform: "none", px: 5, py: 1.2, fontWeight: 600, borderRadius: 2, "&:hover": { bgcolor: "secondary.dark" } }}
              >
                Publicar
              </Button>
              <Button 
                variant="outlined" 
                onClick={onCancel}
                sx={{ borderColor: "divider", color: "text.secondary", textTransform: "none", px: 4, borderRadius: 2 }}
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
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          severity="success" 
          icon={<FavoriteIcon sx={{ color: "white" }} />} 
          sx={{ 
            bgcolor: "#11CAA0", 
            color: "white", 
            borderRadius: 3, 
            fontWeight: 600,
            "& .MuiAlert-icon": { color: "white" }
          }}
        >
          Sua reflexão foi publicada com sucesso e já está no acervo!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ReflectionForm;