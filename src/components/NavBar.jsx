import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.png';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';

import { Link, NavLink   } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function NavBar() {
 const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cartItems = useSelector(((state) => state.cart.items));

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1.5em'}}>
      <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to='/'>
            <img src={logo} className='logo' style={{ width: '80px', height: '80px', marginRight: '1.8rem', objectFit: 'contain' }} />
          </NavLink>
            <Box sx={{ display: 'flex', marginLeft: '1.9em', justifyContent:'space-between', width: '100%' }}>
              <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : 'isNotActive'
              } to='/carta'>
              Carta
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : 'isNotActive'
              } to='/ofertas'>
              Ofertas
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : 'isNotActive'
              } to='/contacto'>
              Contacto
              </NavLink>
            </Box>
          </Box>
        
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton 
                className='cart' 
                edge="end" 
                sx={{marginRight: '0.3em', color: 'var(--color-marron-claro)'}}
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                { cartItems.length !== 0 &&  <div className='cart__number-items'>{cartItems.length}</div>}
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                width: '500px',
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <div className='flex justify-center text-3xl w-full' style={{paddingBottom: '1em'}}>
              Productos
            </div>
            <Divider />
            {/* TODO AQUI PONER UN NO HAY PRODUCTOS AÚN */}
            {/* TODO CUANDO ESTE EN LA RUTA DEL CARRITO QUE NO SE PUEDA HACER CLICK */}
            <MenuItem>
              <ul>
                <li style={{listStyle: 'circle', marginLeft: '1em'}}>Prueba - 1 +</li>
              </ul>
            </MenuItem>
            <Divider />
            <MenuItem sx={{display: 'flex', justifyContent: 'end', fontWeight: 'bold'}}>
              Total: 0
            </MenuItem>
            <Link to='/carrito' onClick={handleClose} style={{padding: '0 1em 0 1em'}}>
              <Button variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)'}}>Ver carrito</Button>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
