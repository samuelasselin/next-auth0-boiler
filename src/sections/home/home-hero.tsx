import type { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';

import { HomeCodeSamples } from './home-code-samples';

export const HomeHero: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px'
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography
            variant="h1"
            sx={{ mb: 2 }}
          >
              Des recettes délicieuse,&nbsp;
            <Typography
              component="span"
              color="primary.main"
              variant="inherit"
            >
                sans effort
            </Typography>
            , pour des papilles comblées !
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500
            }}
          >
              Avec Recettes Futées, explorez un univers de saveurs et de simplicité, où les recettes générées par l'IA vous régaleront à chaque bouchée !
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={1}
            sx={{ my: 3 }}
          >
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Button
              component={RouterLink}
              href={paths.dashboard.index}
              sx={(theme) => theme.palette.mode === 'dark'
                ? {
                  backgroundColor: 'neutral.50',
                  color: 'neutral.900',
                  '&:hover': {
                    backgroundColor: 'neutral.200'
                  }
                }
                : {
                  backgroundColor: 'neutral.900',
                  color: 'neutral.50',
                  '&:hover': {
                    backgroundColor: 'neutral.700'
                  }
                }
              }
              variant="contained"
            >
                Lancez-vous dans la cuisine intelligente dès maintenant !
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            pt: '120px',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '90%',
              fontSize: 0,
              mt: -2, // hack to cut the bottom box shadow
              mx: -2,
              pt: 2,
              px: 2,
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%'
              }
            }}
          >
            <img
              src={
                theme.palette.mode === 'dark'
                  ? '/assets/home-thumbnail-dark.png'
                  : '/assets/home-thumbnail-light.png'
              }
            />
          </Box>
          <Box
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              overflow: 'hidden',
              position: 'absolute',
              right: 0,
              top: 40,
              '& > div': {
                height: 460,
                width: 560
              }
            }}
          >
            <HomeCodeSamples />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};