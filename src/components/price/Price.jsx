import { useSelector } from 'react-redux';
import LeftPrice from './LeftPrice';
import {
  BlueBox,
  BoxContainer,
  Container,
  ContainerContent,
  PartnerBox,
  StyledBox,
  TextContent,
  WaveBox,
} from './PriceStyle';
import RightPrice from './RightPrice';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const translations = {
  ru: [
    { id: 1, text: 'Партнер1' },
    { id: 2, text: 'Партнер2' },
    { id: 3, text: 'Партнер3' },
    { id: 4, text: 'Партнер4' },
    { id: 5, text: 'Партнер5' },
  ],
  ky: [
    { id: 1, text: 'Өнөктөш1' },
    { id: 2, text: 'Өнөктөш2' },
    { id: 3, text: 'Өнөктөш3' },
    { id: 4, text: 'Өнөктөш4' },
    { id: 5, text: 'Өнөктөш5' },
  ],
};

const animation = { duration: 15000, easing: (t) => t };

const Price = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Выбор языка на основе true/false


  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title: 'ЖЫЛУУЛУК СИСТЕМАЛАРЫНЫН БААЛАРЫ',
        description:
          'Баалар жылуулук системасынын түрүнө, колдонулган материалдарга жана орнотуу шарттарына жараша өзгөрөт. Толук маалымат алуу үчүн биз менен байланышыңыз.',
        partnersTitle: 'БИЗДИН ӨНӨКТӨШТӨР',
      }
    : {
        title: 'ЦЕНЫ НА СИСТЕМЫ ОТОПЛЕНИЯ',
        description:
          'Цены зависят от типа системы отопления, используемых материалов и условий монтажа. Для получения полной информации свяжитесь с нами.',
        partnersTitle: 'НАШИ ПАРТНЕРЫ',
      };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 3 : 5,
      spacing: 40,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <Container id="priceSection">
      <StyledBox>
        <BoxContainer>
          <TextContent>
            <h2>{textContent.title}</h2>
            <p>{textContent.description}</p>
          </TextContent>
          <ContainerContent>
            <LeftPrice />
            <RightPrice />
          </ContainerContent>
        </BoxContainer>

        <BlueBox>
          <h2>{textContent.partnersTitle}</h2>
          <PartnerBox ref={sliderRef} className="keen-slider">
            {lang.map((item) => (
              <div className="boxCard keen-slider__slide" key={item.id}>
                {item.text}
              </div>
            ))}
          </PartnerBox>
        </BlueBox>
        <WaveBox />
      </StyledBox>
    </Container>
  );
};

export default Price;
