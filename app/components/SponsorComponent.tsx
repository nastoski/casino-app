'use client';

import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';

const SponsorComponent = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, color: 'white', backgroundColor: "#34495E", borderRadius: '10px', p: '20px', alignItems: { xs: 'self-start', md: 'center' } }}>
                <Box sx={{ flexBasis: '33%', mr: { md: 2 }, mb: { xs: 2, md: 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ color: 'white', backgroundColor: '#34495E' }}
                    >
                        Become a sponsor
                    </Button>
                </Box>

                <Box sx={{ flexBasis: '33%', mr: { md: 2 }, mb: { xs: 2, md: 0 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" component="h2">
                        WHITELABEL APP
                    </Typography>
                </Box>

                <Box sx={{ flexBasis: '33%', display: 'flex', justifyContent: { md: 'end' } }}>
                    <Image
                        src="https://picsum.photos/200/100"
                        width={200}
                        height={100}
                        alt="Progress Section Img"
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default SponsorComponent