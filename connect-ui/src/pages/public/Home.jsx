import React from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery } from '@/MUI/MuiComponents';
import StyledButton from '@/components/common/StyledButton';
import StyledText from '@/components/common/StyledText';
import Tagline from '@/components/public/Tagline';
import {
  BoltOutlinedIcon,
  HelpOutlineIcon,
  PersonIcon,
  PsychologyIcon,
  TuneIcon,
  AccountBoxIcon,
  InterestsIcon,
  ChatIcon,
  SmsIcon,
  ShieldIcon,
  ReportProblemIcon,
  BrushIcon,
  FilterAltIcon,
  TravelExploreIcon
} from '@/MUI/MuiIcons';

const iconMap = {
  Psychology: <PsychologyIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
  Tune: <TuneIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
  AccountBox: <AccountBoxIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
  Interests: <InterestsIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
  Chat: <ChatIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
  Sms: <SmsIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
  Shield: <ShieldIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
  ReportProblem: <ReportProblemIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
  Person: <PersonIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
  Brush: <BrushIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
  FilterAlt: <FilterAltIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
  TravelExplore: <TravelExploreIcon sx={{ fontSize: 36, color: 'secondary.main' }} />
};

import HowItWorks from '@/components/public/HowItWorks';
import WhyChooseUs from '@/components/public/WhyChooseUs';
import FAQ from '@/components/public/FAQ';
import ReusableVideo from '@/components/public/ReusableVideo';

