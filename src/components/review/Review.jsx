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
    name: 'Иван Иванов',
    img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
    rating: '10/10',
    review: `Отличная компания! Установили отопление в частном доме быстро и качественно. Работы были выполнены точно в срок, и теперь зимой в доме тепло и уютно!`,
    date: '5 января 2025',
    BackgroundColor: '#f3ffc6',
  },
  {
    id: 2,
    name: 'Елена Сидорова',
    img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
    rating: '9/10',
    review: `Очень довольна работой этой компании. Все сделали аккуратно, а отопление работает отлично. Были небольшие задержки по времени, но все решилось быстро.`,
    date: '15 января 2025',
    BackgroundColor: '#fac8cd',
  },
];

const ReviewDataKy = [
  {
    id: 1,
    name: 'Иван Иванов',
    img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
    rating: '10/10',
    review: `Жакшы компания! Жеке үйгө жылуулук орнотушту тез жана сапаттуу жасады. Жумуштар так убагында аткарылды, эми кышында үйдө жылуулук жана уюткулук бар!`,
    date: '5 январь 2025',
    BackgroundColor: '#f3ffc6',
  },
  {
    id: 2,
    name: 'Елена Сидорова',
    img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
    rating: '9/10',
    review: `Бул компаниянын иши менен абдан канааттандым. Бардык иштер так жана жакшы аткарылды, жылуулук жакшы иштейт. Азыр кээ бир кечигүүлөр болгон, бирок бардыгы тез чечилди.`,
    date: '15 январь 2025',
    BackgroundColor: '#fac8cd',
  },
];


const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const maxTextLength = 120;
  const { languageStore } = useSelector((state) => state.umra);

  const lang = languageStore ? ReviewDataKy : ReviewDataRu

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
            {languageStore ? 'Кардарлардын пикирлери' : 'Отзывы наших клиентов'}
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
                    <img src={review.img} alt="Отзыв паломника" />
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
