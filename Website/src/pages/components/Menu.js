import React from "react";
import "../../styles/Menu.css"

function Menu(props) {
    return (
        <div className="Menu">
            <div className="start">
                <button  onClick={() => {props.cambiaMenu("show")}}>
                    SHOW
                </button>
                <button onClick={() => {props.cambiaMenu("create")}}>
                    CREATE
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