import { useSelector } from 'react-redux';
import Button from '../../shared/UI/button/Button';
import { LeftContainer, StyledButtonInformation } from './homeStyle';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const LeftHome = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const scrollToPriceSection = () => scrollToElement('priceSection');
  const scrollfooterContacts = () => scrollToElement('footerContacts');

  // Мультиязычные данные
  const textContent = languageStore
    ? {
        title: 'Үйүңүз үчүн жылуулук',
        subtitle: 'Сапаттуу жылытуу жана сварка кызматтары',
        description:
          'Бизден сиз үйүңүз үчүн сапаттуу жылытуу системасын жана сварка кызматтарын арзан баада алсаңыз болот. Баалар жана кызматтар боюнча маалыматты биздин сайттан тапсаңыз болот.',
        priceQuality: 'Арзан баа жана жогорку сапат',
        startButton: 'Кызмат тууралуу',
        infoButton: 'Толук маалымат алуу',
      }
    : {
        title: 'Отопление вашего дома',
        subtitle: 'Качественное отопление и сварочные услуги',
        description:
          'У нас вы можете заказать качественную систему отопления и сварочные работы по доступной цене. Узнайте цены и услуги на нашем сайте.',
        priceQuality: 'Доступная цена и высокое качество',
        startButton: 'Узнать об услуге',
        infoButton: 'Узнать больше',
      };

  return (
    <LeftContainer>
      <h3>{textContent.title}</h3>
      <h1>{textContent.subtitle}</h1>
      <h2>{textContent.priceQuality}</h2>
      <div className="line"></div>
      <p>{textContent.description}</p>
      <div className="buttonPapa">
        <Button onClick={scrollToPriceSection}>{textContent.startButton}</Button>
        <StyledButtonInformation onClick={scrollfooterContacts}>{textContent.infoButton}</StyledButtonInformation>
      </div>
    </LeftContainer>
  );
};

export default LeftHome;
