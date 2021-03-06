import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./product.css";
import { useDispatch, useSelector } from 'react-redux';
import { ProductData } from '../Redux/Product/Action';
import { useSearchParams } from 'react-router-dom';
export default function Product() {
    let [searchParams, setSearchParams] = useSearchParams({});
    const [page, setPage] = useState(Number(searchParams.get("page") || 1));
    const dispatch = useDispatch();
    const [sort, setSort] = useState([]);
    const Productdata = useSelector((store) => store.productData.productdata);
    const [count, setCount] = useState([1]);
    const [filter, setfilter] = useState([]);
    const [search,setSearch]=useState(["title",""])
    useEffect(() => {
        console.log(filter);
        axios
          .get(
            `http://localhost:5000/product?page=${page}&sort=${sort}&filter=${filter}&search=${search}`
          )
          .then((res) => {
            console.log(res.data);
            dispatch(ProductData(res.data.Products));
            let num = res.data.count;
            let count = [];
            for (let i = 1; i <= num; i++) {
              count.push(i);
            }
            setCount([...count]);
          });
    }, [page,sort,filter,search]);

    useEffect(() => {
        setSearchParams({ page, sort,filter,search });
    }, [page, sort,filter,search, setSearchParams]);

    return (
      <div>
        <select
          onChange={(e) => {
            {
              e.target.value === ""
                ? setfilter(["", ""])
                : setfilter(["category", e.target.value]);
            }
          }}
          name=""
          id=""
        >
          <option value="">Filter By Category</option>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">Womens</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <select
          onChange={(e) => {
            {
              e.target.value === ""
                ? setSort(["_id", 1])
                : setSort(["price", e.target.value]);
            }
          }}
          name=""
          id=""
        >
          <option value="">Sort By Price</option>
          <option value="1">Low to High</option>
          <option value="-1">High to Low</option>
        </select>
        <input
          onChange={(e) => {
            setSearch(["title",e.target.value]);
          }}
          type="text"
          name=""
          id=""
        />
        <div className="container">
          {Productdata.length > 0 &&
            Productdata.map((ele) => (
              <div className="productcard">
                <img src={ele.image} alt="" />
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
                <div>
                  <span>{ele.price}</span>
                </div>
              </div>
            ))}
        </div>
        {page !== 1 ? (
          <button
            button
            onClick={() => {
              setPage((prev) => (prev > 1 ? prev - 1 : 1));
            }}
          >
            prev
          </button>
        ) : (
          " "
        )}
        {count.length > 0 &&
          count.map((ele) => (
            <button
              onClick={() => {
                setPage(ele);
              }}
            >
              {ele}
            </button>
          ))}

        {page !== count.length ? (
          <button
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next
          </button>
        ) : (
          " "
        )}
      </div>
    );
}
