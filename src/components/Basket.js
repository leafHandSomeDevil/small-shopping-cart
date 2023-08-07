import React from "react";

export default function Basket(props) {
  const { cartItem, onAdd, onRemove } = props;
  const itemsPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItem.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItem.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
      {cartItem.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">
              <strong>$</strong>
              {shippingPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">
              <strong>$</strong>
              {totalPrice.toFixed(2)}
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement Checkout")}>
              Check Out
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
