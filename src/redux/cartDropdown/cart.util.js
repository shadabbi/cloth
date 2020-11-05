export const quantityUp = (items, newItem) => {
    const match = items.find(item=>item.id === newItem.id);
    if(match) {

        return(
            items.map(item=>item.id === match.id ? {...match, quantity:match.quantity+1}:item)
        )
    }

    return [...items, newItem]
  
}
export const quantityDown = (items, newItem) => {

    const theItem = items.find(item=>item.id === newItem.id);


    if(theItem.quantity > 1) {
        return (
            items.map(item=>item.id===theItem.id?{...item, quantity:theItem.quantity-1}:item )
        )
    }

}

export const removeItem = (items, toRemove) => {
    const matchIdx = items.findIndex(item=>item.id === toRemove.id);
  
    if(matchIdx > -1) {
        const arr = [...items];
        arr.splice(matchIdx,1);
        return arr;
    }

    else {
        return items;
    }
  
}
