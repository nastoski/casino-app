import { PageData } from '@/types'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

interface SimplePageComponentProps {
    pageData: PageData;
}

const SimplePageComponent: React.FC<SimplePageComponentProps> = ({ pageData }) => {
    if (typeof pageData.htmlContent === 'string') {
        return (
            <Container sx={{ marginY: { xs: '20px', md: '40px' }, color: 'white' }}>
                <Box>
                    <Typography sx={{ textAlign: 'center', mb: 3, }} variant="h4">{pageData.title}</Typography>
                    <div dangerouslySetInnerHTML={{ __html: pageData.htmlContent }} />
                </Box>
            </Container>
        )
    }
}

export default SimplePageComponent;