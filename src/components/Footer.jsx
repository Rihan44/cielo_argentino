
import flag from '../assets/flag.png';

export default function Footer(){
   return (
      <footer className='footer'>
         <p className='text-center' style={{marginBottom: '1em'}}>
            De momento solo hacemos envíos y repartos a Puertollano, Ciudad Real y alrededores <span style={{fontSize: '0.7em', fontStyle: 'italic'}}>(los envíos a Ciudad Real llevan un cargo de <strong style={{fontSize: '1.2em'}}>5 EUROS</strong>, perdón por las molestias)</span>. 
         </p>
         <img src={flag} style={{margin:'auto'}}/>
      </footer>
   )
}