import logo from "./logo.svg";
import "./App.css";
import { sliderData } from "./components/ImageSlider/sliderData";
import ImageSlider from "./components/ImageSlider/ImageSlider";

function App() {
  return (
    <div className="">
      <ImageSlider slides={sliderData}></ImageSlider>
    </div>
  );
}

export default App;
