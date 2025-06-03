import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import image1 from '../assets/images/pepas.jpg';
import image2 from '../assets/images/alfajores.jpg';
import image3 from '../assets/images/empanadas1.jpg';
import image4 from '../assets/images/facturas.jpg';
import image5 from '../assets/images/pasta_frola.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const images = [image1, image2, image3, image4, image5];


export default function Home() {
  return (
    <div className="text-center">
      <h2 className="font-bold w-full" style={{marginTop: '0.5em'}}>
        Bienvenido a Cielo Argentino
      </h2>
      <p style={{marginTop: '2em', width: '90%', margin: '2em auto'}}>
        En <i>Cielo Argentino</i> traemos a España el auténtico sabor de nuestra tierra. Elaboramos comida argentina casera con ingredientes de calidad y recetas tradicionales: empanadas, milanesas, alfajores, facturas, dulce de leche y mucho más.
        Ya sea que extrañes los sabores de casa o quieras descubrir lo mejor de nuestra cocina, aquí encontrarás un pedacito de Argentina, hecho con amor.
      </p>
      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={false}
          loop={true}
          speed={1000}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
            {/* <div className="w-full">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-[300px] object-cover shadow-lg"
              />
            </div> */}
            <div className="relative h-[300px] w-full overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white/80 via-white/20 to-transparent pointer-events-none z-10" />

              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white/80 via-white/20 to-transparent pointer-events-none z-10" />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <h4>¿Donde encontrarnos?</h4>
      </div>
    </div>
  );
}
