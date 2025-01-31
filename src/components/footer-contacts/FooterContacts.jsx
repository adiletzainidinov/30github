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
import { styled, Typography } from '@mui/material';
import { FaHandHoldingHeart } from 'react-icons/fa';

const FooterContactsDataRu = [
  {
    id: 1,
    number: 'Наш сайт для поддежки',
    icon: 'link',
    write: 'перейти',
    url: 'https://details-zeta.vercel.app/',
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
          <h2 style={{ fontSize: 45 }}>
            {languageStore ? 'Контакттар' : 'Как вы можете поддержать нас?'}
          </h2>
          <StyledText>
            Переходите по ссылке и <span>помогите</span> нам сделать больше
            добра
          </StyledText>
          <PapaLeftRightFooter>
            {lang.map((item) => (
              <LeftContactsFooter
                key={item.id}
                style={{ alignItems: 'center', margin: '0 auto' }}
              >
                <FooterFlex
                  style={{
                    display: 'flex',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ButtonStyle
                    onClick={() => handleSocialClick(item.url)}
                    style={{}}
                  >
                    <div className="or">
                      <p>
                        {languageStore ? (
                          'ЖЕ'
                        ) : (
                          <FaHandHoldingHeart
                            style={{
                              fontSize: '40px',
                              color: 'white',
                              width: '50px',
                              height: 35,
                              marginTop: 5,
                            }}
                          />
                        )}
                      </p>
                    </div>
                    <p style={{ fontSize: '25px' }}>{item.write}</p>{' '}
                    <p className="whatsapp">
                      {item.icon && (
                        <ion-icon
                          style={{ fontSize: '30px', marginTop: '8px' }}
                          name={item.icon}
                        ></ion-icon>
                      )}
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

const StyledText = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 600,
  textAlign: 'center',
  color: '#8c8c8c',
  marginBottom: '15px',

  '& span': {
    color: '#ff3b30',
    fontWeight: 700,
  },
}));
