//!promise inbuild js object
//promise to handle asynchronous operation
//promise will have two status
//!1-fullfiled
//!2-reject

// let pro1 = new Promise((resolve, reject) => {
//     let x = 5;
//     if (x == 5) {
//         // resolve("x is equal to 5")
//         resolve(x);
//     } else {
//         reject("x is  not equal to 5")
//     }
// })
// pro1.then((data) => {
//     console.log(data)
//     // console.log(pro1)
//     return data;


// }).then((data) => {
//     console.log(data + 1);

// })
//     .catch((data1) => {
//         console.log(data1)
//         console.log(pro1)
//     });


//!fetch
// it is inbuild method in js.
// it will make http request from server.
// it will return promise.

// let prom = fetch("https://fakestoreapi.com/products");
// console.log(prom)

// let str = ""


// prom.then((data) => {
//     console.log(data)
//     return data.json();

// }).then((data) => {
//     console.log(prom)
//     console.log(data)

//     data.map((e) => {
//         console.log(e)
//         str += `<div classname="card">

//         <h1>${e.title}</h1><br><br>
//         <img src=${e.image} width="100px" height="200px"><br>
//        <h3>${e.price}</h3>
//         <p>${e.description}</p>
//         <button>Add to card</button>

//         </div>`


//     })
//     console.log(str)
//     const card = document.getElementById("main");
//     card.style.border = "1px solid black";
//     card.style.display = "flex";
//     card.style.flexWrap = "wrap";
//     card.style.textAlign = "center";
//     card.style.gap = "1rem";
//     card.style.backgroundColor = "gray"

//     card.innerHTML = str;
// }).catch(() => {
//     console.log("error")
//     console.log(prom)
// })



// let prom = fetch("https://fakestoreapi.com/products");

// let str = "";

// prom
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);

//         data.forEach((e) => {
//             str += `
//                 <div class="card">
//                     <h1>${e.title}</h1><br>
//                     <img src="${e.image}" width="100px" height="200px"><br>
//                     <h3>$${e.price.toFixed(2)}</h3>
//                     <p>${e.description}</p>
//                     <button>Add to cart</button>
//                 </div>`;
//         });

//         const card = document.getElementById("main");
//         card.innerHTML = str;
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });




let prom = fetch("https://fakestoreapi.com/products");//promise is fulfilled by using then keyword.
// let prom=fetch("https://storeapi.com/products");//missing some word in the url link so catch will be printed
console.log(prom);
let str = ""

prom.then((data) => {
    console.log(data);
    return data.json();
})
    .then((data) => {
        console.log(data)
        //console.log(prom)
        data.map((element) => {
            str += `<div class="content">
       <h1>Title:${element.title}</h1>
       <img src=${element.image} width="60vw" height="100vh" marginLeft="60px">
       <p>Description:${element.description}</p>
       <h4>price:${element.price}</h4>
       <button>Add to a card</button>
        </div>`

        });
        // console.log(str);
        const card = document.getElementById("container")
        card.innerHTML = str;
    })
    .catch(() => {
        console.log("error");
        console.log(prom)
    })



// async function fetchProducts() {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         console.log(data);

//         let str = "";
//         data.forEach((e) => {
//             str += `
//                 <div class="card">
//                     <h1>${e.category}</h1>
//                     <h1>${e.title}</h1><br><br>
//                     <img src="${e.image}" width="100px" height="200px">
//                     <p>${e.description}</p>
//                     <button>Add to cart</button>
//                 </div>`;
//         });

//         const card = document.getElementById("card");
//         card.style.border = "1px solid black";
//         card.style.display = "flex";
//         card.style.flexWrap = "wrap";
//         card.style.textAlign = "center";
//         card.style.gap = "1rem";
//         card.innerHTML = str;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// fetchProducts();


// let placbe = "chennai"
// let key = "0d28d6d668961ee84e0f716719d82300"

// let prom = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`);
// console.log(prom);

// prom.then((data) => {
//     return data.json();
// })
//     .then((data) => {
//         console.log(Math.round(Number(data.main.temp) - 273))
//     })


// console.log("start")
// let num = 25
// async function checksr(params) {
//     console.log("a")
//     let place = "chennai"
//     let key = "0d28d6d668961ee84e0f716719d82300"
//     let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`);
//     console.log("b")
//     return res;

// }
// console.log("c")
// function checknum(a1) {
//     return new Promise((resolve, reject) => {
//         if (typeof a1 == "number") {
//             resolve("given values is number")
//         } else {
//             reject("given value is not number")
//         }
//     });

// }
// console.log("d");
// // let prom = checksr(num);
// // console.log("e")
// // console.log(prom)

// // prom.then((data) => {
// //     console.log(data)
// //     console.log(prom)
// res.then((data) => {
//     return data.json();
// })
//     .then((data) => {
//         console.log(Math.round(Number(data.main.temp) - 273))
//     })





// let place = "theni";
// let key = "bd70342f8ead529e393b61a2f8896909"
// console.log("start")
// async function fun(p1, p2) {
//     let prom1 = await f1(p1, p2)
//     return prom1
// }
// function f1(a1, a2) {
//     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a1}&appid=${a2}`)
// }


// let pro = fun(place, key)
// pro
//     .then((data) => {
//         return data.json();
//     })
//     .then((data) => {
//         // console.log(data)
//         console.log(Math.round(Number(data.main.temp) - 273));
//         console.log(pro)
//     }).catch((data1) => {
//         // console.log(data1)
//         console.log("enter the city name")
//         console.log(pro)
//     });












