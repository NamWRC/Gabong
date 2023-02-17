import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contents.css";

import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const products = [
    {
        id: 1,
        name: "First",
        category: "nike",
        price: "99.9",
        discription: "New product in 2022",
        imgName: "a.png",
    },
    {
        id: 2,
        name: "Second",
        category: "nike",
        price: "99.9",
        discription: "New product in 2022",
        imgName: "b.png",
    },
    {
        id: 3,
        name: "Third",
        category: "nike",
        price: "99.9",
        discription: "New product in 2022",
        imgName: "c.png",
    },
    {
        id: 4,
        name: "Fourth",
        category: "nike",
        price: "99.9",
        discription: "New product in 2022",
        imgName: "d.png",
    },
    {
        id: 5,
        name: "Fiveth",
        category: "nike",
        price: "99.9",
        discription: "New product in 2022",
        imgName: "e.png",
    },
    {
        id: 6,
        name: "Sixth",
        category: "nike",
        price: "99.9",
        discription: "New product in 2022",
        imgName: "f.png",
    },
];
function Contents({ change }) {
    const [productID, setProductID] = useState(3);
    function changeShowCase(action) {
        console.log(action);
        switch (action) {
            case "next":
                if (productID === products.length) {
                    setProductID(1);
                } else setProductID(productID + 1);
                break;
            case "prev":
                if (productID === 1) {
                    setProductID(products.length);
                } else setProductID(productID - 1);
                break;
            default:
                alert("something went wrong");
                break;
        }
    }
    return (
        <div className="contents">
            <div className={`showcase ${change ? "showcase-move" : ""}`}>
                <div className="bg-thing"></div>
                <img
                    src={require(`./images/${products[productID - 1].imgName}`)}
                    alt={`${products[productID - 1].name}`}
                />
                <div className="bg-thing"></div>
            </div>
            <div className={`minislide ${change ? "minislide-move" : ""}`}>
                <div
                    className="btn-prev"
                    onClick={() => changeShowCase("prev")}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="listitem">
                    {products.map((shoe, index) => (
                        <img
                            className={`item ${
                                productID === shoe.id ? "item-active" : ""
                            }`}
                            key={index}
                            onClick={() => setProductID(shoe.id)}
                            src={require(`./images/${shoe.imgName}`)}
                            alt={shoe.imgName}
                        />
                    ))}
                </div>
                <div
                    className="btn-next"
                    onClick={() => changeShowCase("next")}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default Contents;
