import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

export const Logo = ({ inTopBar, size, isCenter } : any) => {
  const location = useLocation();
  const condition = location.pathname === "/register" || location.pathname === "/login" ? true : false
  return (
    <Typography fontSize={size ? size : null} pr={inTopBar ? 2 : 0} variant={inTopBar ? "h6" : "h4"} component="h1" sx={{ textAlign: isCenter === undefined? "center" : "left", fontFamily: 'Arial, sans-serif', fontWeight: '700', color: condition? "custom.white" :  "custom.blue" }}>
      SocialTweet
    </Typography>
  );
};

