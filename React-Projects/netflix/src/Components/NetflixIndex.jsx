import { NetflixHeader } from "./NetflixHeader";
import { NetflixMain } from "./NetflixMain";
import '../Style/styles.css';


export function NetflixIndex(){
    return(
        <div className="bg-image">
            <div className="bg-shade">
                <NetflixHeader />
                <NetflixMain />
            </div>
        </div>
    )
}