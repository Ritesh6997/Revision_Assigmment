export function AddCity(value) {
  return {
    type: 'Add_City',
    payload:value,
  }
};
export function AddNewCity(value) {
  return {
    type: 'AddNewCity',
    payload:value,
  }
};
export function Sortbypopulation(value) {
  return {
    type: 'Sort',
    payload:value,
  }
};
export function EditCity(value) {
  return {
    type: 'Edit_City',
    payload:value,
  }
};
export function DeleteCity(value) {
  return {
    type: 'Delete',
    payload:value,
  }
};
export const getCityData = ()=> async (dispatch) => {
    const res = await fetch(`http://localhost:8080/citydata`);
    const CityData = await res.json();
    console.log(CityData);
   dispatch(AddCity(CityData));
}