import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const NavList = [
    {
        name: "Home",
        path: "/",
        icon: <HomeIcon />
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <AccountCircleIcon />
    }
]

export const BottomNavlist = [
    {
      name: "Home",
      icon: <HomeIcon />
    },
    {
      name: "Explore",
      icon: <SearchIcon />
    },
    {
      name: "Notifications",
      icon: <NotificationsIcon />
    },
    {
      name: "Messages",
      icon: <MailIcon />
    }
  ];