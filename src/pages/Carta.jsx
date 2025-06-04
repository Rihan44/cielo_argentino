import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import Button from '@mui/material/Button';
import carta from '../bbdd/carta.js';

export default function Carta() {
  const dispatch = useDispatch();

  // Separar los platos por categoría
  const salados = carta.filter(item => item.categoria === "salado");
  const dulces = carta.filter(item => item.categoria === "dulce");

  const renderGrupo = (titulo, items) => (
    <div className="flex flex-col items-center">
      <h3 className="text-center text-4xl font-bold" style={{marginBottom: '1em'}}>{titulo}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%]">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md flex flex-col items-center" style={{marginBottom: '0.5em'}}>
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-full h-50 object-cover"
              style={{objectFit:'containt', borderRadius: '10px 10px 0 0'}}
            />
            <div className="flex flex-col items-center" style={{padding: '1em'}}>
              <h3 className="text-xl font-semibold">{item.nombre}</h3>
              <p className="text-gray-600 text-sm text-center">{item.descripcion}</p>
              <p className="text-lg font-bold">${item.precio.toFixed(2)}</p>
              {
               item.type === 2 ? <div className="flex justify-between">
                  <Button sx={{width: '45%'}} variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)', marginTop: '1em'}} onClick={() => dispatch(addToCart(item))}>Añadir media docena</Button>
                  <Button sx={{width: '45%'}} variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)', marginTop: '1em'}} onClick={() => dispatch(addToCart(item))}>Añadir docena</Button>
                </div>
                :<div>
                  <Button variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)', marginTop: '1em'}} onClick={() => dispatch(addToCart(item))}>Añadir al carrito</Button>
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full" style={{paddingBottom: '2.5em'}}>
      <h2 className="text-center text-5xl font-bold" style={{marginBottom: '0.5em'}}>Nuestra Carta</h2>
      {renderGrupo("Salado", salados)}
      {renderGrupo("Dulce", dulces)}
    </div>
  );
}
