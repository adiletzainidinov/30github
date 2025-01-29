import { useSelector } from 'react-redux';
import { BoxContainer, Container, StyledBox, TextContainer } from './AboutUmraStyle';

const AboutPlatform = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычные данные
  const textContent = languageStore
    ? {
        title: 'Биз жөнүндө',
        description:
          'Биз балдарыңыз үчүн коопсуз жана адал контентти сунуштаган уникалдуу видео платформаны түзүп жатабыз. Бул платформа Исламдын принциптерине шайкеш келген, пайдалуу жана кызыктуу видеолорду камтыйт.',
        keyPoints: [
          'Биздин негизги максатыбыз – балдарга ыймандуулукту, адептүүлүктү жана пайдалуу билимди жеткирүү.',
          'Бардык контент адистер тарабынан текшерилет жана Исламдын баалуулуктарына туура келет.',
          'Биз ата-энелерге балдарынын убактысын пайдалуу контент менен толтуруу мүмкүнчүлүгүн сунуштайбыз.',
        ],
        systemInfo: 'Биздин платформада окуу, тарбиялык жана көңүл ачуучу видеолор бар, алар балдар үчүн кызыктуу жана пайдалуу болот.',
        quote: '“Туура тарбия – келечектин пайдубалы”',
        approach: 'Биз балдар үчүн коопсуз медиа чөйрө түзүүгө умтулабыз. Биз менен бирге болуңуз жана пайдалуу, адал контентти балдарыңызга сунуштаңыз!',
      }
    : {
        title: 'О нашей платформе',
        description:
          'Мы создаем уникальную видеоплатформу, предлагающую безопасный и халяльный контент для ваших детей. Здесь собраны только полезные, интересные и соответствующие Исламу видео.',
        keyPoints: [
          'Наша главная цель — привить детям нравственность, религиозные ценности и полезные знания.',
          'Весь контент проходит проверку специалистами и соответствует исламским принципам.',
          'Мы предоставляем родителям возможность наполнять время их детей полезным и безопасным контентом.',
        ],
        systemInfo: 'На нашей платформе есть обучающие, воспитательные и развлекательные видео, которые будут интересны и полезны для детей.',
        quote: '“Правильное воспитание — основа будущего”',
        approach: 'Мы стремимся создать безопасную медиа-среду для детей. Присоединяйтесь к нам и предоставьте своим детям халяльный и полезный контент!',
      };

  return (
    <>
      <Container>
        <StyledBox>
          <BoxContainer>
            <h1>{textContent.title}</h1>
            <TextContainer>
              <p className="first">{textContent.description}</p>
              <br />
              {textContent.keyPoints.map((point, index) => (
                <p key={index} className={`point-${index}`}>
                  {point}
                </p>
              ))}
              <p className="system-info">{textContent.systemInfo}</p>
              <p className="quote">{textContent.quote}</p>
              <p className="approach">{textContent.approach}</p>
            </TextContainer>
          </BoxContainer>
        </StyledBox>
      </Container>
    </>
  );
};

export default AboutPlatform;
