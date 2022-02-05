import React from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h1>Please, enter the store</h1>
                <input type="text" requred placeholder="Store name"></input>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;
