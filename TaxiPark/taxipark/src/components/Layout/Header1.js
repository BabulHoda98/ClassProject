import React, { useState } from 'react'
import { AppBar, Box, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import '../../styles/HeaderStyles.css'
import { NavLink } from 'react-router-dom'
import Logo from "../../images/logo.png"
import MenuIcon from '@mui/icons-material/Menu';

const Header1 = () => {

    const [mobileOpen, setMobileOpen] = useState(false)
    // handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)// setMobileOpen((prevState) => !prevState);

        //menu drawer
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
                            <NavLink to={"/get_taxi"}>Get Taxi</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/our_blog"}>Our Blog</NavLink>
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
                        <li>
                            <NavLink to={"/pages"}>Pages</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        );
    }


    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <Typography color={"gold"} variant='h6' sx={{ flexGrow: 1 }}>
                            {/* TaxiPark */}
                            <img src={Logo} alt="logo" height={40} width={200} />
                        </Typography>



                        <Box sx={{ display: { xs: "none", sm: "block" } }}>

                                <ul className='navigation-menu'>
                                    <div class="dropdown">
                                    <li>
                                        <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                                        <li class="dropdown-content">
                                            <NavLink to='/gettaxi'>Homepage1</NavLink>
                                            <NavLink to={"/contacts"}>Homepage2</NavLink>
                                            <NavLink activeClassName="active" to={"/"}>Homepage3</NavLink>
                                        </li>
                                    </li>
                                    </div>
                                    <li>
                                        <NavLink to='/gettaxi'>Get Taxi</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/services"}>Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/ourblog"}>Our Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/gallery"}>Gallery</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/shop"}>Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/contacts"}>Contacts</NavLink>
                                        {/* <i class="fa-solid fa-cart-shopping"></i> */}
                                    </li>
                                    
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </ul>
                            {/* </div> */}
                        </Box>



                        <IconButton color='inherit' aria-live='open drawer' edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>


                </AppBar>
            </Box >
        </>
    )

}
export default Header1
