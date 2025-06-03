import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.png';
import { NavLink   } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavBar() {

  const cartNumberItems = useSelector(((state) => state.cart.items));

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1.5em'}}>
      <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* Logo + Navegación */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to='/'>
            <img src={logo} className='logo' style={{ width: '80px', height: '80px', marginRight: '1rem', objectFit: 'contain' }} />
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

          {/* Ícono de carrito */}
         { cartNumberItems.length !== 0 && <IconButton className='cart' edge="end" sx={{marginRight: '0.3em', color: 'var(--color-marron-claro)'}}>
             <div className='cart__number-items'>{cartNumberItems.length}</div>
            <ShoppingCartIcon />
          </IconButton>}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
