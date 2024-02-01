import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { Star } from 'lucide-react';

function Products(props) {


    const [currentpage, setCurrentpage] = useState(1);
    const produitparpage = 9;
    const lastindex = currentpage * produitparpage;
    const firstindex = lastindex - produitparpage;
    const produits = props.data.slice(firstindex, lastindex);
    const nbrpages = Math.ceil(props.data.length / produitparpage);
    const nombres = [...Array(nbrpages + 1).keys()].slice(1)

    function precedent() {
        if(currentpage !== 1){
            setCurrentpage(currentpage - 1)
        }
    }

    function changecurrentpage(id) {
        setCurrentpage(id)
    }

    function suivant() {
        if(currentpage !== nbrpages){
            setCurrentpage(currentpage + 1)
        }
    }

    let a = <Star />

    return (
        <div className="produits">

            <div className="entete">
                <span> Nos Produits </span>
            </div>

            <div className="contentProduits">
                {produits.map((item, index) => (
                    <Link to={`/${item.id}`} key={index}>
                        <div className="carte" key={index}>
                            <span className="titre"> {item.title} </span>
                            <Link to={`/${item.id}`}>
                                <img src={`${item.image}`} alt="" />
                            </Link>
                            <div className="prixrate">
                                <span> €{item.price} </span>
                                <span> {item.rating.rate}<Star className="etoile"/><span className="nbravis">({item.rating.count})</span>/5 </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="choixpages">
                <ul>
                    <li className="page-item">
                        <a href="#" className="lienPage" onClick={precedent}> {`<<`} </a>
                    </li>

                    {
                        nombres.map((n, index) => (
                            <li className={`page-item ${currentpage === n} ? 'active': ''   `} key={index}>
                                <a href="#" className="" onClick={()=> changecurrentpage(n)}> {n} </a>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <a href="#" className="lienPage" onClick={suivant}> {`>>`} </a>
                    </li>


                </ul>
            </div>

        </div>
    );
}

export default Products;
