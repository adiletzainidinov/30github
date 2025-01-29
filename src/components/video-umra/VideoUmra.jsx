import { useSelector } from 'react-redux';
import { Container, StyledBox, Overlay, Background, TextContainer } from './VideoUmraStyle';

const VideoPlatform = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title: 'Туура <span className="world">билим</span> — балдарыңыздын ийгиликтүү келечегинин кепилдиги',
        description:
          '«Эгерде бала туура тарбия жана адал билим алса, анын келечеги нурдуу болот. Биздин платформанын максаты — Ислам баалуулуктарына шайкеш, коопсуз жана пайдалуу контент менен балдарды камсыз кылуу».',
        footer: 'Балдарыңыз үчүн адал жана коопсуз контент',
      }
    : {
        title: 'Правильные <span className="world">знания</span> — залог светлого будущего ваших детей',
        description:
          '«Когда ребёнок получает правильное воспитание и халяльные знания, его будущее становится светлым. Наша платформа создана для того, чтобы предоставить детям безопасный и полезный контент в соответствии с исламскими ценностями».',
        footer: 'Халяльный и безопасный контент для ваших детей',
      };

  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          <h1 dangerouslySetInnerHTML={{ __html: textContent.title }} />
          <p>{textContent.description}</p>
          <p className="tirmizi">{textContent.footer}</p>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default VideoPlatform;
