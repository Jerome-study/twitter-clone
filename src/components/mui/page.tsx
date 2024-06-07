import { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Box } from '@mui/material';
import XIcon from '@mui/icons-material/X';

export const MuiPlayground = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // You can add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={1} sx={{ height: '100vh' }}>
        <Grid item>
          <XIcon fontSize='large' />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box style={{ padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                style={{ marginBottom: '20px' }}
                value={password}
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '10px' }}
              >
                Login
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};


