export const initialState = {
    bag: [],
};

// Selector
export const getBagTotal = (bag) => 
    bag?.reduce((amount, item) => item.price + amount, 0);
    // for each item in the bag array, adds the item price to the total amount, which starts from 0


const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                bag: [...state.bag, action.item],
            };
        
        default:
            return state;
    }
};

export default reducer;