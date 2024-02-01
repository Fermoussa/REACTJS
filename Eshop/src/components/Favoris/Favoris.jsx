import React from 'react';
import './Favoris.css';

function Favoris(props) {

    function removefavori(elemasupp){
        // props.setTab(props.tab.filter(objet => objet.pub !== "Larger storage")) 
        // props.setFavoris([...props.favoris, article ])
        props.setFavoris(props.favoris.filter(element => element !== elemasupp ))

    }

  return (
    <div className='favoris'>
        <div className="titrefavoris"> <h1> Vos Articles Favoris </h1> </div>
        {
            props.favoris.map((article,index)=>(
                <div className="lefavori" key={index}>
                        <img src={`${article.image}`} alt="" />
                        <div className="droitedetail">
                            <span className='nomarticle'> <h2> {article.title} </h2> </span>
                            <span className='category'> <span className='gras'>Catégorie:</span> {article.category} </span>
                            <span className='description'> <span className='gras'>Description:</span> {article.description} </span>
                            <span className="prix"> <span className='gras'>Prix: </span>€{article.price}  </span>
                            <button onClick={()=>removefavori(article)}> Remove favorite </button>
                        </div>
                </div>
            ))
        }
    </div>
  )
}

export default Favoris