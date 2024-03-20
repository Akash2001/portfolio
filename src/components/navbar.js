import { AppBar, Toolbar, Drawer, IconButton } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

const drawerWidth = 240;

export const Navbar = (props) => {
    const { window, scrollY } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <div className='app-bar'>
            <AppBar style={{ background: scrollY > 100 ? '#000' : '' }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <IoMenu />
                    </IconButton>
                    <div>Akash Gadhave</div>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                </Drawer>
            </nav>
        </div>
    )
}