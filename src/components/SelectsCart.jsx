import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function SelectsCart() {
   // TODO PASARLE PROPS COMO LOS SET ETC
   return (
      items.map((item) => {
         return (
      <div key={item.id} className="bg-white rounded-xl shadow-md flex flex-col items-center" style={{marginBottom: '0.5em'}}>
      {/* TODO ESTO METERLO EN UN COMPONENTE  PARA INCLUIR LAS EMPANADAS TAMBIÉN*/}
         {
            pastaImage && pastaImage !== '' 
            ? <img
               src={pastaImage}
               alt={pastaImage}
               className="w-full h-50 object-cover"
               style={{objectFit:'containt', borderRadius: '10px 10px 0 0'}}
            />
         : <div className="w-full max-w-4xl mx-auto">
               <Swiper
               modules={[Autoplay, Pagination]}
               spaceBetween={0}
               slidesPerView={1}
               autoplay={{ delay: 3000, disableOnInteraction: false }}
               pagination={true}
               loop={true}
               speed={1000}
               >
               {item.imagen.map((src, index) => (
                  <SwiperSlide key={index}>
                  <div className="relative h-50 w-full overflow-hidden shadow-lg">
                     <img
                     src={src}
                     alt={`Slide €{index}`}
                     className="w-full h-full object-cover"
                     />
                  </div>
                  </SwiperSlide>
               ))}
               </Swiper>
            </div>
         }
         <div className="flex flex-col items-center" style={{padding: '1em'}}>
         <h3 className="text-xl font-semibold" style={{margin: '0 0 0.5em 0'}}>{item.nombre}</h3>
         <p className="text-gray-600 text-sm text-center">
            {/* {item.descripcion} */}
            TODO HACER QUE LA DESCRIPCIÓN CAMBIE SEGÚN LA PASTA Y LA SALSA
         </p>
         <div style={{marginTop: '1em', width: '100%', textAlign: 'center'}}>
            <FormControl sx={{ m: 1, width: '90%' }}>
               <InputLabel id="demo-controlled-open-select-label">Tipo de pasta</InputLabel>
               <Select
               labelId="demo-controlled-open-select-label"
               id="demo-controlled-open-select"
               open={openPasta}
               onClose={handleClosePasta}
               onOpen={handleOpenPasta}
               value={pasta}
               label="Tipo de pasta"
               onChange={handleChangePasta}
               >
               <MenuItem value="">
                  <em>Ninguna</em>
               </MenuItem>
               {
                  item.multiple_select.map((data) => (
                     <MenuItem value={data}>{data.nombre}</MenuItem>
                  ))
               }
               </Select>
            </FormControl>
         </div>
         {
            pasta !== '' &&
            <div style={{marginTop: '1em', width: '100%', textAlign: 'center'}}>
               <FormControl sx={{ m: 1, width: '90%' }}>
               <InputLabel id="demo-controlled-open-select-label">Tipo de salsa</InputLabel>
               <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openSalsa}
                  onClose={handleCloseSalsa}
                  onOpen={handleOpenSalsa}
                  value={salsa}
                  label="Tipo de salsa"
                  onChange={handleChangeSalsa}
               >
                  <MenuItem value="">
                     <em>Sin salsa</em>
                  </MenuItem>
                  {
                     item.salsa_type.map((data) => (
                     <MenuItem value={data}>{data.nombre}</MenuItem>
                     ))
                  }
               </Select>
               </FormControl>
               <div style={{marginTop: '1em'}}>
               <p className="text-lg font-bold">{pasta.precio} <i className="text-base">{salsa.precio && '+' + ' ' + salsa.precio}</i> €</p>
               </div>
            </div>
         }
         <div>
            <Button disabled={pasta === ''} variant="contained" style={{backgroundColor: 'var(--color-marron-oscuro)', marginTop: '1em'}} onClick={() => dispatch(addToCart({
               id: salsa.nombre ? item.id  + pasta.nombre + salsa.nombre : item.id + pasta.nombre,
               nombre: salsa.nombre ? `Pasta ${pasta.nombre} con ${salsa.nombre} ` : 'Pasta ' + pasta.nombre,
               precio: salsa.precio ? pasta.precio + salsa.precio : pasta.precio
            }))}>Añadir al carrito</Button>
         </div>
         </div>
      </div>
      )
   )
}