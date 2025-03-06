import '../Style/styles.css';

export function NetflixHeader(){
    return(
        <header className="p-4 text-white d-flex justify-content-between">
            <div className="brand-title"> NETFLIX </div>
            <div className="d-flex">
                <div>
                    <div className="input-group">
                    <span className="bi bi-translate input-group-text"></span>
                    <select className="form-select">
                        <option>Language</option>
                        <option>English</option>
                    </select>
                </div>
                </div>
                <div>
                    <button data-bs-target="#signin" data-bs-toggle="modal" className="btn btn-danger ms-2">Sign In</button>
                    <div className="modal fade" id="signin">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="bi bi-person-fill text-danger">User Login </h3> 
                                    <button data-bs-dismiss="modal" className="btn btn-close"></button>
                                </div>
                                <div className="modal-body text-dark">
                                    <dl> 
                                        <dt>User Name </dt> 
                                        <dd><input type="text" className="form-control"/> </dd>
                                        <dt> Password </dt> 
                                        <dd><input type="password" className="form-control"/> </dd>
                                    </dl> 
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger w-100">Login </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}