function Home() {
  React.useEffect(() => {
    document.title = 'Connect - Random Chat Only';
  }, []);

  const features = [
    {
      label: '01',
      title: 'Smart ',
      highlightText: 'Matching',
      description:
        'Our intelligent algorithm connects you with like-minded individuals based on your interests, preferences, and location.',
      icon1: 'Psychology',
      title1: 'Intelligent Algorithm',
      icon2: 'Tune',
      title2: 'Personalized Filters'
    },
    {
      label: '02',
      title: 'Instant ',
      highlightText: 'Connection',
      description:
        'Connect face-to-face in real-time without delays. Just click and start a conversation instantly.',
      icon1: 'AccountBox',
      title1: 'One-Click Start',
      icon2: 'Interests',
      title2: 'Shared Topics'
    },
    {
      label: '03',
      title: 'Real-Time ',
      highlightText: 'Messaging',
      description:
        'Send and receive messages while on a video call or offline. Keep the conversation alive beyond the call.',
      icon1: 'Chat',
      title1: 'In-Call Chat',
      icon2: 'Sms',
      title2: 'Offline Messaging'
    },
    {
      label: '04',
      title: 'Privacy & ',
      highlightText: 'Safety',
      description:
        'Your safety matters. Manage who connects with you, report issues, and enjoy end-to-end encrypted calls.',
      icon1: 'Shield',
      title1: 'End-to-End Encryption',
      icon2: 'ReportProblem',
      title2: 'Report & Block'
    },
    {
      label: '05',
      title: 'Customizable ',
      highlightText: 'Profiles',
      description:
        'Make your profile truly yours. Add a bio, interests, and photos to express yourself and attract genuine connections.',
      icon1: 'Person',
      title1: 'Add Photos & Bio',
      icon2: 'Brush',
      title2: 'Personalize Profile'
    },
    {
      label: '06',
      title: 'Filter by ',
      highlightText: 'Preferences',
      description:
        'Easily filter who you want to connect with by age, location, language, gender, and interests for a better experience.',
      icon1: 'FilterAlt',
      title1: 'Smart Filters',
      icon2: 'TravelExplore',
      title2: 'Global or Nearby'
    }
  ];
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <React.Fragment>
      {/* ===  Hero / Slogan Section === */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isLg ? 'column' : 'row',
          gap: 2,
          flexGrow: 1,
          py: isMd ? 2 : 15
        }}
      >
        <Stack flex={1} justifyContent="center">
          <Typography variant={isMd ? 'h3' : 'h2'} fontWeight={700} sx={{ color: 'text.primary' }}>
            {<StyledText text={'Talk Freely.'} />} Connect Instantly.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            color="text.secondary"
            sx={{ mt: 3, maxWidth: 640 }}
          >
            Connect is a modern chat platform that pairs you with random users across the globe in
            seconds. Whether you're looking to make new friends, share stories, learn languages, or
            simply pass time it's your gateway to real-time human connection.
          </Typography>

          {/* === Calling tagline component === */}
          <Tagline />

          {/* CTA */}
          <Stack direction={'row'} gap={2} my={2}>
            <StyledButton text={'Start Connecting'} redirectUrl={'/register'} />
            <StyledButton text={'Learn More...'} redirectUrl={'/about'} />
          </Stack>
        </Stack>

        <ReusableVideo />
      </Box>

      {/* ===  How It Works Section === */}
      <HowItWorks />

      {/* ===  Connect-Features Section === */}
      <Box mx={'auto'} maxWidth={1200} position="relative">
        {/* Section Heading */}
        <Stack alignItems="center" justifyContent="center" my={6}>
          <Typography
            variant="h5"
            fontWeight={600}
            display="flex"
            alignItems="center"
            gap={1}
            color="text.primary"
            textTransform="uppercase"
            flexWrap="wrap"
          >
            <BoltOutlinedIcon fontSize="large" sx={{ color: 'error.main' }} />
            Connect <StyledText text="Features" />
          </Typography>

          <Typography
            variant="body2"
            maxWidth="800px"
            color="text.secondary"
            textAlign="center"
            fontSize={{ xs: 14, md: 16 }}
          >
            Discover how we bring people together. Our platform features smart matching,
            personalized profiles, real-time messaging, and privacy-first controls all designed to
            create safe and meaningful conversations.
          </Typography>
        </Stack>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMd ? '1fr' : isLg ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: 1,
            rowGap: 2,
            mx: 'auto'
          }}
        >
          {features.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'transparent',
                backdropFilter: 'blur(6px)',
                borderRadius: 1,
                cursor: 'pointer',
                p: 2,
                gap: 3,
                boxShadow: '0 0 12px rgba(0,0,0,0.05)',
                transition: '0.3s',
                borderBottom: `1px dotted ${theme.palette.text.secondary}`,
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              {/* Header */}
              <Stack direction="row" alignItems="center" gap={2}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    borderRight: `4px solid ${theme.palette.text.secondary}`,
                    bgcolor: `transparent`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    transition: 'all 0.1s ease',
                    '&:hover': {
                      borderRight: 0
                    }
                  }}
                >
                  {item.label}
                </Box>
                <Typography variant="h6" letterSpacing={1} fontWeight={600}>
                  {item.title}
                  <StyledText text={item.highlightText} />
                </Typography>
              </Stack>

              {/* Icons & Steps */}
              <Stack spacing={3}>
                {/* Step 1 */}
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(10, 86, 109, 0.09)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    boxShadow: 1
                  }}
                >
                  {iconMap[item.icon1]}
                  <Typography fontWeight={500}>{item.title1}</Typography>
                </Box>

                {/* Connector */}
                <Box display="flex" justifyContent="center">
                  <Typography color="primary">⚡</Typography>
                </Box>

                {/* Step 2 */}
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(10, 86, 109, 0.09)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    boxShadow: 1
                  }}
                >
                  {iconMap[item.icon2]}
                  <Typography fontWeight={500}>{item.title2}</Typography>
                </Box>
              </Stack>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" mt={2}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* === Why Choose Us? Section === */}
      <WhyChooseUs />

      {/* === Testimonials | What Users Are Saying Section === */}
      {/* < Box >
        <Typography
          variant="h5"
          fontWeight={600}
          textTransform={'uppercase'}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <ChatBubbleOutlineIcon fontSize='medium' />
          What Users Are {' '}{<StyledText text={'Saying'} />}
        </Typography>
      </Box > */}

      {/* === Frequently Asked Questions FAQ Section === */}
      <Box
        mt={6}
        sx={{
          maxWidth: 1000,
          mx: 'auto'
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          textTransform={'uppercase'}
          display="flex"
          alignItems="center"
          justifyContent={'center'}
          gap={1}
          gutterBottom
        >
          <HelpOutlineIcon fontSize="medium" sx={{ color: 'success.main' }} />
          {<StyledText text={'FAQ'} />}
        </Typography>
        <Typography
          variant="body2"
          maxWidth="800px"
          color="text.secondary"
          textAlign="center"
          fontSize={{ xs: 14, md: 16 }}
          mb={3}
        >
          Got questions? We've answered the most common things you might wonder about from how
          Connect works to how we keep your experience safe and smooth.
        </Typography>

        <FAQ />
      </Box>
    </React.Fragment>
  );
}

export default Home;
