import { createContext, useState } from "react";


export const CartContext = createContext({
    // plan:"vip",
    // teammembers:1,
    // gifts: 0,
    // items: [],
    // //getTotal: () => {},
    // //deleteAll: ()=>{},
    // getOrder: ()=>{},
    // setTeammembers:()=>{}
});


export function CartProvider({ children }) {
    const [cart, setCart] = useState({
        teammembers:2,
        plan: "price_1MLYMsCpotfJBdLxCNAu52ft",
        gifts:0
    });
    const [order, setOrder] =useState([]);


    function createOrder(){
       setOrder({id: cart.plan, "quantity": cart.teammembers})
       if(cart.gifts>0){
        setOrder(...order,{ id:"price_1MLYKjCpotfJBdLxeR976tgu", quantity:cart.gifts
        })
       }
       const checkout = async () => {
        await fetch("http://localhost:4000/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: order }),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response.url) {
              window.location.assign(response.url); //Forward User To Stripe
            }
          })
          .catch((error) => console.error("Error", error));
      };
      checkout();
    }


    //order is an array that looks like this
    //  [
    //     { id: "price_1MLYKjCpotfJBdLxeR976tgu", quantity: 1 },
    //     { id: "price_1MLYMsCpotfJBdLxCNAu52ft", quantity: 4 },
    //  ]

    const contextValue = {
        createOrder,
        setCart,
        cart,
        //getTotal,
    }

    return (<CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider;
