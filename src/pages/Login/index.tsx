import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "professor@escola.com" && password === "123456") {
      navigate("/professor/dashboard");
    } else {
      alert(
        "Credenciais incorretas! Use professor@escola.com e 123456 para testar.",
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FAF6EE",
        px: 2,
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{
            color: "text.secondary",
            textTransform: "none",
            mb: 3,
            fontWeight: 500,
            "&:hover": { color: "primary.main" },
          }}
        >
          Voltar para o início
        </Button>

        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid",
            borderColor: "#EAE2D5",
            boxShadow: "0px 8px 24px rgba(92, 61, 46, 0.05)",
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 5 } }}>
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                Acesso do Professor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Insira as suas credenciais para gerenciar o acervo literário.
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleLogin}>
              <Box sx={{ mb: 3 }}>
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
                  E-MAIL
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="exemplo@escola.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                  }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
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
                  SENHA
                </Typography>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Insira a sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                  }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  textTransform: "none",
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  fontSize: 16,
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                Entrar no Painel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Login;
