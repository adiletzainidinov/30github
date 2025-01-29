import { ContacktsLeftBox } from './ContacktsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    subtitle: '«Чистый контент — спокойствие для родителей»',
    title: '«Дарите детям безопасные знания и радость без запретного»',
  },
  ky: {
    subtitle: '«Таза контент — ата-энелер үчүн тынчтык»',
    title: '«Балдарыңызга коопсуз билим жана халал кубаныч тартуулаңыз»',
  },
};

const LeftContact = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru;

  return (
    <ContacktsLeftBox>
      <p>{lang.subtitle}</p>
      <h2>{lang.title}</h2>
    </ContacktsLeftBox>
  );
};

export default LeftContact;
