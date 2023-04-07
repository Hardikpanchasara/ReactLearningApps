import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
      </Container>
      <br/>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
      </Container>
      <br/>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
      </Container>
      <br/>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
      </Container>
      <br/>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
      </Container>
      <br/>
    </React.Fragment>
  );
}