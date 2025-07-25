import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Avatar,
  Divider,
  Tooltip,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme
} from '@/MUI/MuiComponents';
import {
  SearchIcon,
  LockIcon,
  KeyIcon,
  NotificationsIcon,
  SosIcon,
  ChatIcon,
  LogoutIcon
} from '@/MUI/MuiIcons';
import { Link, useNavigate } from 'react-router-dom';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import StyledText from '@/components/common/StyledText';
import { logout } from '@/redux/slices/auth/authAction';
import { getProfile } from '@/redux/slices/profile/profileAction';
import { useDispatch, useSelector } from 'react-redux';
import { keyframes } from '@emotion/react';

function Settings() {
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();
  const { profileData } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  // Fetch profile and settings data on component mount
  // This will ensure that the profile and settings data are available when the component renders
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const settingItems = [
    {
      path: 'account',
      icon: <KeyIcon sx={{ mr: 1.1, color: 'warning.main' }} />,
      title: 'Account',
      subTitle: 'Security notification, account info'
    },
    {
      path: 'privacy',
      icon: <LockIcon sx={{ mr: 1.1, color: 'info.main' }} />,
      title: 'Privacy',
      subTitle: 'Blocked contacts, controls'
    },
    {
      path: 'chats',
      icon: <ChatIcon sx={{ mr: 1.1, color: 'success.main' }} />,
      title: 'Chats',
      subTitle: 'Theme, wallpaper, chat settings'
    },
    {
      path: 'notifications',
      icon: <NotificationsIcon sx={{ mr: 1.1, color: 'primary.main' }} />,
      title: 'Notifications',
      subTitle: 'Message notifications'
    },
    {
      path: 'help',
      icon: <SosIcon sx={{ mr: 1.1, color: 'error.main' }} />,
      title: 'Help',
      subTitle: 'Help center, contact us, privacy policy'
    }
  ];

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  // split bio
  const userBio = profileData?.shortBio.split(' ');

  // Get the first 6 words only for settings profile bio
  const shortBioPreview = userBio?.slice(0, 6).join(' ') + '....'

  // split useName.
  const userFullName = (profileData?.fullName || 'User Name').split(' ')

  // glow animation
  const glowDot = keyframes`
  0% {
    box-shadow: 0 0 0px 0px rgba(0, 255, 0, 0.51);
  }
  50% {
    box-shadow: 0 0 5px 1px rgba(0, 255, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 0px 0px rgba(0, 255, 0, 0.44);
  }
`;
  return (
    <Box component={'section'} sx={{ minWidth: '290px' }}>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect'} text={'Settings'} />
      </Stack>
      {/* Search keywords */}
      <Box component={'section'} mt={1}>
        <TextField
          size="small"
          fullWidth
          placeholder={'Search settings...'}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />
          }}
        />
      </Box>

      {/* Profile avatar */}
      <Stack
        component={Link}
        to={'/connect/profile/general-info'}
        my={4}
        flexDirection={'row'}
        gap={2}
      >
        <Stack background={'red'} alignItems={'center'} justifyContent={'center'}>
          <Tooltip title="Profile">
            <Avatar
              src={profileData?.profileImage}
              alt="user profile image"
              aria-level="user profile image"
              sx={{
                width: 100,
                height: 100,
              }}
            />
          </Tooltip>
        </Stack>

        <Stack justifyContent="center" >
          <Typography variant="body1" color={'text.primary'}>
            {userFullName[0]}{' '} {<StyledText text={userFullName?.[1]} />}{' '}({profileData?.age})
          </Typography>
          <Stack direction='row' alignItems={'center'} gap={1}>
            <Typography
              variant="body2"
              letterSpacing={1}
              color={'success.main'}
            >
              Online
            </Typography>
            <Stack
              sx={{
                background: 'green',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                boxShadow: theme.shadows[8],
                transition: 'all 0.3s ease',
                animation: `${glowDot} 1.5s infinite ease-in-out`,
              }}
            />
          </Stack>
          <Typography variant="body2" color={'text.secondary'}>
            {shortBioPreview || 'Empty Bio (Please add bio.)'}
          </Typography>
        </Stack>
      </Stack>
      <Divider />

      {/* Setting items */}

      <List>
        {settingItems.map((item, i) => (
          <ListItemButton
            key={i}
            aria-level={item.title}
            component={Link}
            to={item.path}
            sx={{
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Stack>
              <ListItemText primary={item.title} sx={{ m: 0 }} />
              <ListItemText secondary={item.subTitle} sx={{ m: 0 }} />
            </Stack>
          </ListItemButton>
        ))}
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 1,
            p: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)'
            }
          }}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ mr: 1.1, color: 'error.main' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'error.main' }} />
        </ListItemButton>
      </List>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Settings;
