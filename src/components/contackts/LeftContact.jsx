import { ContacktsLeftBox } from './ContacktsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    subtitle: '«Качество сварки — залог надежности конструкции»',
    title: '«Доверьте свою безопасность профессионалам сварочного дела»',
  },
  ky: {
    subtitle: '«Сварканын сапаты — конструкциянын ишенимдүүлүгүнүн негизги кепилдиги»',
    title: '«Коопсуздугуңузду сварка ишинин кесипкөй адистерине ишениңиз»',
  },
};

const LeftContact = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Показывать кыргызский, если languageStore = true, и русский, если false

  return (
    <ContacktsLeftBox>
      <p>{lang.subtitle}</p>
      <h2>{lang.title}</h2>
    </ContacktsLeftBox>
  );
};

export default LeftContact;
