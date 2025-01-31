import { Card, styled } from '@mui/material';
import Button from '../../shared/UI/button/Button';

// Price

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  paddingBottom: 300,
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
}));

export const TextContent = styled('div')(() => ({
  marginTop: 100,
  marginBottom: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: 20,
  marginRight: 20,
  '& h2': {
    fontSize: 45,
    marginBottom: 20,
    fontWeight: 700,
  },
  '& p': {
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 400,
    color: '#9696a5',
    width: '100%',
    maxWidth: 630,
    lineHeight: '24px',
  },

  '@media (max-width: 990px)': {
    '& h2': {
      fontSize: 41,
    },
  },

  '@media (max-width: 766px)': {
    '& h2': {
      fontSize: 37,
    },
  },

  '@media (max-width: 480px)': {
    '& h2': {
      fontSize: 30,
    },
    '& p': {
      fontSize: 12,
      lineHeight: '20px',
      marginBottom: 0,
    },
  },
}));

export const ContainerContent = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 100,
  marginLeft: 20,
  marginRight: 20,
  '@media (max-width: 990px)': {
    flexWrap: 'wrap',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
  },
}));

// LeftBox

export const ContainerLeftBox = styled('div')(() => ({
  '& h2': {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 500,
    width: '100%',
    maxWidth: '420px',
  },
  '@media (max-width: 990px)': {
    marginBottom: 80,
    '& h2': {
      fontSize: 32,
    },
  },
  '@media (max-width: 766px)': {
    '& h2': {
      fontSize: 29,
    },
  },
  '@media (max-width: 480px)': {
    marginBottom: 60,
    '& h2': {
      fontSize: 26,
    },
  },
}));

export const TextIcon = styled('div')(() => ({
  display: 'flex',
  gap: 10,
  width: '100%',
  maxWidth: '400px',
  '& ion-icon': {
    fontSize: '24px',
    color: '#5d6df4',
    cursor: 'pointer',
    '&:hover': {
      color: '#3b4bd4',
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease',
    },
  },
  '&:hover': {
    '& ion-icon': {
      color: '#3b4bd4',
      transform: 'scale(1.2)',
      transition: 'all 0.3s ease',
    },
  },
  '@media (max-width: 990px)': {
    '& p': {
      fontSize: 16,
    },
  },
}));

export const LinePrice = styled('div')(() => ({
  width: 50,
  height: '2px',
  backgroundColor: '#9696a5',
  marginTop: '20px',
  marginBottom: 10,
  position: 'relative',
  top: -7,
}));

// RightPrice

export const CardRightPrice = styled(Card)(() => ({
  width: '100%',
  maxWidth: 540,
  backgroundColor: '#fff',
  borderRadius: '15px',
  position: 'relative',
  color: '#fff',
  textAlign: 'center',

  '& h2': {
    fontSize: '30px',
    fontWeight: 700,
    backgroundColor: '#0d0b2f',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px 15px 0 0',
    paddingTop: 20,
  },

  '& p': {
    fontSize: '14px',
    margin: 0,
    backgroundColor: '#0d0b2f',
    paddingBottom: 20,
  },

  '& .ribbon': {
    position: 'absolute',
    top: '40px',
    right: '-40px',
    transform: 'rotate(45deg)',
    backgroundColor: '#1fe48f',
    color: '#000',
    fontWeight: 700,
    padding: '5px 40px',
    fontSize: '14px',
  },

  '& h3': {
    color: '#0f0f30',
    marginTop: 30,
    fontSize: 60,
    '& .dollar': {
      fontSize: 30,
      position: 'relative',
      top: '-20px',
    },
  },

  '& h4': {
    color: '#9c9c9c',
    fontWeight: 300,
    position: 'relative',
    top: -10,
    marginBottom: 30,
  },
  '@media (max-width: 550px)': {
    '& .ribbon': {
      position: 'absolute',
      top: '0px',
      right: '-15px',
      transform: 'rotate(0deg)',
      backgroundColor: '#1fe48f',
      color: '#000',
      fontWeight: 700,
      padding: '5px 40px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 450px)': {
    '& h2': {
      fontSize: 24.9,
    },
    '& p': {
      fontSize: 12,
    },
    '& h3': {
      fontSize: 50,
      '& .dollar': {
        fontSize: 25,
        position: 'relative',
        top: '-20px',
      },
    },
  },
}));

export const InformationRight = styled('div')(() => ({
  marginBottom: 10,
  '& .papaIconTextRight': {
    display: 'flex',
    color: '#9c9c9c',
  },

  '& ion-icon': {
    fontSize: '24px',
    color: '#5d6df4',
    cursor: 'pointer',
    marginLeft: 20,
    '&:hover': {
      color: '#3b4bd4',
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease',
    },
  },

  '& p': {
    background: 'none',
    marginLeft: 10,
    marginTop: 5,
  },

  '&:hover': {
    '& ion-icon': {
      color: '#3b4bd4',
      transform: 'scale(1.2)',
      transition: 'all 0.3s ease',
    },
  },
  '@media (max-width: 400px)': {
    '& p': {
      maxWidth: 200,
    },
  },
  '@media (max-width: 350px)': {
    '& p': {
      maxWidth: 180,
    },
  },
}));

export const LineRightPrice = styled('div')(() => ({
  width: 400,
  height: '1.5px',
  backgroundColor: '#9696a5',
  marginTop: '0px',
  position: 'relative',
  top: -7,
  marginLeft: 70,
  '@media (max-width: 550px)': {
    width: 350,
    marginRight: 20,
  },
  '@media (max-width: 500px)': {
    width: 300,
    marginRight: 20,
  },
  '@media (max-width: 450px)': {
    width: 250,
    marginRight: 20,
  },
  '@media (max-width: 400px)': {
    width: 200,
    marginRight: 20,
  },
  '@media (max-width: 350px)': {
    width: 170,
    marginRight: 20,
  },
}));

export const ButtonRightPrice = styled(Button)(() => ({
  marginTop: 20,
  marginBottom: 20,
  paddingLeft: '50px',
  paddingRight: '50px',
}));

export const FooterTextRightPrice = styled('h5')(() => ({
  marginBottom: 30,
  color: '#9c9c9c',
  fontWeight: 300,
}));

// blueBox

export const BlueBox = styled('div')(() => ({
  width: '100%',
  height: '100%',
  maxHeight: '800px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  background: 'linear-gradient(to bottom right, white 30%, #6475fe 30%)',
  zIndex: -1,
  '& h2': {
    marginTop: 500,
    color: 'white ',
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 50,
  },
}));

export const PartnerBox = styled('h5')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1300px',
  overflow: 'hidden',
  margin: '0 auto',
  '& .boxCard': {
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
    borderRadius: 7,
    padding: '25px 25px',
    maxWidth: '100%',
    width: 'fit-content',
    margin: '0 10px',
    color: '#0f0f30',
    display: 'flex',
    justifyContent: 'center',
  },
  '& .keen-slider__slide:first-child': {
    marginRight: -40,
  },

  '& .keen-slider__slide:last-child': {
    marginRight: 120,
    marginLeft: 0,
  },

}));

export const WaveBox = styled('div')(() => ({
  width: '100%',
  height: '150px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  background: 'linear-gradient(to bottom right, #ff5a05, #ed9c73)',
  zIndex: -1,
  clipPath:
    'path("M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,149.3C672,128,768,96,864,74.7C960,53,1056,43,1152,58.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z")',
}));
