import { Box, Typography } from '@mui/material';

export default function Library() {
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Library
      </Typography>
      <Typography>Your saved music and playlists will appear here</Typography>
    </Box>
  );
}
