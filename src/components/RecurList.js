import Item from "./Item";

const RecurList = ({item,key,onItemUpdate, OnTypeUpdate, addNewSub, deleteItem}) => {
    if(!Array.isArray(item.subType)){
        return(
            <>
              <Item item={item} key = {key} onItemUpdate={onItemUpdate} OnTypeUpdate={OnTypeUpdate} deleteItem={deleteItem} addNewSub={addNewSub} />
            </>
        )
    }else{
        return (
            <ol style={{marginLeft:"0"}}>
              <Item item={item} key={key} onItemUpdate={onItemUpdate} OnTypeUpdate={OnTypeUpdate} deleteItem={deleteItem} addNewSub={addNewSub} />
              {item.subType.map((subItem) => (
                <li style={{marginLeft:"0"}}><RecurList key={subItem.id} item={subItem} onItemUpdate={onItemUpdate} OnTypeUpdate={OnTypeUpdate} deleteItem={deleteItem} addNewSub={addNewSub} /></li>
              ))}
            </ol>
        )
    }
}


export default RecurList;