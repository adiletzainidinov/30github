import {
  ContacktsRightBox,
  SossialMediaBox,
  SossialMediaButton,
} from './ContacktsStyle';
import { useSelector } from 'react-redux';
import telegramIcon from '../../assets/images/telegramIconSecond.png';
import { handleSocialClick } from '../../utils/shared/gotuSoccial';

const translations = {
  ru: {
    buttonText: 'Следите за новыми видео для детей',
  },
  ky: {
    buttonText: 'Балдар үчүн жаңы халал видеолордон кабардар болуңуз',
  },
};

const sossialMediaData = [
  {
    id: 1,
    logo: 'logo-instagram',
    url: 'https://www.instagram.com/muslimkids.media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D', // Обнови на актуальный
  },
  { id: 2, logo: 'logo-youtube', url: 'https://www.youtube.com/@muslimkidskg' },
  { id: 3, logo: 'logo-tiktok', url: 'https://www.tiktok.com/@muslimkids.media?is_from_webapp=1&sender_device=pc' }, // Обнови ссылку
];

const RightContact = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru;

  return (
    <ContacktsRightBox>
      <SossialMediaBox>
        {sossialMediaData.map((item) => (
          <p key={item.id} onClick={() => handleSocialClick(item.url)}>
            <ion-icon name={item.logo}></ion-icon>
          </p>
        ))}
      </SossialMediaBox>
      <SossialMediaButton onClick={() => handleSocialClick('https://t.me/muslimkidsmedia')}>
        <p>{lang.buttonText}</p>
        <img
          style={{ width: 25, height: 25, marginLeft: 10 }}
          src={telegramIcon}
          alt="telegramIcon"
        />
      </SossialMediaButton>
    </ContacktsRightBox>
  );
};

export default RightContact;
