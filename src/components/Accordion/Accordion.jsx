import { useState } from 'react'
import './Accordion.css'

export default function Accordion ({title,content}){

    const [isActive, setIsActive] = useState(false)

    return(
        <div className="accordion">
            <div className="container">
                <div className="accordion-content">
                    <div className="accordion-item" onClick={() => setIsActive(!isActive)}>
                        <div className="accordion-title">
                            <div className="title">{title}</div>
                            <div className="plus">{isActive ? '-' : '+'}</div>
                        </div>
                        {isActive && 
                            <div className="accordion-cont">{content}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}