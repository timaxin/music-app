import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Avatar } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverImage: string;
  isPlaying?: boolean;
}

interface PopularSongsProps {
  songs: Song[];
  currentSong: number | null;
  onSongPlay?: (id: number) => void;
}

export default function PopularSongs({ songs, currentSong, onSongPlay }: PopularSongsProps) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
        Popular Songs
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Table sx={{ minWidth: 650 }} aria-label="popular songs">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, index) => (
              <TableRow
                key={song.id}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  '&.MuiTableRow-hover': {
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  },
                }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton 
                      size="small" 
                      onClick={() => onSongPlay?.(song.id)}
                      sx={{ 
                        color: song.id === currentSong ? 'primary.main' : 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                    <Typography>{index + 1}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      variant="square" 
                      src={song.coverImage} 
                      alt={song.title}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box>
                      <Typography variant="body1" fontWeight={song.isPlaying ? 'bold' : 'normal'}>{song.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{song.artist}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{song.album}</TableCell>
                <TableCell>{song.duration}</TableCell>
                <TableCell align="right">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}