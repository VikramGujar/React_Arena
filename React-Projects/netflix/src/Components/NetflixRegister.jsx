import '../Style/styles.css';


export function NetflixRegister(){
    return(
        <form className="d-flex justify-content-center mt-4">
            <div>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
             <div>
                <div className="input-group input-group-lg">
                <input className="form-control" type="email" placeholder="Email address" />
                <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                </div>
              </div>
            </div>
        </form>
    )
}