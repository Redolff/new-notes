import Navbar from "./components/navbar";
import Principal from "./components/principal";
import './style/home.css'

export default function Home() {

  return (
    <div className="div-home"> 
      <Navbar />
      <Principal />
    </div>
  );
}
