import React, { Component } from "react";

export default class ProductItems extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.element.image} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.name}</h4>
          <p className="card-text">{this.props.element.shortDescription}</p>

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => {
              this.props.showDesc(this.props.element.description);
            }}
          >
            Show Description
          </button>
        </div>
      </div>
    );
  }
}
