
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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Drawer, DrawerHeader } from './styles';
import {  Logout, Close } from '@mui/icons-material';
import Link from 'next/link';
import { miniDrawerProps } from './types';

const SideBar: React.FC<miniDrawerProps> = ( 
    {
        itemSideBar,
        children
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
      <AppBar position="fixed" open={open} sx={{backgroundColor:'white'}}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent:'space-between'
        }}>
          <IconButton
            
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: '#464B65',
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
            <Link href={'../Login'} passHref>
          <IconButton
            edge="start"
            sx={{
              color:"#464B65",
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            >
            <Logout/>
          </IconButton>
            </Link>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{
              color:"#464B65",
             
              
            }}>
            {theme.direction === 'rtl' ? <Close /> : <Close />}
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
                                   color:"#464B65",
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
        
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

              {children}
          
        </Box>
        
    </Box>    
  );
}

export default SideBar