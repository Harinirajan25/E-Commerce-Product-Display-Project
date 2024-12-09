# Fetch API Example with Product Display

This project demonstrates how to use JavaScript's `fetch` API to make asynchronous HTTP requests to an API and display product data dynamically on a webpage. It uses `Promises` for handling asynchronous data, with a fallback error handler.

## Features
- Fetches product data from a remote API (`https://fakestoreapi.com/products`).
- Displays products in a card format with details such as title, description, price, and image.
- Each product has an "Add to Cart" button (no functionality added for the cart yet).
- Styled with CSS for card design and responsiveness.

## Technologies Used
- HTML
- CSS
- JavaScript (Fetch API, Promises)

## How It Works

1. **Fetch Products**: The `fetch` function is used to retrieve data from the fake store API.
2. **Display Products**: The product data (such as title, price, and description) is dynamically displayed in cards.
3. **Error Handling**: If the fetch request fails (e.g., due to an incorrect API URL), an error message is displayed in the console.

## Example Fetch Call

```js
let prom = fetch("https://fakestoreapi.com/products");
let str = "";

prom.then((data) => {
    return data.json();
})
.then((data) => {
    data.map((element) => {
        str += `<div class="content">
            <h1>Title: ${element.title}</h1>
            <img src=${element.image} width="60vw" height="100vh">
            <p>Description: ${element.description}</p>
            <h4>Price: ${element.price}</h4>
            <button>Add to Cart</button>
        </div>`;
    });
    const card = document.getElementById("container");
    card.innerHTML = str;
})
.catch(() => {
    console.log("Error fetching data");
});
## How to Run
Download or clone this repository.
Open index.html in your browser.
Check the console for any error logs or fetched data.
License
This project is open-source and available under the AHinfotechLicense.
