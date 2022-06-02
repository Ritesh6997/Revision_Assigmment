import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(()=>{
    getData();
  }, [page]);
  const getData = async() => {
    const data = await fetch(`http://localhost:8080/data?page=${page}&_limit=8`);
    const res = await data.json();
      setData([...Data,...res]);
  }
  const scrolltoEnd = () => {
    setPage(page + 1);
  }
  window.onscroll = function(){
    if (window.innerHeight+document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      scrolltoEnd();
    }
  }
  return (
    <div className="App">
      {Data.length > 0 && Data.map((e,i) => 
          <div key={i} className='container'>
            <h4>Id:{e.id}</h4>
            <h4>Name:{e.name}</h4>
         </div>
     )}
    </div>
  );
}

export default App;
