import { Box, CircularProgress, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const Card = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  cursor: 'pointer',
  '&:hover .card-image': {
    transform: 'scale(1.05)',
  },
});

const ImageWrapper = styled(Box)({
  position: 'relative',
  borderRadius: 8,
  overflow: 'hidden',
  aspectRatio: '1',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
});

const TextWrapper = styled(Box)({
  minHeight: 40,
  '& .title': {
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.4,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  '& .subtitle': {
    color: 'text.secondary',
    fontSize: '0.8125rem',
    lineHeight: 1.4,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
});

export interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function MusicCard({ image, title, subtitle, onClick }: CardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImgSrc(image);
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true); // If image fails to load, still hide the loader
    };
  }, [image]);

  return (
    <Card onClick={onClick}>
      <ImageWrapper className="card-image">
        {!imageLoaded ? (
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{ bgcolor: 'grey.900' }}
            />
            <CircularProgress 
              size={40}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-20px',
                marginLeft: '-20px',
                color: 'primary.main',
              }}
            />
          </Box>
        ) : imgSrc ? (
          <img 
            src={imgSrc} 
            alt={title} 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover' 
            }} 
            onError={() => setImageLoaded(true)}
          />
        ) : null}
      </ImageWrapper>
      <TextWrapper>
        <Typography className="title" variant="subtitle1">
          {title}
        </Typography>
        <Typography className="subtitle" variant="body2">
          {subtitle}
        </Typography>
      </TextWrapper>
    </Card>
  );
}