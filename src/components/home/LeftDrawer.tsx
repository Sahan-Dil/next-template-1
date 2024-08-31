'use client';

import React from 'react';
import {
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const LeftDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const { theme } = useTheme(); // Get the current theme from ShadCN
  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerStyles = {
    paper: {
      backgroundColor: theme === 'dark' ? '#121212' : '#ffffff', // Adjust based on ShadCN's theme
      color: theme === 'dark' ? '#ffffff' : '#000000', // Adjust based on ShadCN's theme
    },
  };

  const navigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        bgcolor: drawerStyles.paper.backgroundColor,
        color: drawerStyles.paper.color,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['option 1', 'option 2'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => navigate(`/pages/${text.replace(/\s+/g, '-')}`)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['list 1', 'list 2', 'list 3', 'list 4'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: drawerStyles.paper,
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
