import React, { Component } from 'react';

//Images
import espresso from '../images/espresso-icon.png';
import americano from '../images/americano-icon.png';
import macciato from '../images/macciato-icon.png';
import cappuccino from '../images/cappuccino-icon.png';

const coffeeList = {
  coffees: [
    {
      "_id": "askjdfhlk",
      "image": espresso,
      "name": "espresso",
      "price": 22
    },
    {
      "_id": "werytres",
      "image": americano,
      "name": "americano",
      "price": 20
    },
    {
      "_id": "zcxvbbn",
      "image": macciato,
      "name": "macciato",
      "price": 26
    },
    {
      "_id": "lkjhgdsre",
      "image": cappuccino,
      "name": "cappuccino",
      "price": 18
    },
  ],
  order: []
}

class Order extends Component {

  handleOrder = (id, action) => {
    const coffeeOrderList = coffeeList.order;
    const quantity = 0;
    if (action === "Inc") {
      coffeeList.order.push({
        _id: id,
        quantity: (!quantity) ? 1 : quantity + 1
      });
    } else {
      // console.log(coffeeOrderList.indexOf(id));
      for (let i = 0; i < coffeeOrderList.length; i++) {
        if (coffeeOrderList[i]._id == id) {
          coffeeOrderList.splice(i,1);
        }
      }
    }

    console.log(coffeeList.order);
  }
  renderCoffees = () => {
    return coffeeList.coffees.map((coffee) => {
      return (
        <div key={coffee._id}>
          <button onClick={() => this.handleOrder(coffee._id, "Dec")}>-</button>
          <button onClick={() => this.handleOrder(coffee._id, "Inc")}>+</button>
          <img src={coffee.image} alt={coffee.name}/>
          <h4>{coffee.name}</h4>
          <p>R {coffee.price}</p>

        </div>
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderCoffees()}
      </div>
    )
  }
}

export default Order;