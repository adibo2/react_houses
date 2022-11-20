import './App.scss';
import "./base.scss"
import Sidebar from './../src/sidebar/Sidebar';
import Header from './header/Header';
import Vendor from './Revendors/Vendor';
import Features from './Features/Features';
import Story from './Story/Story';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
import house1 from './img/house-1.jpeg';
import house2 from './img/house-2.jpeg';
import house3 from './img/house-3.jpeg';
import house4 from './img/house-4.jpeg';
import house5 from './img/house-5.jpeg';
import house6 from './img/house-6.jpeg';
function App() {
  const data = [
    {
      id: 'e1',
      ville: 'Agadir',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 'e2',
      ville: 'Agadir',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 'e3',
      ville: 'Agadir',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 'e4',
      ville: 'Fes',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 'e5',
      ville: 'TETOUAN',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. kdoofisoçfu  sfiousfçus fsuf sfusyfsy'
    },
    {
      id: 'e6',
      ville: 'CASABLANCA',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.dckkdqskdoifvkl riogi guiguigu  ioguioguig'
    },
  ];
  const home = [
    {
      id: 'e1',
      img: house1,
    },
    {
      id: 'e2',
      img: house2,
    },
    {
      id: 'e3',
      img: house3,
    },
    {
      id: 'e4',
      img: house4,
    },
    {
      id: 'e5',
      img: house5,
    },
    {
      id: 'e6',
      img: house6,
    }
  ]
  return (
    
      <div className='container'>
        <Sidebar></Sidebar>
        <Header></Header>
        <Vendor></Vendor>
        <Features donnees={data}></Features>
        <Story></Story>
        <Home maisons={home}></Home>
        <Gallery></Gallery>
        <Footer></Footer>

      </div>

    
  );
}

export default App;
