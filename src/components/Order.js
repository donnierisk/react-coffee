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
      "price": 22,
      "quantity": 0
    },
    {
      "_id": "werytres",
      "image": americano,
      "name": "americano",
      "price": 20,
      "quantity": 0
    },
    {
      "_id": "zcxvbbn",
      "image": macciato,
      "name": "macciato",
      "price": 26,
      "quantity": 0
    },
    {
      "_id": "lkjhgdsre",
      "image": cappuccino,
      "name": "cappuccino",
      "price": 18,
      "quantity": 0
    },
  ],
}

class Order extends Component {

  state = {
    coffees: []
  }

  componentDidMount() {
    this.setState ({
      coffees: coffeeList.coffees.slice()
    });

  }

  handleOrder = (id, action) => {
    const coffeeOrderList = coffeeList.order;
    let currCoffees = this.state.coffees.slice();
    const findCoffee = currCoffees.findIndex(coffee => coffee._id === id);

    if (action === "Inc") {
      currCoffees[findCoffee].quantity ++;
      console.log((currCoffees[findCoffee].quantity));
    } else {
      if (currCoffees[findCoffee].quantity > 0) {
        currCoffees[findCoffee].quantity --;
        console.log((currCoffees[findCoffee].quantity));
      }
    }
    this.setState({
      coffees: currCoffees
    });

    // if (action === "Inc") {
    //   coffeeList.order.push({
    //     _id: id,
    //     quantity: (!quantity) ? 1 : quantity + 1
    //   });
    // } else {
    //   // console.log(coffeeOrderList.indexOf(id));
    //   for (let i = 0; i < coffeeOrderList.length; i++) {
    //     if (coffeeOrderList[i]._id == id) {
    //       coffeeOrderList.splice(i,1);
    //     }
    //   }
    // }

  }
  renderCoffees = () => {
console.log('re-rendering')
    return this.state.coffees.map((coffee, index) => {
      let thisQty = 0;
      console.log(":", this.state.coffees[index].quantity);
      return (
        <div key={coffee._id}>
          <button onClick={() => this.handleOrder(coffee._id, "Dec")}>-</button>
          <button onClick={() => this.handleOrder(coffee._id, "Inc")}>+</button>
          <img src={coffee.image} alt={coffee.name}/>
          <h4>{coffee.name}</h4>
          {
            (this.state.coffees[index].quantity >= 1)
              ? <p>{this.state.coffees[index].quantity}</p>
              : ''
          }
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