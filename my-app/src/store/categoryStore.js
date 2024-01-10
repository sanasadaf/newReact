import { makeAutoObservable } from "mobx";

class CategoryStore {
  selectedCategory = null;
  categoryImages = {
    Fantasy: [
      "circe.png",
      "court of winter.png",
    ],
    Fiction: [
      "Drift.png",
      "Foul heart huntsman.png",
    ],
    Horror: [
      "bird box.png",
      "dark valley.png",
    ],
    Mystery: [
      'AManLayDead.png',
      'CrimeAnd Punishment.png',
    ],
    Novels: [
      'peer e kamil.png',
      'umrao jan adda.png',
    ],
    Romance: [
      'A curse for true love.png',
      'witch of wild things.png',
    ],
   ScienceFiction: [
    'dune.png',
    'ice.png',
   ],
    Suspense: [
      'chaos.png',
      'here in the dark.png',
    ],
    Thriller: [
      'death in the dark woods.png',
      'five bad deeds.png',
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
  }

  getCategoryImages(category) {
    return this.categoryImages[category] || [];
  }
}

const categoryStore = new CategoryStore();
export default categoryStore;
