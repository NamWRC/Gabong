import "./menu.css";
import { useState } from "react";
const drinks = [
    { drink: "Trà sữa truyền thống", price: { M: 20, L: 25 } },
    { drink: "Trà sữa tiramisu", price: { M: 20, L: 25 } },
    { drink: "Trà sữa socola", price: { M: 20, L: 25 } },
    { drink: "Trà sữa matcha", price: { M: 20, L: 25 } },
    { drink: "Trà sữa ô long", price: { M: 25, L: 30 } },
    { drink: "Trà sữa halzenut", price: { M: 25, L: 30 } },
    { drink: "Trà sữa than tre", price: { M: 30, L: 35 } },
    { drink: "Trà sữa kem dừa nướng", price: { M: 25, L: 30 } },
    { drink: "Trà sữa thái xanh", price: { M: 25, L: 30 } },
    { drink: "Trà sữa hokkaido", price: { M: 20, L: 25 } },
    { drink: "Trà sữa khoai môn", price: { M: 20, L: 25 } },
];
function Menu({ handleOrder }) {
    const [drinkOrder, setDrinkOrder] = useState([{}]);
    function setDrink(drinkOrder) {
        handleOrder(drinkOrder);
    }
    return (
        <div className="menu">
            <h1>Gọi món</h1>
            {drinks.map((drink) => (
                <div className="drink">
                    <div className="drink-item">
                        <h3>{drink.drink}</h3>
                        <div className="size">
                            <div
                                className="size sizeM"
                                onClick={() => {
                                    setDrinkOrder([
                                        ...drinkOrder,
                                        {
                                            drink: drink.drink,
                                            size: "M",
                                            price: drink.price.M,
                                        },
                                    ]);
                                    setDrink(drinkOrder);
                                }}
                            >
                                M:{drink.price.M}k
                            </div>
                            <div
                                className="size sizeL"
                                onClick={() => {
                                    setDrinkOrder([
                                        ...drinkOrder,
                                        {
                                            drink: drink.drink,
                                            size: "L",
                                            price: drink.price.L,
                                        },
                                    ]);
                                    setDrink(drinkOrder);
                                }}
                            >
                                L:{drink.price.L}k
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
