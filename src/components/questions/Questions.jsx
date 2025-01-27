import { useState } from 'react';
import {
  BoxContainer,
  Container,
  QuestionLine,
  QuestionsBox,
  StyledBox,
  QuestionContent,
} from './questionsStyle';
import { QuestionsDataRu,QuestionsDataKy } from '../../data/data';
import { useSelector } from 'react-redux';

const Questions = () => {
  const [visibleQuestionId, setVisibleQuestionId] = useState(null);
  const { languageStore } = useSelector((state) => state.umra);

  const lang = languageStore ? QuestionsDataKy : QuestionsDataRu;

  const handleIsVisible = (id) => {
    setVisibleQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <h2>{languageStore ? 'Суроо жооп' : 'Вопросы и ответы'}</h2>
          {lang.map((item) => (
            <div key={item.id}>
              <QuestionsBox onClick={() => handleIsVisible(item.id)}>
                <div
                  className={`icon ${
                    visibleQuestionId === item.id ? 'rotate' : ''
                  }`}
                >
                  <ion-icon
                    name={
                      visibleQuestionId === item.id
                        ? 'caret-up'
                        : 'caret-forward'
                    }
                  ></ion-icon>
                </div>
                <p>{item.question}</p>
              </QuestionsBox>
              <QuestionContent isVisible={visibleQuestionId === item.id}>
                {item.answer}
              </QuestionContent>
              <QuestionLine />
            </div>
          ))}
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default Questions;
