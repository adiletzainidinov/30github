import Button from '../../shared/UI/button/Button';
import { styled } from '@mui/material';

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
  justifyContent: 'space-between',
  '@media (max-width: 990px)': {
    flexWrap: 'wrap',
  },
}));

// Contack Left

export const ContacktsLeftBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '770px',
  height: '450px',
  backgroundImage:
    'url("https://i.pinimg.com/736x/2c/43/b7/2c43b73c59227cada908b821315e61d6.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  paddingRight: 20,
  paddingLeft: 20,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
  '& p': {
    fontStyle: 'italic',
    color: '#ff5a05',
    marginTop: 130,
    marginBottom: 40,
  },
  '& h2': {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    animation: 'fadeIn 2s ease-in-out',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: 990,
    '& h2': {
      fontSize: '2.3rem',
    },
  },
  '@media (max-width: 766px)': {
    '& h2': {
      fontSize: '2.1rem',
    },
  },
  '@media (max-width: 480px)': {
    height: '100%',
    maxHeight: 400,
    '& h2': {
      fontSize: '1.9rem',
    },
  },
}));

// Contackt Right

export const ContacktsRightBox = styled('div')(() => ({
  backgroundColor: '#141520',
  width: '100% ',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 990px)': {
    height: '100%',
    maxHeight: 350,
    padding: '0 20px',
  },
}));

export const SossialMediaBox = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 440,
  '& p': {
    border: '5px solid #f3834b',
    padding: 30,
    borderRadius: 15,
    cursor: 'pointer',
    '& ion-icon': {
      fontSize: 34,
      color: 'white',
    },
  },
  '@media (max-width: 400px)': {
    '& p': {
      padding: 15
    },
  },
}));

export const SossialMediaButton = styled(Button)(() => ({
  width: '100%',
  maxWidth: 440,
  marginTop: 30,
  fontSize: 17,
  '@media (max-width: 480px)': {
    '& p': {
      fontSize: 14
    }
  },
}));
