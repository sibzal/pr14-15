import './Card.css'
import Button from '../../components/Button/Button'
import ProductImage from '/public/Catalog/product.png'
import ProductImage2 from '/public/Catalog/product2.png'
import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react';
import {catalog} from '../../data'
import Modal from 'react-modal';
import Modalka from '../Modalka/Modalka'


export default function Card ({name,price,id,addCard}){
      
    const product = catalog.find(product => product.id === parseInt(id))

    const[modalIsOpen, setModalIsopen] = useState(false)

    function showModal(){
        setModalIsopen(true)
    }

    function closeModal(){
        setModalIsopen(false)
    }

    return(
    <div  className="catalog-product">

        <img src={ProductImage} />
        <p className="name">{name}</p><br />
        <div className="priceandbtn">
            <p className="name">{price} руб</p>
            {
                product.count == 0 ?
                <>
                    <button onClick={showModal}>
                        <Button title="Заказать"/>
                    </button>
                    <Modal className="modal-okno" isOpen={modalIsOpen}>
                        <div>
                            <Modalka  setModalIsopen={setModalIsopen} />
                            <button className="close-btn" onClick={closeModal}>
                                <Button title="Закрыть"/>
                            </button>
                        </div>
                    </Modal>
                </>
                :
                <>
                    <button onClick={addCard}><Button title="В корзину"/></button>
                    <Link to={`${id}`}>
                        <Button title="Подробнее"/>
                    </Link>
                </>
            }
        </div>
    </div>
    )
}