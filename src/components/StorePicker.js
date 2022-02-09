import React from "react";
import { getFunName } from "../helpers";
import { useNavigate } from "react-router-dom";

function StorePicker() {
    const MyInput = React.useRef(null);
    const navigate = useNavigate();
    const goToStore = (event) => {
        event.preventDefault();
        const storeName = MyInput.current.value;
        navigate(`/store/${storeName}`, { replace: true });
    };
    return (
        <form className="store-selector" onSubmit={goToStore}>
            <h1>Please, enter the store</h1>
            <input
                type="text"
                ref={MyInput}
                placeholder="Store name"
                defaultValue={getFunName()}
                required
            ></input>
            <button type="submit">Visit Store</button>
        </form>
    );
}

export default StorePicker;
