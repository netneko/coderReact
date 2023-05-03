import  {useState} from "react";




function ItemCount ()
{
    const [count,setCount] = useState(1);

    function handeleAdd()
    {
        setCount(++count);
    }

    function handeleSubstraction()
    {
        setCount(--count);
    }

    return <div className="count-container">
        <div className="count-btns">
            <button onClick={handeleSubstraction}>-</button>
            <p>1</p>
            <button onClick={handeleAdd}>+</button>
        </div>
        <div>
            <button>Agregar a mi carrito</button>
        </div>
    </div>
}

export default ItemCount;