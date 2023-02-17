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
    function handleChangePage(page) {
        console.log(change);
        setChange(page);
    }
    function setPage(change) {
        switch (change) {
            case "Chair":
                return <Chair />;

            case "Menu":
                return <Menu />;

            case "Cart":
                return <Cart />;

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
