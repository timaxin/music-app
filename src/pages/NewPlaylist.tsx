import { Box, Typography } from '@mui/material';

export default function NewPlaylist() {
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        New Playlist
      </Typography>
      <Typography>Enter playlist name</Typography>
    </Box>
  );
}