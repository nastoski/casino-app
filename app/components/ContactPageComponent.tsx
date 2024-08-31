import { PageData } from '@/types'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { CustomTextField } from './CustomTextField';

interface ContactPageComponentProps {
    pageData: PageData;
}

const ContactPageComponent: React.FC<ContactPageComponentProps> = ({ pageData }) => {

    return (
        <Container sx={{ marginY: { xs: '20px', md: '40px' }, color: 'white' }}>
            <Box>
                <Typography sx={{ textAlign: 'center', mb: 3, }} variant="h4">{pageData.title}</Typography>
                <form>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <CustomTextField sx={{ mr: { xs: 0, md: 2 } }} label="Name" type="text" />
                        <CustomTextField label="Email" type="email" />
                    </Box>

                    <CustomTextField sx={{ width: { xs: '100%', md: '49%' } }} label="Address" type="text" />

                    <CustomTextField label="Message" type="text" placeholder="Message" multiline rows={4} />

                    <Button type='submit' fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#34495E' }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    )
}

export default ContactPageComponent;