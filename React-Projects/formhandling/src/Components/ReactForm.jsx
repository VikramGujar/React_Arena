import { useState } from "react"


export function ReactForm()
{

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    function nameChange(e)
    {
        setName(e.target.value)
        console.log(e.target.value)
    }

    function phoneChange(e)
    {
        setPhone(e.target.value)
        console.log(e.target.value)
    }

    function formSubmit(e)
    {
        
        console.log(e.target.value)
    }

    return(

        <div className="container-fluid">
            <h2>User Registration</h2>
            <form action="" onSubmit={formSubmit}>

                <dl>
                    <dt>Your Name :</dt>
                    <dd><input type="text" name="name" value={name} onChange={nameChange} className="form-filed"/></dd>

                    <dt>Your Number :</dt>
                    <dd><input type="text" name="phone" value={phone} onChange={phoneChange} className="form-filed" /></dd>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </dl>

            </form>
        </div>
    );
}