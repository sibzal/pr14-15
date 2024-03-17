import './BasketPage.css'
import Button from '../../components/Button/Button'
import { Link } from "react-router-dom";
import {catalog} from '../../data'

export default function BasketPage({basket}) {
    const cardProducts = basket.map(id => catalog.find(item => item.id == id))
    const summa = cardProducts.reduce((summ,item) => summ + item.price,0)

    return(
        <div className="basket">
            <div className="container">
            <h1>Корзина</h1><br />
                <div className="basket-content">
                {
                    cardProducts.map(product => 
                        <div key={product.id} className="card">
                            <h3>{product.name}</h3>
                            <i>{product.price}</i><br />
                            <Link to={`${product.id}`}><Button title="Подробнее"/></Link><br /><br />
                        </div>
                    )
                }
                <h3>Итого {summa} рублей</h3><br />
                </div>
            </div>
        </div>
    )
}