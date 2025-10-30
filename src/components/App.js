import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [search, setSearch] = useState("");

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      {/* ✅ Only ONE Filter here */}
      <Filter search={search} onSearchChange={handleSearchChange} />

      {/* ✅ Only ONE ShoppingList (which already includes ItemForm) */}
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;


