import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "../data/data.json";
export default class ShoesStore extends Component {
 state={
  productsData: data,
 }
 showDesc=(desc)=>{
  alert(`description: ${desc}`)
 }
  render() {
    return (
     <>
     <h1 className="text-center">Shoe Shop</h1>
       <ProductList showDesc={this.showDesc} productsData={this.state.productsData}/> 
     </>  
    );
  }
}
