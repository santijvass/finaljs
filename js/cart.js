const notification = (text, color) =>
{
    Toastify({
        text: text,
        className: "info",
        style: {
          background: "#fff",
          color: color
        }
      }).showToast();
}

const loadEvents = (total) =>
{   
    const btn = document.querySelector('#checkout');
    btn.addEventListener('click', ()=>{
        localStorage.removeItem('cart'); 
        if(total > 0)
        {
            const message = 'Compra finalizada su total es de $' + total;
            notification(message, "#00a650");
            setTimeout(() => {
                window.location.href = "index.html"; 
            }, 4000);
        }
        else
        {
            const message = 'No tenes productos en el carrito!';
            notification(message, "	#ff0000");
        }
    });

    
    const deleteButtons = document.querySelectorAll('.delete-button');
    for (const button of deleteButtons)
    {   
        button.addEventListener('click', ()=>{
            const newCart = shopCart.filter(element => element.id != button.id);
            localStorage.setItem('cart', JSON.stringify(newCart)); 
              notification('Producto eliminado con éxito!', "#00a650");
              setTimeout(() => {
                  location.reload(true); 
              }, 2000);
        })
    }
}

const updateCart = (cart) =>
{
    let cartContainer = document.querySelector('#cart');
    
    let container = document.getElementById("cartContainer");
    if(container)
    {
        container.parentNode.removeChild(container);
    }
    let div = document.createElement('div');
    div.setAttribute('id','cartContainer');
    div.innerHTML += ` <h2>Carrito de compras</h2>`;
    for (const product of cart)
    {
        div.innerHTML += `
            <div class="cart-item">
                <h4>Producto: ${product.name}</h4>
                <h4>Precio por unidad: $${product.price}</h4>
                <h4>Cantidad: ${product.quantity}</h4>
                <button class="delete-button button" id="${product.id}">Eliminar</button>
            </div>
        `;
    }
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    div.innerHTML += `
        <div class="cart-item">
            <h4>Total: $${total.toFixed(2)}</h4>
        </div>
    `;
    div.innerHTML += ` <button class="button" id="checkout">Finalizar compra </button>`;
    cartContainer.appendChild(div);
    loadEvents(total);
}

const shopCart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart(shopCart);