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
            <>
              <Item item={item} key={key} onItemUpdate={onItemUpdate} OnTypeUpdate={OnTypeUpdate} deleteItem={deleteItem} addNewSub={addNewSub} />
              {item.subType.map((subItem) => (
                <RecurList key={subItem.id} item={subItem} onItemUpdate={onItemUpdate} OnTypeUpdate={OnTypeUpdate} deleteItem={deleteItem} addNewSub={addNewSub} />
              ))}
            </>
        )
    }
}


export default RecurList;