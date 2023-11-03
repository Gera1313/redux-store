import { idbPromise } from "../../utils/helpers";
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../utils/actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (itemId) => {
    dispatch(removeFromCart(itemId));
    idbPromise('cart', 'delete', { _id: itemId });
  };

  const updateQuantityHandler = (itemId, purchaseQuantity) => {
    if (purchaseQuantity === 0) {

      removeFromCartHandler(itemId);
    } else {

      dispatch(updateCartQuantity(itemId, purchaseQuantity));
      idbPromise('cart', 'put', { ...item, purchaseQuantity });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={(e) => updateQuantityHandler(item._id, parseInt(e.target.value))}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCartHandler(item._id)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
