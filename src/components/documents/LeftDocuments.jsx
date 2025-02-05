import { scrollToElement } from '../../utils/shared/scrollUtils';
import {
  DocumentsSome,
  LeftContainer,
  PapaDocumentSome,
} from './DocumentsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    title: 'Для запуска проекта нам необходима ваша поддержка',
    data: [
      {
        id: 1,
        icon: 'cash-outline',
        title: 'Финансирование проекта',
        subTitle:
          'Для создания платформы требуется 100 000$. Ваш вклад поможет сделать контент доступным и безопасным!',
      },
      {
        id: 2,
        icon: 'brush-outline',
        title: 'Требуются дизайнеры (Figma)',
        subTitle:
          'Мы ищем волонтёров-дизайнеров, готовых помочь с созданием интерфейса и визуального стиля проекта.',
      },
      {
        id: 3,
        icon: 'cut-outline',
        title: 'Волонтёры-монтажёры',
        subTitle:
          'Если у вас есть навыки видеомонтажа, присоединяйтесь! Нам нужны люди, готовые помочь в обработке видео.',
      },
      {
        id: 4,
        icon: 'heart-outline',
        title: 'Любая помощь важна',
        subTitle:
          'Можете помочь другим способом? Напишите нам! Давайте вместе создадим полезный контент для детей.',
      },
    ],
  },
  ky: {
    title: 'Долбоорду ишке ашыруу үчүн сиздин колдооңуз керек',
    data: [
      {
        id: 1,
        icon: 'cash-outline',
        title: 'Долбоорду каржылоо',
        subTitle:
          'Платформаны түзүү үчүн 100 000$ талап кылынат. Сиздин салымыңыз балдар үчүн коопсуз контент түзүүгө жардам берет!',
      },
      {
        id: 2,
        icon: 'brush-outline',
        title: 'Figma дизайнерлер керек',
        subTitle:
          'Бизге долбоордун интерфейсин жана визуалдык стилин түзүүгө жардам бере турган ыктыярчылар керек.',
      },
      {
        id: 3,
        icon: 'cut-outline',
        title: 'Монтажёр-ыктыярчылар керек',
        subTitle:
          'Эгерде сиз видео монтаждоо боюнча тажрыйбаңыз бар болсо, бизге кошулуңуз! Бизге видеолорду иштеп чыгууга жардам берүү керек.',
      },
      {
        id: 4,
        icon: 'heart-outline',
        title: 'Кандай жардам болбосун маанилүү',
        subTitle:
          'Башкача жардам бере аласызбы? Биз менен байланышыңыз! Келгиле, балдар үчүн пайдалуу контентти бирге түзөлү.',
      },
    ],
  },
};

const LeftDocuments = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Показываем кыргызский, если languageStore = true, и русский, если false
  const scrollfooterContacts = () => scrollToElement('footerContacts');


  return (
    <LeftContainer>
      <h1>{lang.title}</h1>
      <PapaDocumentSome>
        {lang.data.map((item) => (
          <DocumentsSome key={item.id}>
            <div className="icons">
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <h2>{item.title}</h2>
            <p>
              {item.subTitle} <br /> <span style={{ color: '#007bff' }} onClick={scrollfooterContacts}>Поддержать</span>
            </p>
          </DocumentsSome>
        ))}
      </PapaDocumentSome>
    </LeftContainer>
  );
};

export default LeftDocuments;
