import './Footer.css'
import LogoImage from '/public/Header/logo.png'
import SearchImage from '/public/Header/search.png'
import CardImage from '/public/Header/card.png'
import LikeImage from '/public/Header/like.png'
import {Link} from 'react-router-dom'

export default function Footer(){

    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                        <div className="header-logo">
                            <img src={LogoImage} />
                        </div>
                        <nav className="header-nav">
                            <p className="palka">|</p>
                            <Link to="/" className="btn-nav">ГЛАВНАЯ</Link>
                            <Link to="/catalog" className="btn-nav">КАТАЛОГ</Link>
                            <p className="palka">|</p>
                            <Link to="/" className="btn-nav">ИНФОРМАЦИЯ</Link>
                        </nav>
                    </div>
                    <div className="right">
                        <img src={SearchImage} />
                        <img src={CardImage} />
                        <img src={LikeImage} />
                    </div>
                </div>
            </div>
        </header>
    )
}