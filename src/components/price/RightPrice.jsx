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
    subTitle: 'Без подписки, открытый доступ',
    price: 'от',
    perSystem: 'за весь контент',
    button: 'СПОНСИРОВАТЬ',
    footer: 'Внимание! Контент доступен бесплатно!',
    data: [
      { id: 1, icon: 'film-outline', text: 'Исламские мультфильмы и многое другое' },
      { id: 2, icon: 'musical-notes-outline', text: 'Нашиды для детей' },
      { id: 3, icon: 'star-outline', text: 'Вдохновляющие ролики' },
      { id: 4, icon: 'planet-outline', text: 'Видео со всего мира' },
      { id: 5, icon: 'people-outline', text: 'Безопасная среда для детей' },
      { id: 6, icon: 'chatbox-ellipses-outline', text: 'Советы для родителей' },
      { id: 7, icon: 'shield-outline', text: 'Фильтр нежелательного контента' },
      { id: 8, icon: 'flash-outline', text: 'Быстрый доступ к контенту' },
      { id: 9, icon: 'calendar-outline', text: 'Видео на каждый день' },
      { id: 10, icon: 'color-wand-outline', text: 'Красочный интерфейс' },
    ],
  },
  ky: {
    ribbon: 'БААРЫ АКЫСЫЗ',
    title: 'ЖАЗЫЛУУ ЖАНА КОЛДОНУУ',
    subTitle: 'Жазылуу жок, жарнамалар жок',
    price: 'баштап',
    perSystem: 'бардык контент үчүн',
    button: 'КӨРҮҮ',
    footer: 'Көңүл буруңуз! Контент акысыз жеткиликтүү!',
    data: [
      { id: 1, icon: 'film', text: 'Исламдык мультфильмдер жана жомоктор' },
      { id: 2, icon: 'book-outline', text: 'Билим берүү программалары' },
      { id: 3, icon: 'star-outline', text: 'Шык берүүчү окуялар' },
      { id: 4, icon: 'time-outline', text: 'Көрүү убактысын чектөө' },
      { id: 5, icon: 'people-outline', text: 'Балдар үчүн коопсуз чөйрө' },
      { id: 6, icon: 'chatbox-ellipses-outline', text: 'Ата-энелерге кеңештер' },
      { id: 7, icon: 'shield-outline', text: 'Керексиз контентти чыпкалоо' },
      { id: 8, icon: 'language-outline', text: 'Көп тилдүү видео' },
      { id: 9, icon: 'gift-outline', text: 'Акысыз жеткиликтүү' },
      { id: 10, icon: 'heart-outline', text: 'Долбоорду колдоо' },
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
