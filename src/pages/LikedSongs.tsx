import { Box, Typography } from '@mui/material';

export default function LikedSongs() {
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Liked Songs
      </Typography>
      <Typography>Here are your liked songs</Typography>
    </Box>
  );
}