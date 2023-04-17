
import { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';
const Item = ({item,key, onItemUpdate, OnTypeUpdate, addNewSub, deleteItem}) => {
    

       
    const [type, setSelectedValue] = useState('');

    // function handleDropdownChange(event) {
    //   setSelectedValue(event.target.value);
    // }
    
    // const handleChangeVal = (e) => {
    //     props.updateVal(e.target.value, props.key)
    // }
    
   const handleAddSub = () => {
    addNewSub(item.id);
   }

   const handleDelete = () => {
    deleteItem(item.id);
   }

    return(
        <div className="area">
        <input
          type="text"
          value={item.text}
          onChange={(e)=>onItemUpdate(item.id,e.target.value)}
        />
      <select value={item.type} onChange={(e)=>OnTypeUpdate(item.id,e.target.value)} >
        <option value="String">String</option>
        <option value="Boolean">Boolean</option>
        <option value="Number">Number</option>
        <option value="Object">Object</option>
      </select>
      {item.type == "Object" && (<button onClick={handleAddSub} >
        <AiOutlinePlus />
          </button>) }
        <button onClick={handleDelete}>
          <RiDeleteBinLine />
          </button>
        <br/>
        <br/>
        </div>
    )
}

export default Item;

