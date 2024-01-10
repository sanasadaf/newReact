
import { makeAutoObservable } from 'mobx';

class CategoryStore {
  selectedCategory = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
  }
}

const categoryStore = new CategoryStore();
export default categoryStore;
