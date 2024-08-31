'use client';

import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

const ProgressComponent = () => {
    return (
        <Box sx={{ mb: 2, color: 'white', backgroundColor: "#34495E" }}>
            <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ flexBasis: '50%', mr: { md: 2 }, mb: { xs: 2, md: 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>Welcome back, User</Typography>
                    <Box sx={{ mb: 1, display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                        <span>Your VIP Progress</span>
                        <span>56.00%</span>
                    </Box>
                    <Box sx={{ width: '100%', bgcolor: '#ccc', borderRadius: 1, height: 10 }}>
                        <Box sx={{ width: '56%', bgcolor: 'green', height: '100%', borderRadius: 1 }} />
                    </Box>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', color: 'gray' }}><StarBorderIcon />None</Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', color: 'yellow' }}><StarIcon />Bronze</Typography>
                    </Box>
                </Box>

                <Box sx={{ flexBasis: '50%', display: 'flex', justifyContent: { md: 'end' } }}>
                    <Image
                        src="https://picsum.photos/200/200"
                        width={200}
                        height={200}
                        alt="Progress Section Img"
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default ProgressComponent