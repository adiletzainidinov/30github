import { Container, Typography } from '@mui/material';
import Button from '../../shared/UI/button/Button';
import { QuoteContainer, StyledBox } from './QuiteWithPostStyle';
import { useSelector } from 'react-redux';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const shareToTelegram = (message) => {
  const url = "https://guhkiflower.vercel.app/"; // Укажи реальную ссылку на контент
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, "_blank", "noopener,noreferrer");
};

const QuiteWithPost = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const scrollfooterContacts = () => scrollToElement('footerContacts');



  // Сообщения на русском и кыргызском языках, теперь ориентированные на исламский контент для детей
  const messageRu = `Здесь на нашем канале для детей, мы рассказываем истории о пророках, их мудрости и любви к Аллаху. 
        Эта история о Мухаммаде (мир ему) и его уроках терпения и доброты. Мы учим детей следовать примеру пророков и быть хорошими людьми.`;

  const messageKy = `Биздин балдар үчүн арналган каналда, биз пайгамбарлардын окуяларын, алардын акылмандыгын жана Аллахка болгон сүйүүсүн айтып беребиз. 
        Бул окуя кичинекей Мухаммад (с.а.в.) жана анын сабырдуулук менен ырайымдуулукка болгон сабактары тууралуу. Биз балдарды пайгамбарлардын үлгүсүнөн үйрөнүүгө жана жакшы адам болууга үндөбүз.`;

  // Выбираем сообщение в зависимости от языка
  const message = languageStore ? messageKy : messageRu;

  return (
    <Container>
      <StyledBox>
        <QuoteContainer>
          <div className="text">{message}  <br />  <p style={{ color: '#007bff', cursor: 'pointer' }} onClick={scrollfooterContacts}>Поддержать</p></div>
          <Typography
            variant="subtitle1"
            component="span"
            color="#7ad5ab"
            style={{ marginBottom: 35 }}
          >
            {languageStore ? '(Мухаммад (с.а.в.))' : '(Мухаммад (с.а.в.))'}
          </Typography>
          <Button onClick={() => shareToTelegram(message)}>
            {languageStore ? 'Telegram’ге бөлүшүү' : 'Поделиться в Telegram'}
          </Button>
        </QuoteContainer>
      </StyledBox>
    </Container>
  );
};

export default QuiteWithPost;
