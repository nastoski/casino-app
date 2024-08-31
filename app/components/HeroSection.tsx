'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CasinoIcon from '@mui/icons-material/Casino';
import SportsIcon from '@mui/icons-material/Sports';

const HeroSection = () => {
    return (
        <Container sx={{ marginY: { xs: '20px', md: '40px' } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {/* First card */}
                <Card sx={{ flexBasis: '50%', boxShadow: 'none', borderRadius: 0, mr: { md: 2 }, mb: { xs: 2, md: 0 }, background: 'none', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', color: 'white', mb: 1 }}><CasinoIcon sx={{ mr: 1 }} />Casino</Typography>
                    <Image
                        src="https://picsum.photos/580/230"
                        width={580}
                        height={230}
                        alt="Casino Img"
                        style={{ width: '100%', display: 'block' }}
                    />
                    <CardContent sx={{ p: 0, mt: 2, mb: 2, color: 'white' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Leading Online Crypto Casino
                        </Typography>
                        <Typography variant="body2">
                            Leading Online Crypto Casino. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </CardContent>
                    <Button size="small" variant="contained" fullWidth sx={{ mt: 'auto' }}>
                        <Link href="/casino">
                            Go to Casino
                        </Link>
                    </Button>
                </Card>
                <Card sx={{ flexBasis: '50%', boxShadow: 'none', borderRadius: 0, background: 'none', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', color: 'white', mb: 1 }}><SportsIcon sx={{ mr: 1 }} />Sports</Typography>

                    <Image
                        src="https://picsum.photos/580/230"
                        width={580}
                        height={230}
                        alt="Sports Img"
                        style={{ width: '100%', display: 'block' }}
                    />
                    <CardContent sx={{ p: 0, mt: 2, mb: 2, color: 'white' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Sports
                        </Typography>
                        <Typography variant="body2">
                            Best Crypto Sports Betting Online. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </CardContent>
                    <Button size="small" variant="contained" fullWidth sx={{ mt: 'auto' }}>Go to Sportsbook</Button>
                </Card>
            </Box>
        </Container>
    )
}

export default HeroSection;