import React from "react";
import { getFunName } from "../helpers";
import { useNavigate } from "react-router-dom";

class StorePicker extends React.Component {
    MyInput = React.createRef();
    navigate = useNavigate();
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.MyInput.current.value;
        navigate(`/store/${storeName}`, { replace: true });
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h1>Please, enter the store</h1>
                <input
                    type="text"
                    ref={this.MyInput}
                    placeholder="Store name"
                    defaultValue={getFunName()}
                    required
                ></input>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;
