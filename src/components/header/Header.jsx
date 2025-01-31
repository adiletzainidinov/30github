import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Container } from './headerStyle';
import SideBar from './side-bar/SideBar';
import MTUBLogo from './../../assets/images/MuslimKidsLogoReal.png'

const 
Header = () => {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          maxWidth: 1440,
          position: 'fixed',
          top: 0,
          zIndex: 1000,
        }}
      >
        <AppBar
          position="static"
          sx={{ background: 'linear-gradient(45deg, #6677ff, #2e42f0 )' }}
        >
          <Toolbar
            variant="regular"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
<img src={MTUBLogo} alt="MTUBLogo" style={{width: '30px',height: '30px', borderRadius: '50px', marginRight: '10px'}} />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', color: '#ffffff' }}
              >
                muslimkids.media
              </Typography>
            </Box>
            <SideBar />
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
