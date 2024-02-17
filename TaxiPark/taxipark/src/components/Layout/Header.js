import React, { useState } from 'react'
import { AppBar, div, Divider, Drawer, IconButton, Popover, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import Logo from "../../images/logo.png"
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    // handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    //menu drawer
    const drawer = (
        <>
            <div onClick={handleDrawerToggle} sx={{ textAlign: 'left' }} >
                <Typography
                    color={'gold'}
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1, my: 2 }}>
                    Texy Park
                </Typography>
                <Divider />

                <ul className='mobile-navigation'>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/get_taxi"}>Get_Taxi</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}>Services</NavLink>
                    </li>
                    <li>
                        <Link to={"/our_blog"}>Our_Blog</Link>
                    </li>
                    <li>
                        <Link to={"/gallery"}>Gallery</Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/contacts"}>Contacts</Link>
                    </li>
                    <li>
                        <Link to={"/pages"}>Pages</Link>
                    </li>
                </ul>
            </div>
        </>
    );


    return (
        <>
            <div>
                {/* ------------------navigation-menu---------------- */}
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>

                    {/* -----------------mobile view---------------------------- */}
                    <Toolbar>
                    <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>

                        <Typography color={'green'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            {/* <DehazeIcon /> */}
                            {/* Texy Park */}
                            <img src={Logo} alt="logo" height={40} width={200} />
                        </Typography>
                    </Toolbar>


                    {/* -------------------------------------desktop----------------------------------- */}

                    <div sx={{ display: { xs: "none", sm: "block" } }}>
                        <ul className='navigation-menu'>

                            <li>
                                <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/get_taxi'>Get_Taxi</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/services"}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/our_blog"}>Our_Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/gallery"}>Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/shop"}>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contacts"}>Contacts</NavLink>
                            </li>
                            
                       
                        </ul>
                    </div>




                    {/* ----------------------------------------- */}
                    <div component="nav">
                        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
                        
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                "& .MuiDrawer-paper": {
                                    divSizing: "border-div",
                                    width: "550px"
                                }
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </div>

                    {/* ----------------------------------------- */}
                </AppBar>
            </div>
            <div>
                <Toolbar />
            </div>
        </>
    )

}

export default Header
