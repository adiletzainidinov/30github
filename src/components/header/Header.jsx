import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Container } from './headerStyle';
import SideBar from './side-bar/SideBar';
import CottageIcon from '@mui/icons-material/Cottage';

const Header = () => {
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
              <CottageIcon sx={{ fontSize: 40, color: '#ffffff', mr: 1 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', color: '#ffffff' }}
              >
                Кайрат
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
