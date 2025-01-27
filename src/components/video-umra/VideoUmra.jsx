import { useSelector } from 'react-redux';
import { Container, StyledBox, Overlay, Background, TextContainer } from './VideoUmraStyle';

const VideoHeating = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title: 'Туура <span className="world">жылуулук</span> — үйүңүздүн ыңгайлуулугунун жана жылуулуктун кепилдиги',
        description:
          '«Жылуулук системасы туура орнотулганда, үйүңүз эң суук күндөрдө дагы ыңгайлуу жана жылуу болот. Туура тандалган жылуулук системасы кыш бою жайлуу шарттарды камсыз кылат».',
        footer: 'Жылуулук боюнча тажрыйбалуу адистер',
      }
    : {
        title: 'Правильное <span className="world">отопление</span> — залог уюта и тепла в вашем доме',
        description:
          '«Когда отопительная система настроена правильно, дом становится уютным и теплым даже в самые холодные дни. Правильный выбор системы отопления гарантирует комфорт в вашем доме на протяжении всей зимы».',
        footer: 'Опытные специалисты по отоплению',
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

export default VideoHeating;
