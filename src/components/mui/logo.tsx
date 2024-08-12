import Typography from '@mui/material/Typography';

export const Logo = ({ inTopBar, size, isCenter } : any) => {
  return (
    <Typography fontSize={size ? size : null} pr={inTopBar ? 2 : 0} variant={inTopBar ? "h6" : "h4"} component="h1" sx={{ textAlign: isCenter === undefined? "center" : "left", fontFamily: 'Arial, sans-serif', fontWeight: '700', color: "custom.blue" }}>
      SocialTweet
    </Typography>
  );
};

