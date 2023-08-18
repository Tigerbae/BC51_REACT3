import React, { Component } from "react";
import ProductItems from "./ProductItems";

export default class ProductList extends Component {
  renderContent = () => {
    return this.props.productsData.map((element) => {
      return (
        <div key={element.id} className="col-4">
          <ProductItems showDesc={this.props.showDesc} element={element} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderContent()}</div>;
  }
}
