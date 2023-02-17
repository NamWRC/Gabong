import "./sidebar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChair,
    faCartShopping,
    faWineGlass,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ handleChangePage }) {
    // function pageChange(Change) {
    //     handlePageChange(Change);
    // }
    const [tab, setTab] = useState("Chair");
    function changePage(page) {
        handleChangePage(page);
    }
    return (
        <div className="navbar">
            <ul className="navmenu">
                <li
                    className={`item-wraper ${
                        tab === "Chair" ? "tab-checked" : ""
                    }`}
                    onClick={() => {
                        changePage("Chair");
                        setTab("Chair");
                    }}
                >
                    <div className="item">
                        <FontAwesomeIcon icon={faChair} />
                        {/* <span>Home</span> */}
                    </div>
                </li>
                <li
                    className={`item-wraper  ${
                        tab === "Menu" ? "tab-checked" : ""
                    }`}
                    onClick={() => {
                        changePage("Menu");
                        setTab("Menu");
                    }}
                >
                    <div className="item">
                        <FontAwesomeIcon icon={faWineGlass} />
                        {/* <span>Acc</span> */}
                    </div>
                </li>
                <li
                    className={`item-wraper  ${
                        tab === "Cart" ? "tab-checked" : ""
                    }`}
                    onClick={() => {
                        changePage("Cart");
                        setTab("Cart");
                    }}
                >
                    <div className="item">
                        <FontAwesomeIcon icon={faCartShopping} />
                        {/* <span>Save</span> */}
                    </div>
                </li>
                <li
                    className={`item-wraper  ${
                        tab === "Search" ? "tab-checked" : ""
                    }`}
                    onClick={() => {
                        changePage("Search");
                        setTab("Search");
                    }}
                >
                    <div className="item">
                        <FontAwesomeIcon icon={faSearch} />
                        {/* <span>Search</span> */}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
