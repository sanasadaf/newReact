import { types, onSnapshot, getSnapshot, applySnapshot } from "mobx-state-tree";
import { clothesData, booksData } from "../data";

const Item = types.model("Item", {
  id: types.identifier,
  name: types.string,
  category: types.string,
  price: types.number,
  image: types.string,
});

const Store = types
  .model("Store", {
    selectedTab: types.optional(types.string, "home"),
    selectedCategory: types.maybeNull(types.string),
    selectedItems: types.array(types.reference(Item)),
    allData: types.array(Item),
    filteredData: types.array(types.reference(Item)),
    cartItems: types.array(types.reference(Item)),
  })
  .actions((self) => ({
    setSelectedTab(tab) {
      self.selectedTab = tab;
    },
    setSelectedCategory(category) {
      self.selectedCategory = category;
    },
    setSelectedItems(items) {
      self.selectedItems = items;
    },
    filterData() {
      let data = [];
      if (self.selectedTab === "clothes") {
        data = clothesData;
      } else if (self.selectedTab === "books") {
        data = booksData;
      }
      self.allData = data;

      const updatedFilteredData = self.selectedCategory
        ? data.filter(
            (item) =>
              item.category.toLowerCase() ===
              self.selectedCategory.toLowerCase()
          )
        : data;

      self.filteredData = updatedFilteredData;
    },
    addToCart(item) {
      const existingItem = self.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        self.cartItems.push({ ...item, quantity: 1 });
      }
    },
    clearCart() {
      self.cartItems = [];
    },
  }))
  .views((self) => ({
    get totalPriceInCart() {
      return self.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    get cartItemsCount() {
      return self.cartItems.reduce((count, item) => count + item.quantity, 0);
    },
    get selectedItemsNames() {
      return self.selectedItems.map((itemId) =>
        self.allData.find((item) => item.id === itemId)?.name
      );
    },
  }));

const storeInstance = Store.create({
  selectedTab: "home",
  selectedCategory: null,
  selectedItems: [],
  allData: [],
  filteredData: [],
  cartItems: [],
});


onSnapshot(storeInstance, (snapshot) => {
  console.log(snapshot);
});

storeInstance.setSelectedTab("books");
storeInstance.filterData();
storeInstance.addToCart(storeInstance.allData[0]);

export { storeInstance };
