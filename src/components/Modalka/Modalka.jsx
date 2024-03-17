import { useState } from "react";
import './Modalka.css'

export default function CreatePage (){
    const[message,setMessage] = useState()

    function createForm(event) {
        event.preventDefault()
        const formdata = new FormData(event.target)

        event.target.reset()
        setMessage('Заявка отправлена')
    }
    return(
        <div className="modalka">
            <div className="container">
                <div className="modalka-content"><br />
                    <h2 className="title-center">Заявка на товар</h2><br />
                    <form onSubmit={createForm} className="create-form">
                        <label className="title-label">Кол-во товара</label><br />
                        <input className="input" type="text" name="title" /><br />
                        <button type="submit" className="add_card">Отправить заявку</button><br />
                        {message}<br /><br /><br />    
                    </form>
                </div>
            </div>
        </div>
    )
}