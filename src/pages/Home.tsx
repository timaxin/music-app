import { Box } from '@mui/material';
import Header from "../components/Header";
import CardSection from "../components/CardSection";
import PopularSongs from "../components/PopularSongs";
import type { Song } from "../components/PopularSongs";

// Mock data for the cards
const recentPlays = [
  {
    image: 'https://picsum.photos/200/200?random=1',
    title: 'Daily Mix 1',
    subtitle: 'Made for you',
  },
  {
    image: 'https://picsum.photos/200/200?random=2',
    title: 'Discover Weekly',
    subtitle: 'Your weekly mixtape',
  },
  {
    image: 'https://picsum.photos/200/200?random=3',
    title: 'Chill Hits',
    subtitle: 'Kick back to the best new and recent chill hits',
  },
  {
    image: 'https://picsum.photos/200/200?random=4',
    title: 'Rock Classics',
    subtitle: 'Rock legends & epic songs',
  },
  {
    image: 'https://picsum.photos/200/200?random=5',
    title: 'All Out 2010s',
    subtitle: 'The biggest songs of the 2010s',
  },
];

// Mock data for popular songs
const popularSongs: Song[] = [
  {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    coverImage: 'https://via.placeholder.com/50',
    isPlaying: true,
  },
  {
    id: 2,
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:35',
    coverImage: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    duration: '2:21',
    coverImage: 'https://via.placeholder.com/50',
  },
  {
    id: 4,
    title: 'good 4 u',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
    coverImage: 'https://via.placeholder.com/50',
  },
  {
    id: 5,
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    coverImage: 'https://via.placeholder.com/50',
  },
];

interface HomeProps {
  currentSong: number | null;
  onSongPlay: (id: number) => void;
}

export default function Home({ currentSong, onSongPlay }: HomeProps) {
  return (
    <Box sx={{ flex: 1, overflowY: 'auto', p: 3 }}>
      <Header />
      <Box sx={{ mt: '64px' }}>
        <CardSection title="Recently Played" items={recentPlays} />
        <CardSection title="Made For You" items={recentPlays.slice().reverse()} />
        <PopularSongs 
          songs={popularSongs} 
          currentSong={currentSong} 
          onSongPlay={onSongPlay} 
        />
      </Box>
    </Box>
  );
}
