import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Song() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Song {id}
      </Typography>
      <Typography>Song details will be shown here</Typography>
    </Box>
  );
}
