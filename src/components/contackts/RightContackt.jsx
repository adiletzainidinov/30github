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
    buttonText: 'Будьте в курсе новых услуг по сварке',
  },
  ky: {
    buttonText: 'Жаңы сваркалык кызматтар жөнүндө кабардар болуңуз',
  },
};

const sossialMediaData = [
  {
    id: 1,
    logo: 'logo-instagram',
    url: 'https://www.instagram.com/kairatows/?utm_source=ig_web_button_share_sheet',
  },
  { id: 2, logo: 'logo-whatsapp', url: 'https://wa.me/996770430476' },
  { id: 3, logo: 'logo-youtube',url: 'tel:+996770430476' },
];

const RightContackt = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Кыргызский, если languageStore = true, и русский, если false

  return (
    <>
      <ContacktsRightBox>
        <SossialMediaBox>
          {sossialMediaData.map((item) => (
            <p key={item.id} onClick={() => handleSocialClick(item.url)}>
              <ion-icon name={item.logo}></ion-icon>
            </p>
          ))}
        </SossialMediaBox>
        <SossialMediaButton onClick={() => handleSocialClick('https://t.me/+996770430476')}>
          <p>{lang.buttonText}</p>
          <img
            style={{ width: 25, height: 25, marginLeft: 10 }}
            src={telegramIcon}
            alt="telegramIcon"
          />
        </SossialMediaButton>
      </ContacktsRightBox>
    </>
  );
};

export default RightContackt;
