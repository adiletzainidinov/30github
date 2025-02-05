import { useSelector } from 'react-redux';
import { Container, StyledBox, Overlay, Background, TextContainer } from './VideoUmraStyle';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const VideoPlatform = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const scrollfooterContacts = () => scrollToElement('footerContacts');


  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title: 'Туура <span className="world">билим</span> — балдарыңыздын ийгиликтүү келечегинин кепилдиги',
        description:
          '«Эгерде бала туура тарбия жана адал билим алса, анын келечеги нурдуу болот. Биздин платформанын максаты — Ислам баалуулуктарына шайкеш, коопсуз жана пайдалуу контент менен балдарды камсыз кылуу».',
        footer: 'Балдарыңыз үчүн адал жана коопсуз контент',
      }
    : {
        title: 'Правильные <span className="world">видео</span> — залог светлого будущего ваших детей',
        description:
          `Лучшее, что может оставить человек после себя — это непрекращающаяся милостыня, полезные знания и праведный ребенок, который молится за него.`,
        footer: '(Муслим)"Смысл"',
      };

  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          <h1 dangerouslySetInnerHTML={{ __html: textContent.title }} />
          <p>{textContent.description}  <br />  <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={scrollfooterContacts}>Поддержать</span></p>
          <p className="tirmizi">{textContent.footer}</p>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default VideoPlatform;
