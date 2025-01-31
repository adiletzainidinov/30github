/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {
  Container,
  StyledBox,
  BoxContainer,
  ReviewPapa,
  RevievCard,
  AboutNameReviev,
} from './ReviewStyle';
import Button from '@mui/material/Button';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { ReviewData } from '../../data/revievData';
import { ReviewText } from './ReviewText';

const Review = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? 'ky' : 'ru';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
    renderMode: 'performance',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <Container>
      <StyledBox
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '80px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '10px',
            fontSize: '40px',
            marginTop: 80,
          }}
        >
          Работа, которую мы закончили
        </h2>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '14px',
            color: 'gray',
          }}
        >
          Вся работа была выполнена в Figma.
        </p>
        <div
          className="navigation-wrapper"
          style={{ position: 'absolute', top: 500, left: 0, zIndex: '2' }}
        >
          <Button
            onClick={() => instanceRef.current?.prev()}
            className="arrow arrow--left"
            style={{ fontSize: 40 }}
          >
            <GrPrevious />
          </Button>
        </div>
        <div
          className="navigation-wrapper"
          style={{ position: 'absolute', top: 500, right: 0, zIndex: '2' }}
        >
          <Button
            onClick={() => instanceRef.current?.next()}
            className="arrow arrow--right"
            style={{ fontSize: 40 }}
          >
            <GrNext />
          </Button>
        </div>
        <BoxContainer>
          <ReviewPapa>
            <div ref={sliderRef} className="keen-slider">
              {ReviewData[lang].map((review) => (
                <div key={review.id} className="keen-slider__slide">
                  <RevievCard>
                    <AboutNameReviev>
                      <img src={review.img} alt={review.name} />
                      <div
                        style={{
                          background: '#6d7bd3',
                          padding: 10,
                          borderRadius: '10px',
                          marginTop: 20,
                          minHeight: '160px',
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <ReviewText text={review.review} id={review.id} />
                      </div>
                    </AboutNameReviev>
                  </RevievCard>
                </div>
              ))}
            </div>
          </ReviewPapa>

          <div
  className="dots"
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    gap: '10px',
  }}
>
  {/* Кнопки с id отзывов */}
  {ReviewData[lang]
    .slice(
      Math.floor(currentSlide / 3) * 3, 
      Math.floor(currentSlide / 3) * 3 + 3
    )
    .map((review, idx) => (
      <button
        key={review.id}
        className={`dot ${currentSlide % 3 === idx ? 'active' : ''}`}
        onClick={() => instanceRef.current?.moveToIdx(review.id - 1)}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: currentSlide % 3 === idx ? '#000' : '#c5c5c5',
          color: currentSlide % 3 === idx ? '#fff' : '#000',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {review.id}
      </button>
    ))}

  {/* Количество всех отзывов */}
  <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#666' }}>
    / {ReviewData[lang].length}
  </span>
</div>


        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default Review;
