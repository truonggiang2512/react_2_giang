import React, { Component } from "react";
import "./body.css";
const DataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class Body extends Component {
  state = {
    spChiTiet: {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderItem = () => {
    let arr = DataGlasses.map((glasses) => {
      return (
        <button
          className="btn col-2 mt-4 border mx-2 "
          onClick={() => {
            this.xemChiTiet(glasses);
          }}
        >
          {" "}
          <img className="w-100" src={glasses.url} alt="" />
        </button>
      );
    });
    return arr;
  };
  xemChiTiet = (spClick) => {
    console.log(spClick);
    this.setState({
      spChiTiet: spClick,
    });
  };
  render() {
    return (
      <div className=" bg-img ">
        <div className="container">
          <div className="item-posision">
            <div className="d-flex justify-content-evenly ">
              <div className="card  w-25 ">
                <img src="./glassesImage/model.jpg" alt="" />
                <div className="glasses">
                  <img
                    className="glasses1"
                    src={this.state.spChiTiet.url}
                    alt=""
                  />
                </div>
                <div className="card-body ">
                  <h3>{this.state.spChiTiet.name}</h3>
                  <p>{this.state.spChiTiet.price}$</p>
                  <i>{this.state.spChiTiet.desc}</i>
                </div>
              </div>
              <div className="card   w-25 ">
                <img src="./glassesImage/model.jpg" alt="" />
              </div>
            </div>
            <div className="list-glasses bg-white w-75 shadow text-center ">
              <div className="row py-5 mt-5 mx-auto gap-3">
                {this.renderItem()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
