'use client';

import { Box, Container, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ color: 'white', backgroundColor: '#2C3E50', paddingY: { xs: '20px', md: '40px', mr: -2 } }}>
            <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'nowrap' }}>
                <Box sx={{ flexBasis: '40%', mr: { xs: 0, md: 2 } }}>
                    <Typography variant="h6" component="h2" sx={{ mb: 2 }}>About Us</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt repudiandae eum amet illum eveniet</Typography>
                </Box>

                <Box sx={{ flexBasis: '30%', mr: { xs: 0, md: 2 } }}>
                    <Typography variant="h6" component="h2" sx={{ mb: 1 }}>Dynmic Pages</Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItem sx={{ p: 0, mb: 0.5 }}>
                            <Link href="/contact">Contact Us</Link>
                        </ListItem>
                        <ListItem sx={{ p: 0, mb: 0.5 }}>
                            <Link href="/external-url">External Page</Link>
                        </ListItem>
                        <ListItem sx={{ p: 0, mb: 0.5 }}>
                            <Link href="/simple">Simple</Link>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Link href="/accordion">FAQ</Link>
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ flexBasis: '30%', mr: { xs: 0, md: 2 } }}>
                    <Typography variant="h6" component="h2" sx={{ mb: 1 }}>Community</Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItem sx={{ p: 0, mb: 0.5 }}>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Blog</a>
                        </ListItem>
                        <ListItem sx={{ p: 0, mb: 0.5 }}>
                            <a href="https://dev.to" target="_blank" rel="noopener noreferrer">Forum</a>
                        </ListItem>
                        <ListItem sx={{ p: 0, mb: 0.5 }}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >Facebook</a>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://x.com">Twitter</a>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com">Instagram</a>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">Youtubr</a>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <a target="_blank" rel="noopener noreferrer" href="#">Shop</a>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer