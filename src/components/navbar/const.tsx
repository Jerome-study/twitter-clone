import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { styles } from './styles';

export const NavList = [
  {
    name: "Home",
    path: "/",
    icon: <HomeOutlinedIcon sx={styles.listIconStyle} />,
    isLargeView : true
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <Person2OutlinedIcon sx={styles.listIconStyle} />,
    isMobileView: true,
    isLargeView : true
  },
  {
    name: "Notifications",
    icon: <NotificationsNoneOutlinedIcon sx={styles.listIconStyle} />,
    isLargeView : true,
  },
  {
    name: "Messages",
    icon: <EmailOutlinedIcon sx={styles.listIconStyle}  />,
    isLargeView : true,
  },
  {
    name: "Bookmarks",
    icon: <BookmarkBorderOutlinedIcon sx={styles.listIconStyle} />,
    isMobileView: true,
    isLargeView : true,
  },
  {
    name: "Settings",
    icon: <SettingsOutlinedIcon sx={styles.listIconStyle} />,
    isMobileView: true,
    isLargeView : true,
    isCollapse: true
  },
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