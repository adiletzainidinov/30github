import { Box, Typography, Link, Container, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ContainerFooter, StyledBox } from './footerStyle';
import { Telegram, WhatsApp, YouTube } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { handleSocialClick } from '../../utils/shared/gotuSoccial';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const Footer = () => {
  const { languageStore } = useSelector((state) => state.umra); // Получаем язык из состояния
  const scrollToHome = () => scrollToElement('home');
  const scrollToPrice = () => scrollToElement('priceSection');
  const scrollToContacts = () => scrollToElement('scrollToContacts');

  const footerData = {
    ru: {
      companyTitle: 'О нашем проекте',
      companyDescription:
        'Наш проект предлагает детям безопасное и познавательное пространство для изучения исламских ценностей через видео и мультимедийный контент. Мы стремимся обеспечить знания о праведной жизни и ценностях, соответствующих Исламу.',
      usefulLinksTitle: 'Полезные ссылки',
      home: 'Главная',
      aboutUs: 'Цены',
      contacts: 'Контакты',
      followUsTitle: 'Следите за нами',
      copyright: 'Сайт создал Адилет',
    },
    ky: {
      companyTitle: 'Биздин долбоор тууралуу',
      companyDescription:
        'Биздин долбоор балдарга Исламдын баалуулуктарын видео жана мультимедиа контенти аркылуу үйрөтүү үчүн коопсуз жана билимдүү жайды сунуштайт. Биз адал турмуш жана Исламга ылайык баалуулуктарды үйрөтүүгө умтулабыз.',
      usefulLinksTitle: 'Керектүү шилтемелер',
      home: 'Башкы бет',
      aboutUs: 'Цены',
      contacts: 'Байланыштар',
      followUsTitle: 'Бизди көзөмөлдөп туруңуз',
      copyright: 'Сайтты түзгөн Адилет',
    },
  };

  const lang = languageStore ? footerData.ky : footerData.ru; // Переключаем данные в зависимости от языка

  return (
    <ContainerFooter>
      <StyledBox>
        <Box
          component="footer"
          sx={{
            py: 4,
            px: 2,
            mt: 'auto',
            backgroundColor: '#3d51f4',
            borderTop: '1px solid #ddd',
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="space-between">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  {lang.companyTitle}
                </Typography>
                <Typography variant="body2" color="white">
                  {lang.companyDescription}
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  {lang.usefulLinksTitle}
                </Typography>
                <Link style={{ textDecoration: 'none' }} color="inherit" variant="body2" onClick={scrollToHome}>
                  {lang.home}
                </Link>
                <br />
                <Link style={{ textDecoration: 'none' }} color="inherit" variant="body2" onClick={scrollToPrice}>
                  {lang.aboutUs}
                </Link>
                <br />
                <Link style={{ textDecoration: 'none' }} color="inherit" variant="body2" onClick={scrollToContacts}>
                  {lang.contacts}
                </Link>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  {lang.followUsTitle}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link color="inherit">
                    <YouTube />
                  </Link>
                  <Link onClick={() => handleSocialClick('https://wa.me/996770430476')} color="inherit">
                    <WhatsApp />
                  </Link>
                  <Link onClick={() => handleSocialClick('https://www.instagram.com/kairatows/?utm_source=ig_web_button_share_sheet')} color="inherit">
                    <InstagramIcon />
                  </Link>
                  <Link onClick={() => handleSocialClick('https://t.me/+996770430476')} color="inherit">
                    <Telegram />
                  </Link>
                </Box>
              </Grid>
            </Grid>

            <Box mt={4} textAlign="center">
              <Typography style={{ cursor: 'pointer' }} variant="body2" color="white" onClick={() => handleSocialClick('https://t.me/Makka567')}>
                &copy; {new Date().getFullYear()} {lang.copyright}{' '}
                <Link color="inherit">
                  <Telegram sx={{ position: 'relative', top: 7 }} />
                </Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </StyledBox>
    </ContainerFooter>
  );
};

export default Footer;
