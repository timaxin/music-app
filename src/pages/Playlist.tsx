import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Playlist() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Playlist {id}
      </Typography>
      <Typography>Playlist details will be shown here</Typography>
    </Box>
  );
}
