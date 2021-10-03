const getDb = () => localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : {};

const updateDb = (db) => localStorage.setItem('shopping-cart', JSON.stringify(db));

const removeTheCart = () => localStorage.removeItem('shopping-cart');

const addToCart = (key) => {
  let db = getDb();
  if (db) {
    if (key in db) {
      db[key] = db[key] + 1;
    } else {
      db[key] = 1;
    }
  } else {
    db = {};
    db[key] = 1;
  }
  updateDb(db);
}
const deleteSingleProduct = (key) => {
  let db = getDb();
  if (key in db) {
    delete db[key];
  } else {
    console.error('there is no key in database named ' + key)
  }
  updateDb(db);
}

const getTheStoredCart = () => {
  let db = getDb();
  return Object.keys(db);
}
export { addToCart as add, deleteSingleProduct as remove, removeTheCart as emptyCart, getTheStoredCart as storedCarts };