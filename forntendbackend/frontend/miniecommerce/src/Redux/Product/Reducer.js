const initalState ={productdata : []} ;
export const productdataReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case "ProductData":
            return {
                ...state, productdata: [...payload]
            };
        default:
           return state;
    }
}
