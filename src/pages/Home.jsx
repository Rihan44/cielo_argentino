import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

import image1 from '../assets/images/pepas.jpg';
import image2 from '../assets/images/alfajores.jpg';
import image3 from '../assets/images/empanadas1.jpg';
import image4 from '../assets/images/facturas.jpg';
import image5 from '../assets/images/pasta_frola.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="text-center">
      <h2 className="font-bold w-full" style={{marginTop: '0.5em'}}>
        Bienvenido a Cielo Argentino
      </h2>
      <p style={{marginTop: '1.5em', marginBottom: '0.5em', width: '90%', margin: '1.5em auto'}}>
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
      <div style={{marginTop: '0.5em', paddingBottom: '0.5em'}} className='redes text-3xl flex flex-col text-center'>
        <h4>¿Donde encontrarnos?</h4>
        <p className='text-sm justify-center align-center' style={{marginTop: '1em'}}>Síguenos en nuestras redes</p>
        <div className='w-32 flex justify-between items-center' style={{marginTop: '0.5em', margin:'auto'}}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <XIcon />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="pt-[5px]">
            <AiFillTikTok />
          </a>
        </div>
        <div>
        <p className='text-sm justify-center align-center' style={{marginTop: '1em', marginBottom: '0.5em'}}>Contactanos a través de Whatsapp o Email</p>
        </div>
        <div className='w-32 flex justify-between' style={{margin:'auto', alignItems: 'center'}}>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <FaSquareWhatsapp />
          </a>
          <a href="mailto:tuemail@ejemplo.com?subject=Consulta&body=Hola%2C%20quisiera%20saber%20más%20sobre%20su%20menú." target="_blank" rel="noopener noreferrer">
            <CgMail />
          </a>
        </div>
      </div>
    </div>
  );
}
