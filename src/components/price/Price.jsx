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
    { id: 1, text: 'Партнёр1' },
    { id: 2, text: 'Партнёр2' },
    { id: 3, text: 'Партнёр3' },
    { id: 4, text: 'Партнёр4' },
    { id: 5, text: 'Партнёр5' },
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
  const lang = languageStore ? translations.ky : translations.ru; // Выбор языка

  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title: 'БИЗДИН ПЛАТФОРМАГА КОШУЛУУ',
        description:
          'Биздин максат – балдар үчүн адал, коопсуз жана пайдалуу видеолорду сунуштоо. Платформанын өнүгүшүнө салым кошууну кааласаңыз, биз менен байланышыңыз.',
        partnersTitle: 'БИЗДИН ӨНӨКТӨШТӨР',
      }
    : {
        title: 'ПРИСОЕДИНЯЙТЕСЬ К НАШЕЙ ПЛАТФОРМЕ',
        description:
          'Наша цель – предоставить детям халяльный, безопасный и полезный видеоконтент. Если вы хотите поддержать развитие платформы, свяжитесь с нами.',
        partnersTitle: 'НАШИ ПАРТНЁРЫ',
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
