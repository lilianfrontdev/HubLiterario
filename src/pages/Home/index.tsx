import { Container, Grid, Typography, Box, Chip } from "@mui/material";
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
import BannerTag from "../../components/BannerTag";
import Text from "../../components/Text";
import CustomButton from "./components/CustomButton";

interface HomeProps {
  totalBooks?: number | string;
  totalReflections?: number | string;
}

function Home({ totalBooks = 0, totalReflections = 0 }: HomeProps) {
  return (
    <Box component="main" sx={{ width: "100%", overflowX: "hidden" }}>
      
      <BannerPattern maxWidth="md">
        <BannerTag align="center" variant="light">
          PNLD Literário • Ensino Médio
        </BannerTag>
        <Title text="Toda leitura" highlightText="começa com um caminho." />
        
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            margin: "0 auto",
            opacity: 0.9,
            fontSize: { xs: 15, sm: 16 },
            lineHeight: 1.6,
            mb: 4,
            px: { xs: 2, sm: 0 } 
          }}
        >
          Um espaço onde os livros ganham contexto, e as palavras dos
          estudantes ganham um lugar para existir.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            mt: { xs: 4, sm: 5 },
            px: { xs: 4, sm: 0 }, 
          }}
        >
          <CustomButton to="/obras">Explorar o acervo</CustomButton>
          <CustomButton to="/login" variant="outlined">Sou Professor</CustomButton>
        </Box>
      </BannerPattern>

      <Container maxWidth="lg" sx={{ py: { xs: "4rem", md: "6rem" }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <BannerTag variant="dark">Sobre o Projeto</BannerTag>
            <Subtitle align="left" variant="dark">
              Um hub pensado para quem lê e para quem ensina a ler
            </Subtitle>
            <Text>
              O <strong>Hub Literário</strong> nasceu como proposta pedagógica
              para o PNLD Literário, com foco nas obras afro-brasileiras e
              africanas do Ensino Médio. A ideia é simples: aproximar o leitor
              do mundo do livro antes mesmo de abrir a primeira página, e dar
              voz às reflexões dos estudantes durante toda a leitura.
            </Text>
            <Text>
              Professores organizam os livros, definem as senhas de acesso e
              acompanham as contribuições das turmas. Alunos exploram contextos
              historísticos, geográficos e culturais, e compartilham o que cada
              capítulo despertou neles.
            </Text>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: { xs: 2, md: 0 } }}>
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
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <BannerTag align="center" variant="dark">
            Contexto
          </BannerTag>
          <Subtitle align="center" variant="dark">
            O que é o PNLD Literário?
          </Subtitle>
          <Grid container spacing={3}>
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

      <Container maxWidth="md" sx={{ py: { xs: "4rem", md: "6rem" }, px: { xs: 2, sm: 3 } }}>
        <BannerTag align="center" variant="dark">
          Como funciona
        </BannerTag>
        <Subtitle align="center" variant="dark">
          Três fases de leitura
        </Subtitle>

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
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <BannerTag align="center" variant="light">
            Créditos
          </BannerTag>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "primary.contrastText",
              fontSize: { xs: 22, md: 28 }, 
              fontWeight: 400,
              fontStyle: "italic",
              mb: 3,
              lineHeight: 1.4,
            }}
          >
            "Cada sonho contado é uma raiz que se firma."
          </Typography>
          <Text align="center" variant="light">
            Projeto desenvolvido por Lilian Borsoi, estudante de Ciência da
            Computação - FSG, como proposta pedagógica para o PNLD Literário,
            voltado ao Ensino Médio. Inspirado na obra{" "}
            <em>"No Caminho Contaremos Nossos Sonhos"</em> de Severino
            Rodrigues. Concebido para valorizar a literatura afro-brasileira e
            africana como ferramenta de formação humana e identitária.
          </Text>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
              mt: 3 
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
                  fontSize: 11, 
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