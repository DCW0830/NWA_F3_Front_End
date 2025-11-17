import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ScrollToTopButton } from './styled';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;

  return (
    <ScrollToTopButton onClick={handleScrollToTop} aria-label="Scroll to top">
      <KeyboardArrowUpIcon />
    </ScrollToTopButton>
  );
};
