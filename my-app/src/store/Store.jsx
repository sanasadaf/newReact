import { makeAutoObservable } from "mobx";
import { clothesData, booksData } from "../data";

class AppStore {
  selectedTab = "home";
  selectedCategory = null;
  selectedItems = [];
  allData = [];
  filteredData = [];
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
    this.filterData();
  }

  setSelectedTab(tab) {
    this.selectedTab = tab;
    this.filterData();
  }

  filterData() {
    if (this.selectedTab === "clothes") {
      this.allData = clothesData;
    } else if (this.selectedTab === "books") {
      this.allData = booksData;
    } else {
      this.allData = [];
    }

    this.filteredData = this.selectedCategory
      ? this.allData.filter(
          (item) =>
            item.category.toLowerCase() === this.selectedCategory.toLowerCase()
        )
      : this.allData;
  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
    this.filterData();
  }

  setSelectedItems(items) {
    this.selectedItems = items;
  }
  addToCart(item) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}

const appStore = new AppStore();
export default appStore;