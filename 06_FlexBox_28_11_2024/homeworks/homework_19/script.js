async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  displayProducts(data.products);
}

function displayProducts(products) {
  const gridContainer = document.getElementById("product-grid");

  products.forEach((product) => {
    const productCard = createProductCard(product);
    gridContainer.appendChild(productCard);
  });
}

function createProductCard(product) {
   
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = product.images[0];
    image.alt = product.title;

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h2');
    title.textContent = product.title;

    const description = document.createElement('p');
    description.textContent = product.description;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `$${product.price}`;

    content.appendChild(title);       
    content.appendChild(description);
    content.appendChild(price);       
    card.appendChild(image);  
    card.appendChild(content); 

    return card; 
}

fetchProducts();
