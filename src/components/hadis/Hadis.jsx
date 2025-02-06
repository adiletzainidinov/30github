import { useSelector } from 'react-redux';
import {
  Container,
  StyledBox,
  Overlay,
  Background,
  TextContainer,
} from './HadisStyle';
import { scrollToElement } from '../../utils/shared/scrollUtils';

// Объект переводов для двух языков
const translations = {
  ky: {
    servicesTitle: 'Балдар үчүн халал контент',
    servicesDescription:
      'Балдар үчүн халал контентин түзүү, профессионалдуу жаратылыш жана дин талаптарына жооп берүү',
  },
  ru: {
    servicesTitle: 'Контент с Исламскими ценностьями для детей',
    servicesDescription:
      'Создание контента для детей, профессиональный подход и соответствие с Исламскими ценностьями ',
  },
};

const Hadis = () => {
  // Получаем состояние языка из Redux store
  const { languageStore } = useSelector((state) => state.umra);

  // Определяем текущий язык (если languageStore = true, то кыргызский, если false — русский)
  const lang = languageStore ? translations.ky : translations.ru;

  const scrollfooterContacts = () => scrollToElement('footerContacts');


  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          {/* Используем переводы в зависимости от языка */}
          <p className="tirmizi">{lang.servicesTitle}</p>
          <h1>{lang.servicesDescription} <br />  <span style={{ color: '#007bff', cursor: 'pointer', fontSize: '18px' }} onClick={scrollfooterContacts}>Поддержать</span></h1>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default Hadis;
