
import flag from '../assets/images/flag.png';

export default function Footer(){
   return (
      <footer className='footer'>
         <p className='text-center' style={{marginBottom: '1em'}}>
            De momento solo hacemos envíos y repartos a Puertollano, Ciudad Real y alrededores. 
         </p>
         <img src={flag} style={{margin:'auto'}}/>
      </footer>
   )
}