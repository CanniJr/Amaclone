export const initialState = {
    bag: [],
    user: null
};

// Selector
export const getBagTotal = (bag) => 
    bag?.reduce((amount, item) => item.price + amount, 0);
    // for each item in the bag array, adds the item price to the total amount, which starts from 0


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                bag: [...state.bag, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        
        case 'REMOVE_FROM_BAG':
            const index = state.bag.findIndex(
                (bagItem) => bagItem.id === action.id
            );
            let newBag = [...state.bag];

            if (index >= 0) {
                newBag.splice(index, 1);
            } else {
                console.warn(
                    `Product (id: ${action.id}) does not exist!`
                )
            }

            return {
                ...state, bag: newBag
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        default:
            return state;
    }
};

export default reducer;