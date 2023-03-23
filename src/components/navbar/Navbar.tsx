import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { navItems } from 'src/components/config/constants';
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import { useRouter } from 'next/router';

interface Props {
  window?: () => Window;
}

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px' }}>
        <Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '5px', }}>
          <JavascriptOutlinedIcon fontSize='large' fontFamily={'fantasy'} />
          <Typography fontFamily={'fantasy'} variant='h6'>James</Typography>

        </Box>
        <CloseIcon />
      </Box>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton onClick={() => router.push(item.route)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: "7vh" }}>
      <AppBar component='nav'>
        <Toolbar sx={{ backgroundColor: "#431f9a" }}>

          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box onClick={() => router.push(`/`)} sx={{ cursor: "pointer", my: 2, alignItems: 'center', gap: '5px', flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <JavascriptOutlinedIcon fontSize='large' />
            <Typography fontFamily={'fantasy'} variant='h6' component='div'>
              James
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button onClick={() => router.push(item.route)} key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `100%` },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;