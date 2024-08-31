"use client";

import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    CssBaseline,
    List,
    ListItemIcon,
    ListItemText,
    Box,
    ListItem,
    Modal,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CasinoIcon from '@mui/icons-material/Casino';
import SportsIcon from '@mui/icons-material/Sports';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from 'next/link';
import { CustomTextField } from './CustomTextField';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentForm, setCurrentForm] = useState<'login' | 'register' | 'forgotPassword'>('login');

    const drawerWidth = open ? 240 : 70;

    useEffect(() => {
        if (open) {
            document.body.style.paddingLeft = `${drawerWidth}px`;
        } else {
            document.body.style.paddingLeft = '70px';
        }

        return () => {
            document.body.style.paddingLeft = '70px';
        };
    }, [open, drawerWidth]);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleOpenModal = (formType: 'login' | 'register' | 'forgotPassword') => {
        setCurrentForm(formType);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{
                    zIndex: 50,
                    backgroundColor: '#2C3E50',
                }}
            >
                <Toolbar>

                    <div style={{ marginLeft: 'auto' }}>
                        <Button
                            color="primary"
                            variant="contained"
                            sx={{ mr: 2 }}
                            onClick={() => handleOpenModal('login')}
                        >
                            Login
                        </Button>
                        <Button
                            color="inherit"
                            variant="contained"
                            onClick={() => handleOpenModal('register')}
                        >
                            Register
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: drawerWidth,
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 51,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        position: 'relative',
                        height: '100vh',
                        transition: 'width 0.3s ease',
                        overflowX: 'hidden',
                        backgroundColor: '#34495E',
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', top: 15, left: 25, zIndex: 51 }}>
                    <IconButton
                        sx={{ color: 'white' }}
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ color: 'white', display: open ? 'block' : 'none' }}>
                        <Link href="/">
                            Whitelabel App 2
                        </Link>
                    </Typography>
                </Box>

                <Toolbar />

                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItem sx={{ width: '100%', padding: 0 }}>
                        <Link href="/grid" style={{ display: 'flex', alignItems: 'center', padding: '10px 22px' }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                <LocalOfferIcon style={{ color: '#ECF0F1' }} />
                            </ListItemIcon>
                            <ListItemText primary="Promotions" sx={{ color: '#ECF0F1', opacity: open ? 1 : 0 }} />
                        </Link>
                    </ListItem>

                    <ListItem sx={{ width: '100%', padding: 0 }}>
                        <Link href="/casino" style={{ display: 'flex', alignItems: 'center', padding: '10px 22px' }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                <CasinoIcon style={{ color: '#ECF0F1' }} />
                            </ListItemIcon>
                            <ListItemText primary="Casino" sx={{ color: '#ECF0F1', opacity: open ? 1 : 0 }} />
                        </Link>
                    </ListItem>

                    <ListItem sx={{ width: '100%', padding: 0 }}>
                        <Link href="/live-casino" style={{ display: 'flex', alignItems: 'center', padding: '10px 22px' }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                <SportsIcon style={{ color: '#ECF0F1' }} />
                            </ListItemIcon>
                            <ListItemText primary="Live Casino" sx={{ color: '#ECF0F1', opacity: open ? 1 : 0 }} />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <Toolbar />
                {children}
            </Box>
            <Footer />
            {/* modal for login/reg/forgot pw */}
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#2C3E50",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        maxWidth: 400,
                        width: '100%',
                        color: "#ffffff"
                    }}
                >
                    {currentForm === 'login' && (
                        <>
                            <Typography variant="h6" component="h2">
                                Sign In
                            </Typography>
                            <CustomTextField label="Email" type="email" />
                            <CustomTextField label="Password" type="password" />
                            <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#34495E' }}>
                                Login
                            </Button>
                            <Button fullWidth sx={{ mt: 2, color: 'white' }} onClick={() => handleOpenModal('forgotPassword')}>
                                Forgot Password?
                            </Button>
                            <Typography sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Don't have an account?
                                <Button sx={{ mt: 0, ml: 1, color: 'white', textTransform: 'none' }} onClick={() => handleOpenModal('register')}>
                                    Register
                                </Button>
                            </Typography>
                        </>
                    )}

                    {currentForm === 'register' && (
                        <>
                            <Typography variant="h6" component="h2">
                                Register
                            </Typography>

                            <CustomTextField label="First Name" type="text" />
                            <CustomTextField label="Last Name" type="text" />
                            <CustomTextField label="Email" type="email" />
                            <CustomTextField label="Password" type="password" />
                            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2, color: 'white', textTransform: 'none', backgroundColor: '#34495E' }}>
                                Register
                            </Button>
                            <Typography sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Already have account?
                                <Button sx={{ mt: 0, ml: 1, color: 'white', textTransform: 'none' }} onClick={() => handleOpenModal('register')}>
                                    Sign in
                                </Button>
                            </Typography>
                        </>
                    )}

                    {currentForm === 'forgotPassword' && (
                        <>
                            <Typography variant="h6" component="h2">
                                Reset Password
                            </Typography>
                            <CustomTextField label="Email" type="email" />

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, color: 'white', textTransform: 'none', backgroundColor: '#34495E' }}
                            >
                                Reset Password
                            </Button>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '20px 0',
                                }}
                            >
                                <Box sx={{ flex: 1, height: '2px', backgroundColor: 'white' }} />
                                <Typography sx={{ padding: '0 8px', color: 'white' }}>or</Typography>
                                <Box sx={{ flex: 1, height: '2px', backgroundColor: 'white' }} />
                            </Box>

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ color: 'white', textTransform: 'none', backgroundColor: '#34495E' }}
                                onClick={() => handleOpenModal('login')}
                            >
                                Back to Login
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
