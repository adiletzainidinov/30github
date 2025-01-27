import { Container, Typography } from '@mui/material';
import Button from '../../shared/UI/button/Button';
import { QuoteContainer, StyledBox } from './QuiteWithPostStyle';
import { useSelector } from 'react-redux';

const shareToTelegram = (message) => {
  const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(
    message
  )}`;
  window.open(telegramUrl, '_blank');
};

const QuiteWithPost = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Сообщения на русском и кыргызском языках
  const messageRu = `Сообщается, что Гульнары апа однажды рассказывала, как установка отопления в её доме значительно улучшила качество жизни. 
        Теперь зимой её дом теплый и уютный, что стало настоящим благословением для всей семьи.`;

  const messageKy = `Гульнары апа бир жолу үйүндөгү жылуулук орнотуу анын жашоосун канчалык жакшыртканы тууралуу айтып берген. 
        Эми кышында анын үйү жылуу жана уюткулук, бул бүт үй-бүлө үчүн чын ыраазычылык болду.`;

  // Выбираем сообщение в зависимости от языка
  const message = languageStore ? messageKy : messageRu;

  return (
    <Container>
      <StyledBox>
        <QuoteContainer>
          <div className="text">{message}</div>
          <Typography
            variant="subtitle1"
            component="span"
            color="#7ad5ab"
            style={{ marginBottom: 35 }}
          >
            {languageStore ? '(Гульнары апа)' : '(Гульнары апа)'}
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
