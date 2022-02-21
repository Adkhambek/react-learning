import React from "react";
import { formatPrice } from "../helpers";
class Order extends React.Component {
    renderOrder = (order) => {
        const fishes = this.props.fishes;
        const fish = fishes.find((e) => order.id === e.id);
        if (fish.status !== "available") {
            return (
                <li key={order.id}>
                    Sorry, {fish ? fish.name : "fish"} is no longer available
                </li>
            );
        }
        return (
            <li key={order.id}>
                {order.order} lbs {fish.name}
                {formatPrice(order.order * fish.price)}
            </li>
        );
    };
    render() {
        const orders = this.props.orders;
        const fishes = this.props.fishes;
        let total = 0;
        for (const order of orders) {
            const fish = fishes.find((e) => order.id === e.id);
            if (fish && fish.status === "available") {
                total += fish.price * order.order;
            }
        }
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">{orders.map(this.renderOrder)}</ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;
