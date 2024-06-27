import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const removeFromCart = (productId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
        toast.error("Item removed from cart.");
    };

    const changeQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        dispatch({
            type: "CHANGE_QUANTITY",
            payload: { id: productId, quantity: newQuantity },
        });
        toast.info("Item quantity updated.");
    };

    return (
        <div className="container mx-auto p-4 text-white">
            <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="text-lg">Your cart is empty.</p>
            ) : (
                <div className="overflow-x-auto rounded-lg">
                    <table className=" min-w-full bg-white rounded-lg border-gray-200 shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Product</th>
                                <th className="py-3 px-6 text-center">Price</th>
                                <th className="py-3 px-6 text-center">
                                    Quantity
                                </th>
                                <th className="py-3 px-6 text-center">Total</th>
                                <th className="py-3 px-6 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {cart.map((item) => (
                                <tr
                                    key={item.id}
                                    className=" border-gray-200 hover:text-amber-500"
                                >
                                    <td className="py-3 px-6 text-left flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-12 h-12 object-cover rounded mr-4"
                                        />
                                        <Link
                                            to={`/products/${item.id}`}
                                            className="hover:underline "
                                        >
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        ${item.price}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                changeQuantity(
                                                    item.id,
                                                    parseInt(e.target.value)
                                                )
                                            }
                                            className="w-16 text-center border border-gray-300 rounded-md"
                                            min="1"
                                        />
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <Button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                                            aria-label="Remove item from cart"
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 text-right">
                        <p className="text-2xl font-semibold">
                            Subtotal: ${subtotal.toFixed(2)}
                        </p>
                        <Button
                            className="mt-4 bg-amber-500 hover:bg-amber-700 px-6 py-2 rounded-lg text-lg"
                            aria-label="go to checkout"
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
