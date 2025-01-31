import { useSelector } from 'react-redux';
import {
  BoxContainer,
  Container,
  StyledBox,
  TextContainer,
} from './AboutUmraStyle';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const AboutPlatform = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const scrollfooterContacts = () => scrollToElement('footerContacts');


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
        systemInfo:
          'Биздин платформада окуу, тарбиялык жана көңүл ачуучу видеолор бар, алар балдар үчүн кызыктуу жана пайдалуу болот.',
        quote: '“Туура тарбия – келечектин пайдубалы”',
        approach:
          'Биз балдар үчүн коопсуз медиа чөйрө түзүүгө умтулабыз. Биз менен бирге болуңуз жана пайдалуу, адал контентти балдарыңызга сунуштаңыз!',
      }
    : {
        title: 'О нашей платформе',
        description:
          'Мы создаем уникальную видеоплатформу, предлагающую безопасный и проверенный контент с Исламскими ценностьями для ваших детей. Здесь собраны только полезные, интересные и видео соответствующие Исламскому принципу.',
        keyPoints: [
          'Наша главная цель — привить детям нравственность, религиозные ценности и полезные знания.',
          'Весь контент проходит проверку специалистами и соответствует основным исламским принципам.',
          'Мы предоставляем родителям возможность наполнять время их детей полезным и безопасным контентом.',
        ],
        systemInfo:
          'На нашей платформе есть обучающие, воспитательные и развлекательные видео, которые будут интересны и полезны для детей. В современном мире видео-контент стал неотъемлемой частью нашей жизни, и дети ежедневно смотрят различные ролики. Важно, чтобы этот контент был безопасным, развивающим и соответствовал нашим ценностям.',
        quote: '“Правильное воспитание — основа будущего”',
        approach:
          'Мы стремимся создать безопасную медиа-среду для детей. Присоединяйтесь к нам и предоставьте своим детям безопасный  и полезный контент!',
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
              <p className="approach">{textContent.approach} <br />  <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={scrollfooterContacts}>Перейти</span></p>
            </TextContainer>
          </BoxContainer>
        </StyledBox>
      </Container>
    </>
  );
};

export default AboutPlatform;
