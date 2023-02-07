// use local storage to manage cart data
//docs: add a product to local storage
const addToDb = id => {
   //onno jaygay cart take array [] akare save kora hoy but aikhane object {} akare save kora hoyeche 🔽🔽
    let shoppingCart = {};

    //get the shopping cart from local storage
    //local storage a shopping-cart name a variable create kora hoyeche (ref:1) jaygay
    //so akhn aikhane shopping-cart name a variable ta get kora hoyeche
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart); //shoppingCart a localstorage er value ta assign kora hoilo
    }

    // add quantity
    //check kore dekhlo j , id ta pass kora hoice oita khuje pawa gelo kine
    const quantity = shoppingCart[id]; //aita shoppingCart.id mane objec but array notation a kora hoiche
    //jodi khuje pawa jay tahole oitar quantity baay ak jog kore dewa hoilo.
    //but initial obostha te to kono quantity e pawa jabe na so first a else block a jabe.
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1; //initial state a, or first time kono product add korar time a ai line a ashbe.
        // add new product. shoppingCart.id = 1;//shoppingCart[id] = 1;
        //or,shoppingCart = {id:1} --> j id pass kora hoice oita dea akta quantity add hobe
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart)); //ref:1
}

//docs: remove a product from local storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id]; //delete is a new object method which is used to delete a property from an object.
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

//docs: remove the shopping cart from local storage
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
};
