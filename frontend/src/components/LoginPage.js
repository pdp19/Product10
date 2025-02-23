
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link, Box } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Please enter your username/email';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Please enter your password';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Perform login action (no backend functionality required)
      console.log('Logging in...');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username/Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Link href="#" variant="body2" sx={{ mt: 2 }}>
          Forgot Password?
        </Link>
      </Box>
    </Container>
  );
}

export default LoginPage;
