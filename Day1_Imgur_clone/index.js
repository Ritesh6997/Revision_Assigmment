const arr = [ {
    background:"./images/img1.jpg",
    title:"Other",
    bg: "#51535a",
    post: "FEATURED . 43,153",
},
    {
    background:"./images/img2.jpg",
    title:"Aww",
    bg: "#51535a",
    post:"765",
},
    {
    background:"./images/img3.jpg",
    title:"Memes",
    bg: "#51535a",
    post:"212,384",
},
    {
    background:"./images/img4.jpg",
    title:"Gaming",
    bg: "#51535a",
    post:"534",
},
    {
    background:"./images/img5.jpg",
    title:"Funny",
    bg: "#51535a",
    post:"765,149",
},
    {
    background:"./images/img6.jpg",
    title:"Awesome",
    bg: "#51535a",
    post:"575,432",
},
    {
    background:"./images/img7.jpg",
    title: "Staff Picks",
    bg: "#51535a",
    post:"299,054",
    
    },
{
    background:"./images/img8.jpg",
    title: "Staff Picks",
    bg: "#51535a",
    post:"2,700,425",
    
    },
    {
    background:"./images/img9.jpg",
    title: "Oc",
    bg: "#51535a",
    post:"753,622",
    
},];
let appenddiv = document.getElementById("tag-containerbox");
let appendpostcontainer=document.getElementById("Post-Contianer")
function displayData() {
arr.map((ele => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.background;
    let h4 = document.createElement("h4");
    h4.innerText = ele.title;
    h4.style.color="white"
    let h3 = document.createElement("h5");
    h3.innerText = ele.post + " Post";
    h3.style.color="white"
    div.append(img, h4, h3);
    appenddiv.append(div);
})); 
}
displayData();

async function getData() {
    let res = await fetch("https://api.unsplash.com/photos/random?count=100&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME");
    let data = await res.json();
    console.log(data);
    showData(data);
};
getData();

function showData(data) {
    appendpostcontainer.innerHTML = "";
    data.map((ele => {
    
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.urls.small;
    let h4 = document.createElement("h4");
    h4.innerText = `likes: ${ ele.likes }`;
    h4.style.color="black"
    div.append(img, h4, );
    appendpostcontainer.append(div);
})); 
};
let settimeout;
function debouncing() {
    if (settimeout) {
        clearTimeout(settimeout);
    }
    settimeout=setTimeout(() => {
        searchData(); 
    },2000);
}

async function searchData() {
    let searchinput = document.getElementsByClassName("inp-div-search")[0].value;
    console.log(searchinput);
    console.log(searchinput)
    let res = await fetch(`https://api.unsplash.com/search/photos/?query=${searchinput}&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME
`);
    let data = await res.json();
    console.log(data);
    showData(data.results);
};


