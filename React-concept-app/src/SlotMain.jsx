import React from "react";
import Slotm from "./Slotm";

const SlotMain = () => {
    return (
        <>
            <div className="text-center my-5 text-bg-success">
                <h1>
                    🎰 Welcome to {" "} <span style={{ fontWeight: "bold" }}>slot machine game</span> {" "} 🎰
                </h1>
                <div>
                    <Slotm x="😄" y="😄" z="😄" />
                    <hr />
                    <Slotm x="😄" y="😍" z="😄" />
                    <hr />
                    <Slotm x="😄" y="😄" z="😬" />
                    <hr />
                    <Slotm x="🥺" y="🥺" z="🥺" />
                    <hr />
                </div>
            </div>
        </>
    )
}

export default SlotMain;