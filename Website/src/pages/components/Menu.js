import React from "react";
import "../../styles/Menu.css"
import HomeInactive from "../../assets/home-inactive.svg";
import HomeActive from "../../assets/home-active.svg";
import AddInactive from "../../assets/add-inactive.svg"
import AddActive from "../../assets/add-active.svg"

function Menu(props) {
    return (
        <div className="Menu">
            <div className="start">
                <button  onClick={() => {props.setMenu("show")}}>
                    <img src={props.menu === "show" ? HomeActive : HomeInactive} alt={"Home"} />
                </button>
                <button onClick={() => {props.setMenu("create")}}>
                    <img src={props.menu === "create" ? AddActive : AddInactive} alt={"Add"} />
                </button>
            </div>
            <div className="buttonLogout">
                <button onClick={() => {props.onLogout()}}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Menu