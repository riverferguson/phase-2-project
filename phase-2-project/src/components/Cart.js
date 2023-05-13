import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Link to='/guitars/cart'>
      <div>Cart</div>
    </Link>
  )
}

export default Cart


// export default class Product extends Component {

//   state = {
//     cart: [],
//   }

//   add = (guitar) => {
//     this.setState(state => ({
//     cart: [...state.cart, guitar],
//     }))
//   }

//   currencyOptions = {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2, 
//   }
//   getTotal = () => {
//     const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0)
//     return total.toLocaleString(undefined, this.currencyOptions)
//   }

//   remove = (product) => {
//     this.setState(state => {
//       const cart = [...state.cart]
//     const productIndex = cart.findIndex(p => p.name === product.name);
//     if(productIndex < 0) {
//       return;
//     }
//     cart.splice(productIndex, 1)
//     return ({
//       cart
//       })
//     })
//   }

//   render() {
//     return(
//       <div className="wrapper">
//         <div>
//           Shopping Cart: {this.state.cart.length} total items.
//         </div>
//         <div>Total: {this.getTotal()}</div>
//         <div>
//           {guitars.map(guitar => (
//             <div key={guitar.id}>
//               <div className="product">
//                 <span role="img" aria-label="ice cream">{product.emoji}</span>
//               </div>
//               <button onClick={() => this.add(guitar)}>Add</button> 
//               <button onClick={() => this.remove(guitar)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }