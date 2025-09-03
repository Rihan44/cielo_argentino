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
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

import { Link, NavLink, useLocation   } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart, minusItem } from "../store/cart";

export default function NavBar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cartItems = useSelector(((state) => state.cart.items));
  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.precio, 0);

  useEffect(() => {
    console.log(location)
  }, [location])

  // TODO RECOGER LA URL Y SI ES /CARRITO NO MOSTRAR EL CARRITO

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1.5em'}}>
      <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to='/'>
            <img src={logo} className='logo' style={{ width: '80px', height: '80px', marginRight: '2rem', objectFit: 'contain' }} />
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
              } to='/mi_perfil'>
              Contacto
              </NavLink>
            </Box>
          </Box>
        
          {location.pathname !== '/carrito' && <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
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
          </Box>}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
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
            <div className='flex justify-center text-3xl w-full' style={{paddingBottom: '0.1em'}}>
              Productos
            </div>
            <Divider />
            {
              cartItems.length === 0 ? <p style={{padding: '1em'}}>No hay productos aún...</p>
              : <MenuItem>
                  <ul style={{width: '100%'}}>
                    {cartItems.map((item) => (
                      <li key={item.id + item.quantity}>
                        <div className="flex flex-col" style={{ marginTop: '0.8em' }}>
                          <div
                            className="grid grid-cols-[1fr_auto] w-full gap-2"
                            style={{ alignItems: 'start', margin:'0.4em 0 0.4em 0'}}
                          >
                            <p
                              style={{
                                textDecoration: 'underline',
                                fontWeight: 'bold',
                                wordBreak: 'break-word',
                                whiteSpace: 'normal',
                              }}
                            >
                              {item.nombre}
                            </p>
                            <p style={{ marginLeft: '1em' }}>{item.precio * item.quantity}€</p>
                          </div>
                          <div
                            className="flex"
                            style={{
                              alignSelf: 'end',
                              alignItems: 'center',
                              marginTop: '0.5em',
                              backgroundColor: 'var(--color-dorado)',
                              borderRadius: '5px',
                              padding: '2px 8px',
                            }}
                          >
                            <FiMinus
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(minusItem(item));
                              }}
                              color="var(--color-marron-oscuro)"
                            />
                            <p style={{ margin: '0 0.5em 0 0.5em' }}>{item.quantity}</p>
                            <IoMdAdd
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(addToCart(item));
                              }}
                              color="var(--color-marron-oscuro)"
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </MenuItem>
            }
            <Divider />
            <div className='flex' style={{flexDirection: 'column', wordBreak: 'break-word',fontWeight: 'bold', padding: '0.8em 1em 0.5em 1em'}}>
              <p style={{fontSize: '0.7em', fontStyle: 'italic'}}>*Los envíos a Ciudad Real llevan un cargo de  <strong style={{fontSize: '1em'}}> 5 EUROS</strong>, perdón por las molestias.</p>
              <p style={{marginTop: '1em', alignSelf: 'end'}}>Total: {totalCartPrice} €</p>  
            </div>
            <div className='w-full text-center flex' style={{padding: '0 0.5em 0.5em 0.5em', justifyContent: 'end'}}>
              <Link to='/carrito' onClick={handleClose}>
                <Button variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)'}}>Ver carrito</Button>
              </Link>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
