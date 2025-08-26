import { Box, Typography, Button } from '@mui/material';
import MusicCard from './Card';
import type { CardProps } from './Card';
import { styled } from '@mui/material/styles';

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
});

const SectionTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: 1.2,
});

const ViewAllButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  '&:hover': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));

interface CardSectionProps {
  title: string;
  items: CardProps[];
  onCardClick?: (index: number) => void;
  onViewAll?: () => void;
}

export default function CardSection({ title, items, onCardClick, onViewAll }: CardSectionProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <SectionHeader>
        <SectionTitle variant="h2">{title}</SectionTitle>
        {onViewAll && (
          <ViewAllButton 
            onClick={onViewAll}
            disableRipple
          >
            View All
          </ViewAllButton>
        )}
      </SectionHeader>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: 'repeat(2, 1fr)', 
          sm: 'repeat(3, 1fr)', 
          md: 'repeat(4, 1fr)', 
          lg: 'repeat(5, 1fr)' 
        },
        gap: 2,
        '& > *': {
          width: '100%',
        }
      }}>
        {items.map((item, index) => (
          <MusicCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            onClick={() => onCardClick?.(index)}
          />
        ))}
      </Box>
    </Box>
  );
}