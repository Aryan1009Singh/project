import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

import Posts from "../posts/Posts";


export default function Home() {
  return (
    <>
        
        <div className="home">
            <Navbar />
            <Slider />
            <Posts />
        </div>
    </>
  )
}
