export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      product,
    };
  };

  export const updateCartQuantity = (id, quantity) => {
    return {
      type: UPDATE_CART_QUANTITY,
      id,
      quantity,
    };
  };

  export const updateProducts = (products) => {
    return {
      type: UPDATE_PRODUCTS,
      products,
    };
  };

  export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    productId,
  });

  export const clearCart = () => ({
    type: CLEAR_CART,
  });

  export const toggleCart = () => ({
    type: TOGGLE_CART,
  });
  
  export const updateCategories = (categories) => ({
    type: UPDATE_CATEGORIES,
    categories,
  });
  
  export const updateCurrentCategory = (categoryId) => ({
    type: UPDATE_CURRENT_CATEGORY,
    categoryId,
  });

  export const addMultipleToCart = (products) => ({
    type: ADD_MULTIPLE_TO_CART,
    products,
  });