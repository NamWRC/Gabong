import "./cart.css";
function Cart({ bill }) {
    return (
        <div className="cart">
            {bill.Order.map((drink) => (
                <div className="drink">
                    <div className="drink-item">
                        <h3>{drink.drink}</h3>
                        <div className="size">
                            <div className="size sizeM">size:{drink.size}</div>
                            <div className="size sizeM">
                                price:{drink.price}k
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;
