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
    src: 'https://www.youtube.com/embed/abc123xyz',  // Пример ссылок
    title: 'Учим арабский с малышами: Весёлые уроки для детей',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/def456ghi',  // Пример ссылок
    title: 'Детские истории о пророках: Уроки морали и воспитания',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/jkl789mno',  // Пример ссылок
    title: 'Маленькие мусульмане: Уроки добра и терпимости для детей',
  },
];

const RevievWithVideoDataKy = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/abc123xyz',  // Пример ссылок
    title: 'Араб тилин балдар менен үйрөнүү: Көңүлдүү сабактар',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/def456ghi',  // Пример ссылок
    title: 'Пайгамбарлар тууралуу балдар үчүн окуялар: Мораль жана тарбия',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/jkl789mno',  // Пример ссылок
    title: 'Кичинекей мусулмандар: Балдар үчүн жакшы жана чыдамкай болуу сабактары',
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
                ? 'Балдар үчүн видео сабактар жана окуялар (Исламдык контент)'
                : 'Видео для детей: Уроки и истории на исламском YouTube'}
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
            {languageStore ? 'Бардык видео сабактар' : 'Все видео уроки'}
          </ButtonStyleVideo>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default ReveivWidthVideo;
