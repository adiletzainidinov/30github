import { Box } from '@mui/material';
import { ContainerLeftBox, LinePrice, TextIcon } from './PriceStyle';
import { useSelector } from 'react-redux';

const DataTextIcon = [
  { id: 1, icon: 'play-circle', textKey: 'safe_content' },
  { id: 2, icon: 'shield-checkmark', textKey: 'halal_control' },
  { id: 3, icon: 'happy', textKey: 'child_friendly' },
  { id: 4, icon: 'book', textKey: 'educational' },
  { id: 5, icon: 'time', textKey: 'time_control' },
  { id: 6, icon: 'chatbubbles', textKey: 'parent_community' },
  { id: 7, icon: 'gift', textKey: 'free_access' },
  { id: 8, icon: 'globe', textKey: 'multilingual' },
  { id: 9, icon: 'people', textKey: 'family_friendly' },
  { id: 10, icon: 'heart', textKey: 'support_us' },
];

const LeftPrice = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычный контент
  const textContent = languageStore
    ? {
        header: 'Биздин платформанын өзгөчөлүктөрү:',
        safe_content: 'Балдар үчүн коопсуз видеоконтент',
        halal_control: 'Халал стандарттарына ылайык текшерилген',
        child_friendly: 'Балдарга ылайыктуу интерфейс',
        educational: 'Илимий жана диний билим берүү материалдары',
        time_control: 'Көрүү убактысын чектөө функциясы',
        parent_community: 'Ата-энелер үчүн колдоо жана пикир алышуу',
        free_access: 'Акысыз жана жеткиликтүү видеолор',
        multilingual: 'Бир нече тилде видеоконтент',
        family_friendly: 'Үй-бүлөлүк контент',
        support_us: 'Бизди колдоо үчүн кайрымдуулук мүмкүнчүлүктөрү',
      }
    : {
        header: 'Особенности нашей платформы:',
        safe_content: 'Безопасный видеоконтент для детей',
        halal_control: 'Прошедший проверку на Безопасность',
        child_friendly: 'Интерфейс, удобный для детей',
        educational: 'Образовательные и религиозные материалы',
        time_control: 'Функция ограничения времени просмотра',
        parent_community: 'Поддержка и общение для родителей',
        free_access: 'Бесплатные и доступные видео',
        multilingual: 'Контент на нескольких языках',
        family_friendly: 'Семейный контент',
        support_us: 'Возможность поддержать проект',
      };

  return (
    <ContainerLeftBox>
      <h2 style={{textAlign: 'center'}}>{textContent.header}</h2>
      {DataTextIcon.map((item) => (
        <div key={item.id}>
          <TextIcon>
            <Box>
              <ion-icon name={item.icon}></ion-icon>
            </Box>
            <p>{textContent[item.textKey]}</p>
          </TextIcon>
          <LinePrice />
        </div>
      ))}
    </ContainerLeftBox>
  );
};

export default LeftPrice;
