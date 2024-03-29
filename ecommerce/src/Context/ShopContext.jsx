import React, { createContext, useEffect, useState } from "react";


export const ShopContext= createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index<300+1;index++){
        cart[index]=0;
        }
        return cart;
}


const ShopContextProvider = (props)=>{

    const[all_product,setAll_product]= useState([]);
    const[cartItems,setCartItems]=useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://shopoholic-igbw.onrender.com/allproducts').then((response)=>response.json()).then((data)=>setAll_product(data))
    
        if(localStorage.getItem("auth-token")){
            fetch("https://shopoholic-igbw.onrender.com/getcart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json"
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItems(data))
        }

    },[])

const addtocart = (itemId) => {
 
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    if(localStorage.getItem('auth-token')){
        fetch("https://shopoholic-igbw.onrender.com/addtocart",{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "auth-token":`${localStorage.getItem('auth-token')}`,
                'content-type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId})
        }).then((response)=>response.json()).then((data)=>console.log(data))
    }
 
}

const removefromcart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(localStorage.getItem('auth-token')){
        fetch("https://shopoholic-igbw.onrender.com/removefromcart",{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "auth-token":`${localStorage.getItem('auth-token')}`,
                'content-type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId})
        }).then((response)=>response.json()).then((data)=>console.log(data))
  
    }
}
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo = all_product.find((product) => product.id===Number(item))
            if (itemInfo){
                totalAmount += itemInfo.new_price * cartItems[Number(item)];
            }
        }
       
    }
    return totalAmount;
}
const getTotalCartitems = () => {
    let totalItem = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
}
const contextValue= {all_product,cartItems,addtocart,removefromcart,getTotalCartAmount,getTotalCartitems};

return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>

)
}

export default ShopContextProvider