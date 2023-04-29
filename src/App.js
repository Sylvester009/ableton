import Photo1 from "./Photo-1.jpg";
import Photo2 from "./Photo-2.jpg";
import photo4 from "./photo-4.jpg";
import photo5 from "./photo-5.jpg";
import photo3 from "./photo-3.jpg";
import photo9 from "./photo-9.jpg";
import photo6 from "./photo-6-a.jpg";
import photo7 from "./photo-7.jpg";
import photo8 from "./photo-8.jpg";
import About1 from "./components/About1";
import About2 from "./components/About2";
import About3 from "./components/About3";
import About4 from "./components/About4";
import About5 from "./components/About5";
import About6 from "./components/About6";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <About1 />
      <div className="collage">
        <div className="collage-background"></div>
        <img src={Photo1} className="photo1" />
        <img src={Photo2} className="photo2" />
      </div>
      <About2 />
      <About3 />
      <div class="collage2">
        <div class="collage-background2"></div>
        <img src={photo4} className="photo4" />
        <img src={photo3} className="photo3" />
        <img src={photo5} className="photo5" />
      </div>
      <About4 />
      <div className="image-9">
        <img src={photo9} className="photo9" />
      </div>
      <About5 />
      <div class="collage3">
        <div class="collage-background3"></div>
        <img src={photo6} className="photo6" />
        <img src={photo7} className="photo7" />
      </div>
      <About6 p8 ={photo8}/>
      <Footer />
    </div>
  );
}

export default App;
