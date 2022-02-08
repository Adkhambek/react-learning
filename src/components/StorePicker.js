import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    goToStore = (event) => {
        event.preventDefault();
        console.log(this);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h1>Please, enter the store</h1>
                <input
                    type="text"
                    ref={this.MyInput}
                    requred
                    placeholder="Store name"
                    defaultValue={getFunName()}
                ></input>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;
