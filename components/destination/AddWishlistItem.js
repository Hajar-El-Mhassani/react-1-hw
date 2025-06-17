"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );

  const [wishlistItemName, setWishlistItemName] = useState("");

  const onThumbnailSelect = (event) => {
    onThumbnailChange(event.target.value);
  };

  const onAddItemPressed = () => {
    setWishlistItemName(wishlistItemName.trim());

    if (!wishlistItemName) {
      alert("Please enter a name for the wishlist item.");
      return;
    }

    // call the onAddWishlistItem here
    onAddWishlistItem(wishlistItemName, thumbnail);
    setWishlistItemName(""); // Clear the input field after adding
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishlistItemName}
        onChange={(event) => setWishlistItemName(event.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        onChange={onThumbnailSelect}
        value={thumbnail}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
