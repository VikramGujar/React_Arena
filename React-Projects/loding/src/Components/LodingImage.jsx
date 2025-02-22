import { useRef, useState } from "react"


export function LodingImage(){

    const [toggleButton, setToggleButton] = useState('d-block');
    const [toggleProgress, setToggleProgress] = useState('d-none');
    const [toggleImage, setToggleImage] = useState('d-none');
    const [pValue, setPvalue] = useState(1);
    const [status, setStatus] = useState('');

    let thread = useRef(null);
    let progressValue = useRef(null);

    var count = pValue;
    function StartProgress(){
        count++;
        setPvalue(count);
        progressValue.current = count;
        if(count===100) {
            clearInterval(thread.current);
            setToggleProgress('d-none');
            setToggleImage('d-block');
        }
    }

    function LoadImageClick(){
        setToggleButton('d-none');
        setToggleProgress('d-block');
        thread.current = setInterval(StartProgress,100);
    }

    function PauseClick(){
        clearInterval(thread.current);
        setStatus('Paused');
    }
    function PlayClick(){
        thread.current = setInterval(StartProgress,100);
        setStatus('');
    }

    return(
        <div className="container-fluid d-flex text-center justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
                <div className={toggleButton}>
                   <button onClick={LoadImageClick} className="btn btn-primary">Load Image</button>
                </div>
                <div className={toggleProgress}>
                    <progress min={1} max={100} value={progressValue.current} style={{width:'300px', height:'30px'}} ></progress>
                    <div className="my-2">
                        <button onClick={PlayClick} className="btn btn-primary bi bi-play mx-2"></button>
                        <button onClick={PauseClick} className="btn btn-danger bi bi-pause"></button>
                    </div>
                    <div>
                        {pValue} % Completed {status}
                    </div>
                </div>
                <div className={toggleImage}>
                    <img src="tony.jpg" alt="tony-image" width="600" height="400" />
                </div>
            </div>
           
        </div>
    )
}
