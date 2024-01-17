import React from 'react';
import './Produit.css';
import data from '../../data.json';
import test from '../../assets/cola.png'
import { useState } from 'react';

function Produit(props) {

    let price = props.prix;

    const [stock, setStock] = useState(props.stock);


    function verifsold() {
        if (props.argent - price < 0) {
            alert("pas assez d'argent!");
            props.setArgent(props.argent);
        }
        else if (props.argent == 0) {
            props.setArgent(0);
            alert("pas assez d'argent!");
        }
    }



    function retireStock() {
        if (stock > 0) {
            setStock(stock - 1);
        } else {
            setStock(0);
            props.setArgent(props.argent)
        }

        console.log(` prit: ${props.prit}`);


    }


    // function quantite() {
    //     if (props.titre == "Coca Cola") {
    //         props.setQcola(props.qcola + 1);
    //         // console.log(`quantité coca = ${props.qcola}`);
    //     }
    //     else if (props.titre == "Coca Cola") {
    //         props.setQcola(props.qcola + 1);
    //         console.log(`quantité coca = ${props.qcola}`);
    //     }
    // }

    function rendre() {

        if (props.prit >= 0) {
            if (props.argent + price > 30) {
                props.setArgent(30)
            } else {
                props.setArgent(props.argent + price);
                setStock(stock+1);
            }
        }
        // console.log(`prit: ${props.prit}`);
        // props.setArgent(props.argent + price);

        // if(props.argent + price > 30){
        //     props.setArgent(30)
        // }else{
        //     props.argent + price
        // }

        // setStock(stock+1);
        // let a = stock;
        // console.log(`stock : ${a}`);
        // if(stock == stock){
        //     setStock(stock+1);
        // }

    }


    // function test(){
    //     let f = document.getElementsByClassName("contentproduit");
    //     f = Array.from(f)

    //     if(props.titre == 'Coca Cola'){
    //         // let e = props.panier;
    //         // var o = props.panier;
    //         f = document.getElementsByClassName("contentproduit")[0];
    //         console.log(f);
    //         props.setPanier([f]);
    //         console.log(props.panier);
    //     }

    //     else if(props.titre == 'Fanta'){
    //         // let e = props.panier;
    //         f = document.getElementsByClassName("contentproduit")[1];
    //         console.log(f);
    //     }

    //     else if(props.titre == 'Iced tea'){
    //         // let e = props.panier;
    //         f = document.getElementsByClassName("contentproduit")[2];
    //         console.log(f);
    //     }
    //     // props.setPanier((e) => e.concat(f))
    //     // setMonTableau((ancienTableau) => ancienTableau.concat(nouvelElement));
    //     // f = Array.from(f)
    //     // for(let i =0; i<3; i++){
    //     //     console.log(f[i]);
    //     // }
    // }

    // let v = props.argent;

    return (
        <div className='contentproduit'>
            <div className='article'>
                {/* <span> <img src={props.image} alt="" srcset="" className='canette' /> </span> */}
                <img src={props.image} alt="" srcset="" className='canette fanta' />
                <span> {props.titre} </span>
                <span> {props.prix} € </span>
                <span> Stock: {stock} </span>
                {/* <span> <button onClick={()=>console.log(`ton argent = ${v} tu achete au prix de ${t} il te reste ${v=v-t}`)}> Acheter </button> </span> */}
                <span className='contentbtn'>
                    <button onClick={() => { props.setArgent(props.argent - price); verifsold(); retireStock();}}> Acheter </button>
                    <button onClick={() => { rendre() }}> Rendre </button>
                </span>
            </div>
        </div>
    )
}

export default Produit