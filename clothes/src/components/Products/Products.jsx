//

import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

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



    return (
        <div className="produits">

            <div className="entete">
                <span> Nos Produts </span>
            </div>

            <div className="contentProduits">
                {produits.map((item, index) => (
                    <Link to={"/test"} key={index}>
                        <div className="carte" key={index}>
                            <span className="titre"> {item.title} </span>
                            <Link to={"/test"}>
                                <img src={`${item.image}`} alt="" />
                            </Link>
                            <span> {item.price} </span>
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
