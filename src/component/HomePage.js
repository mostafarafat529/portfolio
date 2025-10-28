import "./HomePage.css"
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";




const HomePage = () => {

return (
    <div className='portfolio' >

<Navbar/>
<Home/>
<About/>
<Services/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>



    </div>

)
}

export default HomePage