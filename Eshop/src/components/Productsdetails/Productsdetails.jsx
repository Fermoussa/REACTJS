import React from 'react';
import './Productsdetails.css'
import { Link, useParams } from 'react-router-dom';

function Productsdetails(props) {

    const params = useParams();
    const article = props.data.find(item => item.id == params.id);


    function ajoutfavoris(){
        // props.setFavoris([...props.favoris, article ])
        if (props.favoris.includes(article)) {
            // props.setFavoris([...props.favoris, article ])
        }
        else{
            props.setFavoris([...props.favoris, article ])
        }
    }

    return (
        <div className='details'>
            {article !== undefined &&
                <>
                    <div className='titredetails'> <Link to={"/"}>  <h1>Tous Les Produits </h1> </Link> </div>
                    <div className="alldetails">
                        <img src={`${article.image}`} alt="" />
                        <div className="droitedetail">
                            <span className='nomarticle'> <h2> {article.title} </h2> </span>
                            <span className='category'> <span className='gras'>Catégorie:</span> {article.category} </span>
                            <span className='description'> <span className='gras'>Description:</span> {article.description} </span>
                            <span className="prix"> <span className='gras'>Prix: </span>€{article.price}  </span>
                            <button onClick={()=>ajoutfavoris()}> Add favorite </button>
                        </div>
                    </div>
                </> 
            }
        </div>
    )
}

export default Productsdetails