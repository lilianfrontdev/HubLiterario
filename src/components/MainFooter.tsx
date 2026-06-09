import { Box, Typography} from "@mui/material";
import BannerPattern from "./BannerPattern";
import BannerTag from "./BannerTag";

function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ width: "100%" }}>
      <BannerPattern maxWidth="lg">
        <Box sx={{ py: 2 }}>
          <BannerTag align="center" variant="light">
            Hub Literário • {currentYear}
          </BannerTag>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: "primary.contrastText", 
              opacity: 0.7,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 13,
              mt: 1
            }}
          >
            Desenvolvido como proposta pedagógica por <strong>Lilian Borsoi</strong>. 
            Inspirado na valorização da literatura afro-brasileira e africana.
          </Typography>
        </Box>
      </BannerPattern>
    </Box>
  );
}

export default MainFooter;