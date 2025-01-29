import {
  DocumentsSome,
  LeftContainer,
  PapaDocumentSome,
} from './DocumentsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    title: 'Необходимые документы для создания халяльного контента для детей',
    data: [
      {
        id: 1,
        icon: 'earth-outline',
        title: 'Паспорт владельца канала',
        subTitle: 'Паспорт, ID карта с актуальными данными',
      },
      {
        id: 2,
        icon: 'document-attach-outline',
        title: 'Договор с поставщиками контента',
        subTitle: 'Необходимо заключение договора с поставщиками материалов, соответствующих халяль стандартам',
      },
      {
        id: 3,
        icon: 'person-circle',
        title: 'Фото помещения для съемок',
        subTitle: 'Фото помещения, где будет сниматься контент',
      },
      {
        id: 4,
        icon: 'people',
        title: 'Согласование с религиозными экспертами',
        subTitle: 'Необходимо согласование контента с исламскими экспертами для соответствия халяль требованиям',
      },
    ],
  },
  ky: {
    title: 'Балдар үчүн халал контентин түзүү үчүн зарыл болгон документтер',
    data: [
      {
        id: 1,
        icon: 'earth-outline',
        title: 'Канал ээсинин паспорту',
        subTitle: 'Паспорт, ID карта туура маалыматтар менен',
      },
      {
        id: 2,
        icon: 'document-attach-outline',
        title: 'Контент берүүчүлөр менен келишим',
        subTitle: 'Халал стандарттарына туура келген контент берүүчүлөр менен келишим түзүү керек',
      },
      {
        id: 3,
        icon: 'person-circle',
        title: 'Тартуу үчүн бөлмөнүн сүрөтү',
        subTitle: 'Контент тартылган бөлмөнүн сүрөтү',
      },
      {
        id: 4,
        icon: 'people',
        title: 'Дин кызматкерлери менен макулдашуу',
        subTitle: 'Контентти ислам эксперттери менен макулдашуу керек',
      },
    ],
  },
};

const LeftDocuments = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Показываем кыргызский, если languageStore = true, и русский, если false

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
            <p>{item.subTitle}</p>
          </DocumentsSome>
        ))}
      </PapaDocumentSome>
    </LeftContainer>
  );
};

export default LeftDocuments;
