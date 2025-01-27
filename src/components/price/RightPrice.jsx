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
    ribbon: 'ВСЕ ВКЛЮЧЕНО',
    title: 'СТОИМОСТЬ ОТОПЛЕНИЯ',
    subTitle: 'Без установки, с установкой +100$',
    price: 'от',
    perSystem: 'за одну систему',
    button: 'ОФОРМИТЬ ЗАЯВКУ',
    footer: 'Внимание! Предложение ограничено!',
    data: [
      {
        id: 1,
        icon: 'calendar',
        text: 'Срок службы системы отопления: 14 лет',
      },
      {
        id: 2,
        icon: 'hammer',
        text: 'Установка и настройка системы отопления',
      },
      {
        id: 3,
        icon: 'thermometer',
        text: 'Тип системы: водяное/электрическое отопление',
      },
      { id: 4, icon: 'cube', text: 'Площадь покрытия: до 200 м²' },
      {
        id: 5,
        icon: 'wallet',
        text: 'Энергоэффективность: экономия до 30% на счетах',
      },
      { id: 6, icon: 'business', text: 'Гарантия на установку: 5 лет' },
      {
        id: 7,
        icon: 'thermometer-outline',
        text: 'Контроль температуры: автоматический режим',
      },
      {
        id: 8,
        icon: 'construct',
        text: 'Бесплатное техобслуживание первые 2 года',
      },
      {
        id: 9,
        icon: 'shield-checkmark',
        text: 'Сертифицированная безопасность',
      },
      { id: 10, icon: 'people', text: 'Квалифицированные специалисты' },
      { id: 11, icon: 'ribbon', text: 'Использование премиальных материалов' },
      {
        id: 12,
        icon: 'settings',
        text: 'Возможность кастомизации системы под ваш дом',
      },
    ],
  },
  ky: {
    ribbon: 'БААРЫ КИРЕТ',
    title: 'ЖЫЛУУЛУКТУН БААСЫ',
    subTitle: 'Орнотуу жок, орнотуу менен +100$',
    price: 'баштап',
    perSystem: 'бир система үчүн',
    button: 'КАЙРЫЛУУ БЕРҮҮ',
    footer: 'Көңүл буруңуз! Сунуш чектелген!',
    data: [
      {
        id: 1,
        icon: 'calendar',
        text: 'Жылуулук системасынын кызмат мөөнөтү: 14 жыл',
      },
      {
        id: 2,
        icon: 'hammer',
        text: 'Жылуулук системасын орнотуу жана тууралоо',
      },
      {
        id: 3,
        icon: 'thermometer',
        text: 'Системанын түрү: суу/электр жылытуу',
      },
      { id: 4, icon: 'cube', text: 'Камтуу аянты: 200 м² чейин' },
      {
        id: 5,
        icon: 'wallet',
        text: 'Энергияны үнөмдөө: эсептерден 30% га чейин',
      },
      { id: 6, icon: 'business', text: 'Орнотуу кепилдиги: 5 жыл' },
      {
        id: 7,
        icon: 'thermometer-outline',
        text: 'Температураны көзөмөлдөө: автоматтык режим',
      },
      { id: 8, icon: 'construct', text: 'Биринчи 2 жыл акысыз тейлөө' },
      {
        id: 9,
        icon: 'shield-checkmark',
        text: 'Сертификацияланган коопсуздук',
      },
      { id: 10, icon: 'people', text: 'Квалификациялуу адистер' },
      {
        id: 11,
        icon: 'ribbon',
        text: 'Жогорку сапаттагы материалдарды колдонуу',
      },
      { id: 12, icon: 'settings', text: 'Системаны үйүңүзгө ылайыкташтыруу' },
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
        <span>{lang.price} </span>300<span className="dollar">$</span>
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
