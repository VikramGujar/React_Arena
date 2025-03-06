import { NetflixRegister } from "./NetflixRegister";
import '../Style/styles.css';

export function NetflixMain(){
    return(
        <main className="text-white text-center">
            <div className="main-title">Unlimited movies, TV <br /> shows and more</div>
            <div className="main-subtitle">Starts at ₹149. Cancel at any time.</div>
            <NetflixRegister />
        </main>
    )
}