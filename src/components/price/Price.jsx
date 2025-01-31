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
import MTUBLogo from './../../assets/images/MuslimKidsLogoReal.png'
import NaykatMedia from './../../assets/images/NayikatMedia.png'

const translations = [
  {
    id: 1,
    text: MTUBLogo,
  },
  { id: 2, text: NaykatMedia },
  { id: 3, text: MTUBLogo },
  { id: 4, text:  NaykatMedia},
  { id: 5, text: MTUBLogo },
];

const animation = { duration: 15000, easing: (t) => t };

const Price = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title: 'БИЗДИН ПЛАТФОРМАГА КОШУЛУУ',
        description:
          'Биздин максат – балдар үчүн адал, коопсуз жана пайдалуу видеолорду сунуштоо. Платформанын өнүгүшүнө салым кошууну кааласаңыз, биз менен байланышыңыз.',
        partnersTitle: 'БИЗДИН ӨНӨКТӨШТӨР',
      }
    : {
        title: 'НАША БУДУЩАЯ ПЛАТФОРМА',
        description:
          'Наша цель – предоставить детям безопасный и полезный видеоконтент с Исламскими ценностьями.',
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
            <p style={{ textAlign: 'center' }}>{textContent.description}</p>
          </TextContent>
          <ContainerContent>
            <LeftPrice />
            <RightPrice />
          </ContainerContent>
        </BoxContainer>

        <BlueBox>
          <h2>{textContent.partnersTitle}</h2>
          <PartnerBox ref={sliderRef} className="keen-slider">
            {translations.map((item) => (
              <div className="boxCard keen-slider__slide" key={item.id}>
                <img
                  style={{
                    width: '120px',
                    height: '70px',
                    borderRadius: '10px',
                  }}
                  src={item.text}
                  alt=""
                />
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
