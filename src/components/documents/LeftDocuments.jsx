import {
  DocumentsSome,
  LeftContainer,
  PapaDocumentSome,
} from './DocumentsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    title: 'Необходимые документы для установки системы отопления',
    data: [
      {
        id: 1,
        icon: 'earth-outline',
        title: 'Паспорт клиента',
        subTitle: 'Паспорт, ID карта с актуальными данными',
      },
      {
        id: 2,
        icon: 'document-attach-outline',
        title: 'Договор на установку',
        subTitle: 'Нужно заключение договора на установку системы отопления',
      },
      {
        id: 3,
        icon: 'person-circle',
        title: 'Фото помещения',
        subTitle: 'Фото помещения, где будет установлена система отопления',
      },
      {
        id: 4,
        icon: 'people',
        title: 'Согласование с управляющей компанией',
        subTitle: 'Необходимо согласование с УК для установки системы',
      },
    ],
  },
  ky: {
    title: 'Жылуулук системасын орнотуу үчүн зарыл болгон документтер',
    data: [
      {
        id: 1,
        icon: 'earth-outline',
        title: 'Кардардын паспорту',
        subTitle: 'Паспорт, ID карта туура маалыматтар менен',
      },
      {
        id: 2,
        icon: 'document-attach-outline',
        title: 'Орнотуу келишими',
        subTitle: 'Жылуулук системасын орнотуу боюнча келишим керек',
      },
      {
        id: 3,
        icon: 'person-circle',
        title: 'Бөлмөнүн сүрөтү',
        subTitle: 'Жылуулук системасы орнотулат деп пландалган бөлмөнүн сүрөтү',
      },
      {
        id: 4,
        icon: 'people',
        title: 'Башкаруу компаниясынан макулдашуу',
        subTitle: 'Жылуулук системасын орнотуу үчүн УК менен макулдашуу керек',
      },
    ],
  },
};

const LeftDocuments = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Если languageStore = true, то показываем кыргызский, если false — русский

  return (
    <>
      <LeftContainer>
        <h1>{lang.title}</h1>
        <PapaDocumentSome>
          {lang.data.map((item) => (
            <DocumentsSome key={item.id}>
              <div className="icons">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
            </DocumentsSome>
          ))}
        </PapaDocumentSome>
      </LeftContainer>
    </>
  );
};

export default LeftDocuments;
