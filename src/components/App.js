import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";

class App extends React.Component {
    state = {
        fishes: [],
        orders: [],
    };
    addFish = (fish) => {
        const fishes = [...this.state.fishes];
        let id = fishes.length + 1;
        fish.id = id;
        fishes.push(fish);
        this.setState({ fishes });
    };
    addToOrder = (id) => {
        const orders = [...this.state.orders];
        const index = orders.findIndex((e) => e.id === id);
        if (!index) {
            orders.push({ id, order: 1 });
        } else {
            orders[index][order] = orders[index][order] + 1;
        }

        // console.log(orderCheck);
        // const order = orderCheck
        //     ? (orderCheck.order = orderCheck.order + 1)
        //     : { id, order: 1 };
        // console.log(order);
        // orders.push(order);
        this.setState({ orders });
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagLine="Fresh seafood market" />
                    <ul className="fishes">
                        {this.state.fishes.map((e) => (
                            <Fish key={e.id} details={e} />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;
