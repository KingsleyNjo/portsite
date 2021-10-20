import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Code, Build and Develop</h1>
                <p className="pl-desc">
                    Some of my Frontend and Mern-stack Applications have worked on for some months now.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
