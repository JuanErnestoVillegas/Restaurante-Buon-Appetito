
import LandingMain from "../components/LandingMain/LandingMain";
import "./LandingPage.css";
import chef from "../assets/LandingImg/chef.jpg";
import pizza from "../assets/LandingImg/pizza.jpg";
import front from "../assets/LandingImg/front.jpg";
import spaghetti from "../assets/LandingImg/spaghetti.jpg";
import Encabezado from "../components/Encabezado/Encabezado";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Header/Navbar";

const navbarLinks = [
  { url: "#", title: "Ingresar" },
  { url: "#", title: "Contacto" },
  { url: "#", title: "Nosotros" },
];

<<<<<<< HEAD
// const LandingPage = () => {
//     return ( 
=======

const LandingPage = () => {
    return ( 
>>>>>>> 387afba713fa85bc528636a653fcb95e215cfc06
        
//         <>
//          <LandingMain/> 
//         </>
       
        
    
function LandingPage  ()  {
  return (
    
      <div className="App">
        <Navbar navbarLinks={navbarLinks} />

        <Encabezado imageSrc={chef}/>
        
        <Slider 
        imageSrc={pizza}
        title={"Explora los sabores"}
        subtitle={"dejate llevar por tus sentidos!"}flipped={true}/>
        <Slider imageSrc={front}
        title={"Como en casa"}
        subtitle={"todo en manos de nuestro chef!"}/>
        <Slider imageSrc={spaghetti}
        title={"Disfruta el momento"}
        subtitle={"crea recuerdos con las personas que quieres!"} flipped={true}/>
        
      </div>
    
  );
};

export default LandingPage;
