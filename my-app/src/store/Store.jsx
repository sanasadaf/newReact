import { makeAutoObservable } from "mobx";
import { clothesData, booksData } from "../data";

class AppStore {
  selectedTab = "home";
  selectedCategory = null;
  selectedItems = [];
  allData = [];
  filteredData = [];
  // cartItems = [];


  constructor() {
    makeAutoObservable(this);
    this.filterData();
  }

  setSelectedTab(tab) {
    this.selectedTab = tab;
    this.filterData();
    console.log("Selected Tab:", tab);
    console.log("Filtered Data:", this.filteredData);
    // console.log('Cart Items:', this.cartItems);

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
    console.log("Filtered Data:", this.filteredData);
    console.log('Cart Items:', this.cartItems);

  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
    this.filterData();
  }

  setSelectedItems(items) {
    this.selectedItems = items;
  }
  // addToCart(item) {
  //   this.cartItems.push(item);
  //   console.log("Added to Cart:", item);
  // }
  // addToCart(item) {
  //   const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);

  //   if (existingItem) {
  //     existingItem.quantity += item.quantity;
  //   } else {
  //     this.cartItems.push(item);
  //   }
  // }
}

const appStore = new AppStore();
export default appStore;