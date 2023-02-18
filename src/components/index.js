import "./index.css";
import Menu from "./menu/menu";
import Sidebar from "./sidebar/sidebar";
import { useState } from "react";
import Chair from "./chair/chair";
import Cart from "./cart/cart";
import Search from "./search/search";
// import Contents from "./contents/contents";
// import { useCallback, useState } from "react";
// import Productinfo from "./productinfo/productinfo";
function Mainpage() {
    // const [change, setChange] = useState(false);
    // function handlePageChange(action) {
    //     console.log(action);
    //     setChange(action);
    // }
    // const handlePageChange = useCallback(
    //     (action) => setChange(action),
    //     [change]
    // );
    const [change, setChange] = useState("Chair");
    const [bill, setBill] = useState({
        Table: "",
        Order: "",
    });

    // useEffect(() => {
    //     console.log(bill);
    // }, []);

    function handleChangePage(page) {
        // console.log(change);
        setChange(page);
    }
    function handleChair(chair) {
        // console.log(bill);
        setBill({ ...bill, Table: chair });
    }
    function handleOrder(order) {
        // console.log(bill);
        setBill({ ...bill, Order: order });
    }
    function setPage(change) {
        switch (change) {
            case "Chair":
                return <Chair handleChair={handleChair} bill={bill} />;

            case "Menu":
                return <Menu handleOrder={handleOrder} bill={bill} />;

            case "Cart":
                return <Cart bill={bill} />;

            case "Search":
                return <Search />;

            default:
                break;
        }
    }
    return (
        <>
            <div className="main-page">
                {/* <Contents change={change} />
                <Productinfo /> */}
                {setPage(change)}
            </div>
            <Sidebar handleChangePage={handleChangePage} />
            {/* <Sidebar getChange={change} handlePageChange={handlePageChange} /> */}
        </>
    );
}

export default Mainpage;
