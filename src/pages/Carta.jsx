import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import Button from '@mui/material/Button';
import carta from '../bbdd/carta.js';

export default function Carta() {
  const dispatch = useDispatch();

  return (
    <div className="w-full" style={{paddingBottom: '1.5em'}}>
      <h2 className="text-center text-5xl font-bold" style={{marginBottom: '1em'}}>Nuestra Carta</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{margin: '0 auto', width: '90%'}}>
        {carta.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md flex flex-col items-center" style={{padding: '1em'}}>
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-full h-40 object-cover rounded-md mb-4"
              style={{objectFit:'containt'}}
            />
            <h3 className="text-xl font-semibold">{item.nombre}</h3>
            <p className="text-gray-600 text-sm text-center mb-2">{item.descripcion}</p>
            <p className="text-lg font-bold mb-4">${item.precio.toFixed(2)}</p>
            <Button variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)', marginTop: '1em'}} onClick={() => dispatch(addToCart(item))}>Añadir al carrito</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
