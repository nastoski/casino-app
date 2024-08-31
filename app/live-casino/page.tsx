import React from 'react';
import Footer from '../components/Footer';
import { Box, Typography, Container } from '@mui/material';


export default function LiveCasinoPage() {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', color: 'white', justifyContent: 'center', height: '100vh' }}>
            <Typography sx={{ textAlign: 'center' }} variant='h4' component='h2'>Live Casino page coming soon</Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px 0',
                }}
            >
                <Box sx={{ flex: 1, height: '1px', backgroundColor: 'white' }} />
                <Typography sx={{ padding: '0 8px', color: 'white' }}>Stay Tuned, we are working on it</Typography>
                <Box sx={{ flex: 1, height: '1px', backgroundColor: 'white' }} />
            </Box>
        </Container>
    );
}
