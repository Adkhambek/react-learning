import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";

class App extends React.Component {
    state = {
        fishes: [],
        order: [],
    };
    addFish = (fish) => {
        const fishes = [...this.state.fishes];
        let id = fishes.length + 1;
        fish.id = id;
        fishes.push(fish);
        this.setState({ fishes });
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
