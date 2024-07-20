import Typography from '@mui/material/Typography';

export const Logo = ({ inTopBar, size } : any) => {
  return (
    <Typography fontSize={size ? size : null} pr={inTopBar ? 2 : 0} variant={inTopBar ? "h6" : "h4"} component="h1" sx={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: inTopBar ? '#fff' : '#1DA1F2' }}>
      SocialTweet
    </Typography>
  );
};

