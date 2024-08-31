import { PageData } from '@/types'
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface GridPageComponentProps {
    pageData: PageData;
}

const GridPageComponent: React.FC<GridPageComponentProps> = ({ pageData }) => {

    return (
        <Container sx={{ marginY: { xs: '20px', md: '40px' }, color: 'white' }}>
            <Typography sx={{ textAlign: 'center', mb: 3, }} variant="h4">{pageData.title}</Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {pageData.items?.map((item, i) => (
                    <Card key={i} sx={{ flexBasis: { md: '50%', lg: '33%' }, boxShadow: 'none', borderRadius: 0, background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', mb: { xs: 3, lg: 0 }, mr: { md: 3 } }}>
                        <Image
                            src={item.image!}
                            width={580}
                            height={230}
                            alt="Img"
                            style={{ width: '100%', display: 'block' }}
                        />
                        <CardContent sx={{ p: 0, m: 2, color: 'white', position: 'absolute', top: 0, left: 0 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2">
                                {item.description}
                            </Typography>

                        </CardContent>
                        <Button size="small" variant="contained" sx={{ backgroundColor: '#34495E', position: 'absolute', bottom: 10, right: 10 }}>
                            <Link href={item.link!}>
                                Go to link
                            </Link>
                        </Button>
                    </Card>
                ))}
            </Box>
        </Container>
    )

}

export default GridPageComponent;