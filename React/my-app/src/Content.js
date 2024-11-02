import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    function handleNameChange() {
        const names = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random() *3);
        return names[int]
    }

    const[name, setName] = useState("Earn")
    function handleNameChange1() {
        const names = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random() *3);
        setName(names[int])
    }
    const handleClick = () => {
        console.log('Thanks for Subscribing')
    }
    const handleClick2 = (name) => {
        console.log(`Thanks for the support ${name}`)
    }

   const [count, setCount] = useState(100);

   function incrementFunction() {
        setCount((count) => {return count + 1});
        setCount((count) => {return count + 1});
        setCount((count) => {return count + 1});
   }
   function decrementFunction() {
    setCount(count-1);
    }

    // const numbers = [-2, -1, 0, 1, 2, 2]
    // const items = numbers.filter(n => n>=0).map(n => ({number: n}))
    // console.log(items)

    const [items, setItems] = useState(
        [
            {
                id:1,
                checked: true,
                item: "Practice coding"
            },
            {
                id:2,
                checked: false,
                item: "Play cricket"
            }
        ]);
    const handleCheck = (id) => {
        console.log(`id: ${id}`)
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handledelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }



    return (
        <main>
            <p>Let's {handleNameChange()} Money</p>
            <button onClick={handleClick}> Subscribe </button> &nbsp;
            <button onClick={() => handleClick2('Lijo')}> Subscribe </button>

            <p>Let's {name} Money</p>
            <button onClick={handleNameChange1}> Subscribe </button>

            <p>
                <button onClick={decrementFunction}> - </button>
                <span>{count}</span>
                <button onClick={incrementFunction}> + </button>
            </p>

        {(items.length) ? (
            <ul>
                {items.map((item) => (
                <li className="item" key={item.id}>
                    <input 
                    type= "checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked = {items.checked}
                    />
                    <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    <FaTrashAlt 
                        role = "button"
                        tabIndex= "0"
                        onClick={() => handledelete(item.id)}
                    />
                </li>
                ))}
            </ul>
        ) : (
            <p style={{ marginTop: '2rem'}}>Your list is empty</p>
        )}
                
            
        </main>
        
    )

}

export default Content