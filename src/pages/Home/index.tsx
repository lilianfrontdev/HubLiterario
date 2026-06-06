import { Container, Grid, Typography, Box, Chip, Button } from "@mui/material";
import { Link } from "react-router-dom";
import StatCard from "./components/StatCard";
import InfoCard from "./components/InfoCard";
import PhaseRow from "./components/PhaseRow";
import acervo from "../../assets/acervo.png";
import reflexao from "../../assets/reflexao.png";
import professor from "../../assets/professor.png";
import mundo from "../../assets/mundo.png";
import BannerPattern from "../../components/BannerPattern";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

interface HomeProps {
  totalBooks?: number | string;
  totalReflections?: number | string;
}

function Home({ totalBooks = 0, totalReflections = 0 }: HomeProps) {
  return (
    <Box component="main">
      <BannerPattern maxWidth="md">
        <Container maxWidth="md">
          <Typography
            variant="body2"
            sx={{
              color: "#F0B84A",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              fontSize: { xs: 11, sm: 12 },
            }}
          >
            PNLD Literário - Ensino Médio
          </Typography>

          <Title text="Toda leitura" highlightText="começa com um caminho." />

          <Subtitle>
            Um espaço onde os livros ganham contexto, e as palavras dos
            estudantes ganham um lugar para existir.
          </Subtitle>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 2,
              mt: { xs: 4, sm: 5 },
              px: { xs: 3, sm: 0 },
            }}
          >
            <Button
              component={Link}
              to="/obras"
              variant="contained"
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                textTransform: "none",
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                px: 4,
                py: 1.2,
                borderRadius: 1.5,
                fontSize: 15,
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: "secondary.light",
                },
              }}
            >
              Explorar o acervo
            </Button>

            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                textTransform: "none",
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                px: 4,
                py: 1.2,
                borderRadius: 1.5,
                fontSize: 15,
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  borderColor: "#FAF6EE",
                  bgcolor: "rgba(250, 246, 238, 0.08)",
                },
              }}
            >
              Sou Professor
            </Button>
          </Box>
        </Container>
      </BannerPattern>

      <Container maxWidth="lg" sx={{ py: { xs: "4rem", md: "6rem" }, px: 3 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="body2"
              color="secondary"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Sobre o Projeto
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              sx={{
                mb: 3,
                fontSize: { xs: 28, md: 34 },
                lineHeight: 1.3,
                fontWeight: 600,
              }}
            >
              Um hub pensado para quem lê e para quem ensina a ler
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ mb: 2, lineHeight: 1.8, fontSize: 15 }}
            >
              O <strong>Hub Literário</strong> nasceu como proposta pedagógica
              para o PNLD Literário, com foco nas obras afro-brasileiras e
              africanas do Ensino Médio. A ideia é simples: aproximar o leitor
              do mundo do livro antes mesmo de abrir a primeira página, e dar
              voz às reflexões dos estudantes durante toda a leitura.
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ lineHeight: 1.8, fontSize: 15 }}
            >
              Professores organizam os livros, definem as senhas de acesso e
              acompanham as contribuições das turmas. Alunos exploram contextos
              históricos, geográficos e culturais, e compartilham o que cada
              capítulo despertou neles.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <StatCard
                n={totalBooks}
                label="obras no acervo"
                icon={acervo}
                iconColor="secondary.main"
              />
              <StatCard
                n={totalReflections}
                label="reflexões publicadas"
                icon={reflexao}
                iconColor="text.secondary"
              />
              <StatCard
                n="3"
                label="fases pedagógicas"
                icon={professor}
                iconColor="#D4922A"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "background.paper",
          py: { xs: "4rem", md: "5rem" },
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="secondary"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: 12,
            }}
          >
            Contexto
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            color="primary"
            align="center"
            sx={{ mb: 6, fontSize: { xs: 26, md: 32 }, fontWeight: 600 }}
          >
            O que é o PNLD Literário?
          </Typography>

          <Grid container={true} spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <InfoCard
                title="Um programa nacional"
                text="O Programa Nacional do Livro e do Material Didático (PNLD) distribui obras literárias para as escolas públicas de todo o Brasil, garantindo acesso à leitura de qualidade."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <InfoCard
                title="Foco na diversidade"
                text="O PNLD Literário prioriza obras que representam a pluralidade cultural brasileira — com destaque especial para a literatura afro-brasileira, africana e indígena."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <InfoCard
                title="No Ensino Médio"
                text="Para o Ensino Médio, as obras são selecionadas para dialogar com as vivências dos jovens e ampliar repertório crítico, estético e cultural."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <InfoCard
                title="Este hub"
                text="Desenvolvido como proposta pedagógica complementar ao PNLD, o hub contextualiza as leituras e transforma as reflexões dos estudantes em acervo coletivo."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: "4rem", md: "6rem" }, px: 2 }}>
        <Typography
          variant="body2"
          color="secondary"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontSize: 12,
          }}
        >
          Como funciona
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          align="center"
          sx={{ mb: 6, fontSize: { xs: 26, md: 32 }, fontWeight: 600 }}
        >
          Três fases de leitura
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <PhaseRow
            num="01"
            title="Contextualização"
            icon={mundo}
            desc="Antes de abrir o livro, o aluno navega pelo hub para entender o cenário histórico, geográfico e cultural da obra. Mapas, pílulas históricas e fichas culturais preparam o olhar."
          />
          <PhaseRow
            num="02"
            title="Diário de Bordo Coletivo"
            icon={reflexao}
            desc="À medida que avança nos capítulos, o aluno compartilha reflexões, avalia a leitura com estrelas e constrói, junto com a turma, um acervo de vozes e perspectivas."
          />
          <PhaseRow
            num="03"
            title="Acervo da Ancestralidade"
            icon={acervo}
            desc="Ao final, o hub transforma-se em galeria: as produções das turmas ficam disponíveis para toda a escola, celebrando o protagonismo dos estudantes e a riqueza da cultura afro."
          />
        </Box>
      </Container>

      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: "4rem",
          px: 3,
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              color: "#F0B84A",
              letterSpacing: "0.15em",
              mb: 2,
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: 11,
            }}
          >
            Créditos
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "primary.contrastText",
              fontSize: { xs: 24, md: 28 },
              fontWeight: 400,
              fontStyle: "italic",
              mb: 3,
              lineHeight: 1.4,
            }}
          >
            "Cada sonho contado é uma raiz que se firma."
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 4, lineHeight: 1.8, opacity: 0.8, fontSize: 14 }}
          >
            Projeto desenvolvido por Lilian Borsoi, estudante de Ciência da
            Computação - FSG, como proposta pedagógica para o PNLD Literário,
            voltado ao Ensino Médio. Inspirado na obra{" "}
            <em>"No Caminho Contaremos Nossos Sonhos"</em> de Severino
            Rodrigues. Concebido para valorizar a literatura afro-brasileira e
            africana como ferramenta de formação humana e identitária.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {[
              "PNLD Literário",
              "Ensino Médio",
              "Literatura Afro-Brasileira",
              "Literatura Africana",
              "Letramento Racial",
            ].map((text) => (
              <Chip
                key={text}
                label={text}
                variant="outlined"
                sx={{
                  color: "#F0B84A",
                  borderColor: "rgba(240, 184, 74, 0.3)",
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 12,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
