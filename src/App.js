import './App.css';
import Manager from './contact us';
import  { ContactUs } from './contact us';
import  { Owner } from './contact us';
import  {  Staff } from './contact us';
import { Servies } from './servies';
import { Blog } from './blog';
import { Home } from '../src/home';
import { About } from './about';

function App() {
  return (
   <>
   <Home/>
   <About/>
   <Blog/>
   <ContactUs/>
   <Owner/>
   <Manager/>
   <Staff/>
   <Servies></Servies>

    </>
  
  );
}

export default App;
