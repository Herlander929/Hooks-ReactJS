import React, { useState } from "react";


export  const useCounter = (initialvalue=100) => {
    const [count, setCount] =useState(initialvalue)

    function inc(){
        setCount(count+1)
    }

    function desc(){
        setCount(count -1)
    }


    return [count, inc, desc]

}