import { useState } from "react";
import RecurList from "./RecurList";
import { v4 as uuidv4 } from "uuid";
import {AiOutlinePlus} from 'react-icons/ai'; 

const List = () => {

   const [object, setObject] = useState("");
   const [itemList, setItemList] =  useState([
    // {
    //   id: uuidv4(),
    //   text: "Parent Item 1",
    //   type:"Object",
    //   subType: [
    //     { id: uuidv4(), text: "Child Item 1" ,type:"String", subType:[]},
    //     { id: uuidv4(), text: "Child Item 2", type:"String", subType:[] },
    //   ],
    // },
    // {
    //   id: uuidv4(),
    //   text: "Parent Item 2",
    //   type:"String",
    //   subType : []
    // },
  ]
   );
 
   const updateItem = (items, itemId, newText) => {
    return items.map((item) => {
      if (item.id === itemId) {
        return { ...item, text: newText };
      } else if (Array.isArray(item.subType)) {
        return { ...item, subType: updateItem(item.subType, itemId, newText) };
      }
      return item;
    });
  };

  const handleItemUpdate = (itemId, newText) => {
    setItemList((prevList) => {
      const updatedList = updateItem(prevList, itemId, newText);
      return updatedList;
    });
  };

  const updateType = (items, itemId, newType) => {
    return items.map((item) => {
      if (item.id === itemId) {
        
        return { ...item, type: newType, subType:[] };
      } else if (Array.isArray(item.subType)) {
        return { ...item, subType: updateType(item.subType, itemId, newType) };
      }
      return item;
    });
  };

  const handleTypeUpdate = (itemId, newType) => {
    setItemList((prevList) => {
      const updatedList = updateType(prevList, itemId, newType);
      return updatedList;
    });
  };

   const handleClick = () => {
      const text = "Item";
      const type = "String";
      const newItem = { id: uuidv4(), text: text, type:type , subType: []};
      
      setItemList([...itemList,newItem]);
   }

   const updateAddNewSub = (items, itemId, newItem) => {
    return items.map((item) => {
      if (item.id === itemId) {
        return { ...item, subType: [...item.subType, newItem] };
      } else if (Array.isArray(item.subType)) {
        return { ...item, subType: updateAddNewSub(item.subType, itemId, newItem) };
      }
      return item;
    });
  };
   const handleAddSub = (itemId) => {
     //console.log("Btn is clicked", itemId)
      const text = "Item";
      const type = "String";
      const newItem = { id: uuidv4(), text: text, type:type , subType: []};
      setItemList((prevList) => {
        const updatedList = updateAddNewSub(prevList, itemId, newItem);
        return updatedList;
      });
   }
  
   const updateDeleteSub = (items, itemId) => {
    
      const newItem = items.filter((item)=>item.id !== itemId);
      const res = newItem.map((item)=>{
          return {
            ...item,
            subType: updateDeleteSub(item.subType,itemId)
          };
      });

      return res;
  }; 
  const handleDeleteItem = (itemId) => {
   // console.log("Del btn is clicled");
    const newList = itemList.filter((item)=>item.id !== itemId);
    setItemList(newList);
    setItemList(prevList =>
      prevList.map(item => {
        
          return {
            ...item,
            subType: updateDeleteSub(item.subType,itemId)
          };   
     
      })
    );

  }

    const handleSave = () => {
       //console.log("Save button clicked",JSON.stringify(itemList));
       setObject(JSON.stringify(itemList));
       setItemList([]);
    }  

    //console.log(itemList);
    

    return (
      <div className="container">
      <h3>Field Name and Type</h3>
      <ol>
        {itemList.map((item) => (
          <li><RecurList item={item} key ={item.id} onItemUpdate={handleItemUpdate} OnTypeUpdate={handleTypeUpdate} addNewSub={handleAddSub} deleteItem={handleDeleteItem} /></li>
        ))}
    </ol>
      <button onClick={handleClick} className="add"><AiOutlinePlus /></button>
      <br />
      <button onClick={handleSave} className="save">Save</button>
      <br />
      <p>{object}</p>
      </div>
    );
  }

export default List;