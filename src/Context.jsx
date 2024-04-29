import React, {createContext, useContext, useState } from 'react';
import { userRows,productRows } from './data';
const myContext = createContext();

function Context({children}) {
    const [user,setUser] = useState(userRows);
    const [showDtails,setShowDtails] = useState({});
    const [products,setProducts] = useState(productRows)
    const [showProduct,setShowProductDtails] = useState({});
    const [showChartProduct,setChartProduct] = useState([]);
    const handelDelete = id =>{
        setUser(prev => prev.filter(usr => usr.id !== id));
    }

    const showDetails = user =>{
        setShowDtails(user);
    }

    const handelProductDelete = id =>{
        setProducts(prev => prev.filter(usr => usr.id !== id));
    }

    const showProductDetails = (product,id) =>{
        setChartProduct(
            userRows.filter(user =>{
                if(user.id === id){
                    return user.data;
                }

            })
        )
        setShowProductDtails(product);
    }

  return (
    <myContext.Provider value={{user,handelDelete,showDetails,showDtails
    ,products,handelProductDelete,showProductDetails,showProduct,setShowProductDtails,showChartProduct}}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(myContext);
}

export default Context;