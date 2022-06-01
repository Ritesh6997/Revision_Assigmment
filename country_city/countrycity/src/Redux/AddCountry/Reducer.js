const initalState = { AddCountry:[]}
export const AddCountryReducer = (store = initalState, { type, payload }) => {
    switch (type) {
        case "Add_Country":
            return {
                ...store, AddCountry
                    : [...payload]
            };
        case "AddNewCountry":
            return {
                ...store, AddCountry
                    : [...store.AddCountry,payload]
            };
        default:
            return store;
    }
};