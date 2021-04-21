

const shopItems = document.querySelectorAll("div.shop-item")
const itemsArray = Array.from(shopItems)

function updateImage() {
    // Loops through all image elements and updates their src attribute 

    index = 1

    document.querySelectorAll('.shop-item-image').forEach(element => {
        element.src = `Images/Album${index}.png`
        index++;
    })
}

updateImage()


const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];


shopItems.addEventListener('click', () => albumAdd(item));

function albumAdd(item) {


    document.getElementById("cartItems").innerHTML += 
    `<div class = "cartAdd"> 
        <div><img class="shop-item-image" id="Album 1" alt = "Album 1 photo"></div>
        <div></div>
        <div></div>
    </div>`

    albums[inCart] = true;

}

