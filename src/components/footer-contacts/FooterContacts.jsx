import {
  BoxContainer,
  ButtonStyle,
  Container,
  FooterFlex,
  LeftContactsFooter,
  PapaLeftRightFooter,
  StyledBox,
} from './FooterContactsStyle';
import TelegramIconSecond from '../../assets/images/telegramIconSecond.png';
import { useSelector } from 'react-redux';
import { handleSocialClick } from '../../utils/shared/gotuSoccial';

const FooterContactsDataRu = [
  {
    id: 1,
    number: '+ 996 770 43 04 76',
    icon: 'logo-whatsapp',
    write: 'НАПИСАТЬ WHATSAPP',
    url: 'https://wa.me/996770430476',

  },
  {
    id: 2,
    number: '+ 996 770 43 04 76',
    telegram: TelegramIconSecond,
    write: 'НАПИСАТЬ TELEGRAM',
    url: 'https://t.me/+996770430476',

  },
];

const FooterContactsDataKy = [
  {
    id: 1,
    number: '+ 996 770 43 04 76',
    icon: 'logo-whatsapp',
    write: 'WHATSAPP жазуу',
    url: 'https://wa.me/996770430476',
  },
  {
    id: 2,
    number: '+ 996 770 43 04 76',
    telegram: TelegramIconSecond,
    write: 'TELEGRAM жазуу',
    url: 'https://t.me/+996770430476',
  },
];

const FooterContacts = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Выбор данных в зависимости от языка
  const lang = languageStore ? FooterContactsDataKy : FooterContactsDataRu;

  return (
    <Container id="footerContacts">
      <StyledBox>
        <BoxContainer>
          <h2>{languageStore ? 'Контакттар' : 'Контакты'}</h2>
          <PapaLeftRightFooter>
            {lang.map((item) => (
              <LeftContactsFooter key={item.id}>
                <FooterFlex>
                  <p className="call-out">
                    <span className="call">
                      <ion-icon name="call-outline"></ion-icon>
                    </span>
                    {item.number}
                  </p>
                  <ButtonStyle onClick={() => handleSocialClick(item.url)}>
                    <div className="or">
                      <p>{languageStore ? 'ЖЕ' : 'ИЛИ'}</p>
                    </div>
                    {item.write}
                    <p className="whatsapp">
                      {item.icon && <ion-icon name={item.icon}></ion-icon>}
                      {item.telegram && (
                        <img
                          className="telegram"
                          src={item.telegram}
                          alt="telegram"
                        />
                      )}
                    </p>
                  </ButtonStyle>
                </FooterFlex>
              </LeftContactsFooter>
            ))}
          </PapaLeftRightFooter>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default FooterContacts;
