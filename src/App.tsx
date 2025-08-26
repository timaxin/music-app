import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import Sidebar from "./components/Sidebar";

// Pages
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Settings from './pages/Settings';
import Playlist from './pages/Playlist';
import Song from './pages/Song';
import Album from './pages/Album';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [currentSong, setCurrentSong] = useState<number | null>(1);

  const handleSongPlay = (id: number) => {
    setCurrentSong(id);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <Box component="main" sx={{ ml: '320px',flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Routes>
                  <Route path="/" element={
                    <Home 
                      currentSong={currentSong} 
                      onSongPlay={handleSongPlay} 
                    />
                  } />
                  <Route path="/search" element={<Search />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/playlist/:id" element={<Playlist />} />
                  <Route path="/song/:id" element={<Song />} />
                  <Route path="/album/:id" element={<Album />} />
                </Routes>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
