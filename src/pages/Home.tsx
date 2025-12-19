// src/pages/Home.tsx
import { HeroSection, Overlay, HeroContent, HeroTitle, HeroText, HeroButtons, HeroButton } from '../components/styled';

export const Home = () => {
  return (
    <>
      <HeroSection
        sx={{
          backgroundImage: 'url(https://f3nwa.com/wp-content/uploads/2019/02/4698677092_3c93e7c4c2_b.jpg)',
        }}
      >
        <Overlay />
        <HeroContent>
          <HeroTitle>F3 NorthWest Arkansas</HeroTitle>
          <HeroText>
            F3 is a national network of free, peer-led workouts for men.
            <br />
            We plant, grow and serve these groups to invigorate male community leadership.
          </HeroText>
          <HeroButtons>
            <HeroButton href="/about">Learn More</HeroButton>
            <HeroButton href="/locations">Find Workout</HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
    </>
  );
};
