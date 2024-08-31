import { PageData } from '@/types'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material'
import React from 'react'

interface AccordionPageComponentProps {
    pageData: PageData;
}

const AccordionPageComponent: React.FC<AccordionPageComponentProps> = ({ pageData }) => {
    return (
        <Container sx={{ marginY: { xs: '20px', md: '40px' } }}>
            <Box>
                <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h4">{pageData.title}</Typography>
                {pageData.items?.map((item, i) => (
                    <Accordion key={i} sx={{ mb: 2 }}>
                        <AccordionSummary>
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    )
}

export default AccordionPageComponent;