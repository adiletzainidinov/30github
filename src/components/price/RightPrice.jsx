import { scrollToElement } from '../../utils/shared/scrollUtils';
import {
  ButtonRightPrice,
  CardRightPrice,
  FooterTextRightPrice,
  InformationRight,
  LineRightPrice,
} from './PriceStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    ribbon: 'ВСЕ БЕСПЛАТНО',
    title: 'ПОДПИСКА И ДОСТУП',
    subTitle: 'Без подписки, без рекламы',
    price: 'от',
    perSystem: 'за весь контент',
    button: 'ПОДКЛЮЧИТЬСЯ',
    footer: 'Внимание! Контент доступен бесплатно!',
    data: [
      { id: 1, icon: 'play-circle', text: 'Безопасные исламские мультфильмы' },
      { id: 2, icon: 'shield-checkmark', text: 'Халяль-контроль контента' },
      { id: 3, icon: 'happy', text: 'Удобный интерфейс для детей' },
      { id: 4, icon: 'book', text: 'Образовательные видео' },
      { id: 5, icon: 'time', text: 'Контроль времени просмотра' },
      { id: 6, icon: 'chatbubbles', text: 'Сообщество для родителей' },
      { id: 7, icon: 'gift', text: 'Все видео бесплатны' },
      { id: 8, icon: 'globe', text: 'Контент на разных языках' },
      { id: 9, icon: 'people', text: 'Семейный формат' },
      { id: 10, icon: 'heart', text: 'Возможность поддержать проект' },
    ],
  },
  ky: {
    ribbon: 'БААРЫ АКЫСЫЗ',
    title: 'ЖАЗЫЛУУ ЖАНА КОЛДОНУУ',
    subTitle: 'Жазылуу жок, жарнамалар жок',
    price: 'баштап',
    perSystem: 'бардык контент үчүн',
    button: 'КИРИҮҮ',
    footer: 'Көңүл буруңуз! Контент акысыз жеткиликтүү!',
    data: [
      { id: 1, icon: 'play-circle', text: 'Коопсуз исламдык мультфильмдер' },
      { id: 2, icon: 'shield-checkmark', text: 'Халал-контент текшерилген' },
      { id: 3, icon: 'happy', text: 'Балдар үчүн ыңгайлуу интерфейс' },
      { id: 4, icon: 'book', text: 'Билим берүү видеолору' },
      { id: 5, icon: 'time', text: 'Көрүү убактысын көзөмөлдөө' },
      { id: 6, icon: 'chatbubbles', text: 'Ата-энелер үчүн коомчулук' },
      { id: 7, icon: 'gift', text: 'Бардык видеолор акысыз' },
      { id: 8, icon: 'globe', text: 'Көп тилдүү контент' },
      { id: 9, icon: 'people', text: 'Үй-бүлөлүк формат' },
      { id: 10, icon: 'heart', text: 'Долбоорду колдоо мүмкүнчүлүгү' },
    ],
  },
};

const RightPrice = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru;
  const scrollfooterContacts = () => scrollToElement('footerContacts');

  return (
    <CardRightPrice>
      <div className="ribbon">{lang.ribbon}</div>
      <h2>{lang.title}</h2>
      <p>{lang.subTitle}</p>
      <h3>
        <span>{lang.price} </span>0<span className="dollar">$</span>
      </h3>
      <h4>{lang.perSystem}</h4>
      {lang.data.map((item) => (
        <InformationRight key={item.id}>
          <div className="papaIconTextRight">
            <div>
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <p>{item.text}</p>
          </div>
          <LineRightPrice></LineRightPrice>
        </InformationRight>
      ))}
      <ButtonRightPrice onClick={scrollfooterContacts}>{lang.button}</ButtonRightPrice>
      <FooterTextRightPrice>{lang.footer}</FooterTextRightPrice>
    </CardRightPrice>
  );
};

export default RightPrice;
