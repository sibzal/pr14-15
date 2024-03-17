import './CardPage.css'
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import ProductImage from '/public/Catalog/product.png'
import ProductImage2 from '/public/Catalog/product2.png'
import {catalog} from '../../data'

export default function CardPage (){

    const {id} = useParams();
    const product = catalog.find(product => product.id === parseInt(id))

    return(
        <div className="cardPage">
            <div className="container">
                <div className="cardPage-content">
                    <div className="card-img">
                        <img className="cardPage-img" src={ProductImage} />
                        <img className="cardPage-img" src={ProductImage2} />
                    </div>
                    <div className="right-card">
                        <p className="name">{product.name}</p>
                        <p className="name">{product.price} руб</p><br />
                        <p className="opisanie-txt">В большинстве случаев мужчины для деловой и повседневной жизни выбирают рубашки спокойных оттенков и носят их по всем классическим правилам, где рубашка гораздо светлее пиджака и брюк. При таком подходе выбор цвета сорочки останавливается на белом, цвета шампань или голубом.</p><br />
                        <Button title="В корзину"/>
                    </div>
                </div>
            </div>
        </div>
    )
}