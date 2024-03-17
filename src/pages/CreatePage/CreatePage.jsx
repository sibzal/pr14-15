import { useState } from "react";
import './CreatePage.css'

export default function CreatePage (){
    const[message,setMessage] = useState()

    function createForm(event) {
        event.preventDefault()
        const formdata = new FormData(event.target)

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:formdata
        })
        event.target.reset()
        setMessage('Форма отправлена')
    }
    return(
        <div className="create">
            <div className="container">
                <div className="create-content"><br />
                    <h2 className="title-center">Добавление</h2><br />
                    <form onSubmit={createForm} className="create-form">
                        <label className="title-label">title</label><br />
                        <input className="input" type="text" name="title" /><br />
                        <label className="title-label">body</label><br />
                        <textarea className='input' name="body"></textarea><br />
                        <button type="submit" className="add_card">Добавить</button><br />
                        {message}<br /><br /><br />    
                    </form>
                </div>
            </div>
        </div>
    )
}