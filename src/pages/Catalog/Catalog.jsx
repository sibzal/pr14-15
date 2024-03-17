import './Catalog.css'
import Card from '../../components/Card/Card'
import {catalog} from '../../data.js'
import { useState } from 'react'


export default function CatalogPage({addToBasket,basket}){

    const[query,setQuery] = useState("")
    const[sorting,setSorting] = useState("")
    const[category,setCategory] = useState(0)

    const filterProduct = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())
    &&
    (item.category == category || category == 0))

    function search (e){
        setQuery(e.target.value)
    }

    function sort(event) {
        const sortValue = event.target.value
        setSorting(sortValue);
    }

    const sortProducts = (sorting, catalog) => {
        switch(sorting){
            case 'price_asc':
                return [...catalog].sort((a,b) => a.price - b.price)
            case 'price_desc':
                return [...catalog].sort((a,b) => b.price - a.price)
            case 'count_desc':
                return [...catalog].sort((a,b) => a.count - b.count)
            default:
                return catalog
        }
    }

    const sortAndFilterProduct = sortProducts(sorting,filterProduct)

    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                    <div className="nav-catalog">
                        <p className="nav-cat">Главная \ Каталог</p>
                    </div>
                    <input type="search" className='search-input' onChange={search} name="search" placeholder='Поиск'/>
                    <select className='sort' onChange={sort}>
                        <option value="price_asc">По возрастанию цены</option>
                        <option value="price_desc">По убыванию цены</option>
                        <option value="count_desc">Остаток по количеству</option>
                    </select>
                    <div className="categories">
                        <button onClick={()=>setCategory(0)} className="categor-btn-active">Всe</button>
                        <button onClick={()=>setCategory(1)} className="categor-btn-active">Мужские</button>
                        <button onClick={()=>setCategory(2)} className="categor-btn-active">Женские</button>

                    </div>
                    <div className="catalog-catalog">
                        {
                            sortAndFilterProduct.length ?
                            sortAndFilterProduct.map((card,index) =>{
                                return(
                                    <Card key={index}
                                    {...card} 
                                    addCard={
                                        () => addToBasket([...basket,card.id])
                                    }
                                    />
                                )
                            })
                            :
                            <h2>По запросу "{query}" ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}