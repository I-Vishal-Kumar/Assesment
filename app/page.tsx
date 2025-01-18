import { Box, Container } from '@mui/material';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import { MainSection } from './components/MainSection';
import { RightSection } from './components/RightSection';

export default function Home() {
  return (
    <Container disableGutters sx={{ height: '100vh', pt: 8, bgcolor: 'secondary.light' }}>
      <Header />
      <Box height={"100%"}
        display={'grid'}
        sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 2fr 1fr" }, p: 2 }} columnGap={4}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}></Box>
        <MainSection />
        <RightSection />
      </Box>
    </Container>
  );
}
