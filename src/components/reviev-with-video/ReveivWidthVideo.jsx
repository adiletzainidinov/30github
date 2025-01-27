import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {
  BoxContainer,
  ButtonStyleVideo,
  CardContainer,
  Container,
  StyledBox,
  TitleRevievVideo,
} from './ReveievWithVideoStyle';
import { useSelector } from 'react-redux';

const RevievWithVideoDataRu = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/snxK7d99I2U',  // Преобразованная ссылка
    title: 'Гулумкан апа отопление в доме: интересная история',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/snxK7d99I2U',  // Преобразованная ссылка
    title: 'Как отопление изменило жизнь Гульнары апа',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/snxK7d99I2U',  // Преобразованная ссылка
    title: 'Духовное и физическое тепло: история установки отопления Айжамал апа',
  },
];

const RevievWithVideoDataKy = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/snxK7d99I2U',  // Преобразованная ссылка
    title: 'Гулумкан апа үйдөгү жылуулук: кызыктуу окуя',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/snxK7d99I2U',  // Преобразованная ссылка
    title: 'Жылуулук Гульнары апанын жашоосун кантип өзгөрттү',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/snxK7d99I2U',  // Преобразованная ссылка
    title: 'Айжамал апанын жылуулук орнотушу: руханий жана физикалык жылуулук тарыхы',
  },
];

const ReveivWidthVideo = () => {
  const { languageStore } = useSelector((state) => state.umra);

  const lang = languageStore ? RevievWithVideoDataKy : RevievWithVideoDataRu;

  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <TitleRevievVideo>
            <h2>
              {languageStore
                ? 'Кардарлардын видео пикирлери (Жылуулук орнотуулары)'
                : 'Видео отзывы наших клиентов о отоплении'}
            </h2>
          </TitleRevievVideo>
          <CardContainer>
            {lang.map((item) => (
              <Card key={item.id} sx={{ maxWidth: 345, marginBottom: 4 }}>
                <CardActionArea>
                  <CardMedia
                    component="iframe"
                    height="330"
                    src={item.src}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </CardContainer>
          <ButtonStyleVideo>
            {languageStore ? 'Бардык пикирлер' : 'Все отзывы'}
          </ButtonStyleVideo>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default ReveivWidthVideo;
