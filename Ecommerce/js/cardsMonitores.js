const productos = [
    
    {
        titulo: "Monitor Samsung Odyssey G4",
        descripcion: "Monitor Samsung Odyssey G4 S25BG40 25 pulgadas, IPS, 240Hz.",
        precio: 299.99,
        img: "/img/Monitor samsung.png"
    }
   
];

productos.forEach(producto => {
    const card = `
    <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><strong>$${producto.precio}</strong></p>
            <input type="number" value="1" min="1" class="quantity">
            <button class="btn btn-primary">Agregar al carrito</button>
        </div>
    </div>`;
    
    document.querySelector('.row').innerHTML += card;
});