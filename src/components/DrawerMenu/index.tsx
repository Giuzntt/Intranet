
import * as React from 'react';

import Box from '@mui/material/Box';
import {  useTheme, Theme, CSSObject } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Drawer, DrawerHeader } from './styles';
import { AbcSharp, AddAlarm } from '@mui/icons-material';
import Link from 'next/link';
import { miniDrawerProps } from './types';
import { Button } from '@mui/material'




const MiniDrawer: React.FC<miniDrawerProps> = ( 
    {
        appendChild,
        itemSideBar
    })=> {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display:'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {
            itemSideBar.map(({id, route, label, icons: Icons})=>{
              return (
             
                <Link href={route} key={id} passHref>
                        <ListItemButton
                            key={label}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            >
                            <ListItemIcon
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                }}
                            >
                               <Icons/>
                              </ListItemIcon>
                            <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
                         </ListItemButton>
                    </Link>
              
              )
            })
          }
                    
                
        </List>
        <Divider />
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      {
          appendChild&&appendChild
        }
        </Box>
        
    </Box>    
  );
}

export default MiniDrawer