import { useState } from 'react';
import {
  BoxContainer,
  Container,
  StyledBox,
  ReviewsFromЗilgrims,
  RevievCard,
  AboutNameReviev,
  RealReviev,
  DateAndRead,
  ReviewPapa,
  ButtonStyle,
} from './ReviewStyle';
import { useSelector } from 'react-redux';

const ReviewDataRu = [
  {
    id: 1,
    name: 'Алиша Шарипова',
    img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
    rating: '10/10',
    review: `Этот канал — настоящий кладезь знаний! Мои дети с радостью учат арабский, слушают истории о пророках и учат важные исламские принципы. Они уже не могут представить свой день без этого канала!`,
    date: '5 января 2025',
    BackgroundColor: '#f3ffc6',
  },
  {
    id: 2,
    name: 'Айша Мухаммед',
    img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
    rating: '9/10',
    review: `Мы с детьми любим смотреть обучающие видео на этом канале. Отличные мультфильмы и познавательные истории, которые помогают детям развивать духовность и лучше понимать ценности ислама.`,
    date: '15 января 2025',
    BackgroundColor: '#fac8cd',
  },
];

const ReviewDataKy = [
  {
    id: 1,
    name: 'Алиша Шарипова',
    img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
    rating: '10/10',
    review: `Бул канал чыныгы билим булагы! Менин балдарым араб тилин үйрөнүп, пайгамбарлардын окуяларын угуп, исламдын маанилүү принциптерин үйрөнүп жатышат. Алар бул каналсыз күндөрүн элестете алышпайт!`,
    date: '5 январь 2025',
    BackgroundColor: '#f3ffc6',
  },
  {
    id: 2,
    name: 'Айша Мухаммед',
    img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
    rating: '9/10',
    review: `Биз балдарым менен бул каналдын билим берүүчү видеолорун көрүп, абдан сүйүнүп калдык. Мыкты мультфильмдер жана билимдүү окуялар балдарга исламдын баалуулуктарын жакшы түшүнүүгө жардам берет.`,
    date: '15 январь 2025',
    BackgroundColor: '#fac8cd',
  },
];

const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const maxTextLength = 120;
  const { languageStore } = useSelector((state) => state.umra);

  const lang = languageStore ? ReviewDataKy : ReviewDataRu;

  const handleToggleExpand = (id) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <ReviewsFromЗilgrims>
            {languageStore ? 'Балдардын пикирлери' : 'Отзывы наших детей'}
          </ReviewsFromЗilgrims>

          <ReviewPapa>
            {lang.map((review) => {
              const isExpanded = expandedReviews[review.id];
              const displayedText = isExpanded
                ? review.review
                : `${review.review.slice(0, maxTextLength)}${
                    review.review.length > maxTextLength ? '...' : ''
                  }`;

              return (
                <RevievCard
                  key={review.id}
                  BackgroundColor={review.BackgroundColor}
                >
                  <AboutNameReviev>
                    <img src={review.img} alt="Отзыв о YouTube для детей" />
                    <p>{review.name}</p>
                    <div className="raiting">{review.rating}</div>
                  </AboutNameReviev>

                  <RealReviev>
                    <p>{displayedText}</p>
                  </RealReviev>

                  <DateAndRead onClick={() => handleToggleExpand(review.id)}>
                    <h2>{review.date}</h2>
                    <div className="icon">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                  </DateAndRead>
                </RevievCard>
              );
            })}
          </ReviewPapa>
          <ButtonStyle>
            {languageStore ? 'Бардык пикирлер' : 'Все отзывы'}
          </ButtonStyle>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default Review;
