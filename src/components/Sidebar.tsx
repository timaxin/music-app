import { Paper, ListItemIcon, ListItemText, MenuList, MenuItem, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlaylistIcon from '@mui/icons-material/QueueMusic';
import { useState } from 'react';

interface MenuItemProps {
  text: string;
  icon: React.ReactNode;
  path: string;
}

export default function Sidebar() {
  const location = useLocation();
  const [openPlaylists, setOpenPlaylists] = useState(false);
  
  const mainMenuItems: MenuItemProps[] = [
    { text: 'Home', icon: <HomeIcon fontSize="small" />, path: '/' },
    { text: 'Search', icon: <SearchIcon fontSize="small" />, path: '/search' },
    { text: 'My Library', icon: <LibraryMusicIcon fontSize="small" />, path: '/library' },
  ];

  const libraryMenuItems: MenuItemProps[] = [
    { text: 'New Playlist', icon: <LibraryAddIcon fontSize="small" />, path: '/new-playlist' },
    { text: 'Liked Songs', icon: <FavoriteIcon fontSize="small" />, path: '/liked-songs' },
  ];

  const bottomMenuItems: MenuItemProps[] = [
    { text: 'Settings', icon: <SettingsIcon fontSize="small" />, path: '/settings' },
  ];

  const myPlaylists = [
    { text: 'Playlist 1', icon: <PlaylistIcon fontSize="small" />, path: '/playlist/1' },
  ];

  const renderMenuItem = (item: MenuItemProps) => {
    const isActive = location.pathname === item.path;
    return (
      <Link
        key={item.path}
        to={item.path}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
        }}
        className={isActive ? 'active' : ''}
      >
        <MenuItem
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiListItemIcon-root': { color: 'primary.main' },
              '& .MuiListItemText-primary': { color: 'primary.main', fontWeight: 600 },
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
          selected={isActive}
        >
          <ListItemIcon sx={{ color: isActive ? 'primary.main' : 'inherit' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text} 
            sx={{ '& .MuiTypography-root': { fontWeight: isActive ? 600 : 400 } }} 
          />
        </MenuItem>
      </Link>
    );
  };

  return (
    <Paper 
      square 
      sx={{ 
        width: 320, 
        maxWidth: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        display: 'flex', 
        flexDirection: 'column',
        zIndex: 10,
      }}
    >
      
      {/* Main Navigation */}
      <MenuList sx={{ px: 2 }}>
        {mainMenuItems.map(renderMenuItem)}
      </MenuList>

      {/* Library Section */}
      <Typography 
        variant="subtitle2" 
        sx={{ px: 3, pt: 2, pb: 1, color: 'text.secondary', 
            fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' 
        }}
      >
        Library
      </Typography>
      <MenuList sx={{ px: 2, pb: 2 }}>
        <MenuItem
          onClick={() => setOpenPlaylists(!openPlaylists)}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiListItemIcon-root': { color: 'primary.main' },
              '& .MuiListItemText-primary': { color: 'primary.main', fontWeight: 600 },
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
            <ListItemIcon>
                {openPlaylists ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText 
                primary="My Playlists" 
            />
        </MenuItem>
        {openPlaylists && <MenuList sx={{ px: 2, pb: 2 }}>
          {myPlaylists.map(renderMenuItem)}
        </MenuList>}

        {libraryMenuItems.map(renderMenuItem)}
      </MenuList>

      {/* Bottom Section */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
        <MenuList>
          {bottomMenuItems.map(renderMenuItem)}
          <MenuItem>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </Box>
    </Paper>
  );
}