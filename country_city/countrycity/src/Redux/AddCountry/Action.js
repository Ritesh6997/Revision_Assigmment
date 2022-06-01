export function AddCountry(value) {
  return {
    type: 'Add_Country',
    payload:value,
  }
};
export function AddNewCountry(value) {
  return {
    type: 'AddNewCountry',
    payload:value,
  }
};
export const getCountryData = ()=> async (dispatch) => {
    console.log("1234cart");
    const res = await fetch(`http://localhost:8080/countryData`);
    const CountryData = await res.json();
    console.log(CountryData);
   dispatch(AddCountry(CountryData));
}