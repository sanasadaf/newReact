import boysUniform1 from './assets/clotheImg/boysuniform/boysuniform1.jpg'
import boysUniform2 from './assets/clotheImg/boysuniform/boysuniform3.jpg'
import Dress1 from './assets/clotheImg/dresses/dress3.jpg'
import Dress2 from './assets/clotheImg/dresses/dress1.jpg'
import GirlsUniform1 from './assets/clotheImg/girlsuniform/uniform8.jpg'
import GirlsUniform2 from './assets/clotheImg/girlsuniform/uniform2.jpg'
import Jeans1 from './assets/clotheImg/jeans/jeans4.jpg'
import Jeans2 from './assets/clotheImg/jeans/jeans8.jpg'
import Pants1 from './assets/clotheImg/pants/pant8.jpg'
import Pants2 from './assets/clotheImg/pants/pant4.jpg'
import Shirt1 from './assets/clotheImg/shirts/shirt1.jpg'
import Shirt2 from './assets/clotheImg/shirts/shirt9.jpg'
import Skirt1 from './assets/clotheImg/skirts/skirt4.jpg'
import Skirt2 from './assets/clotheImg/skirts/skirt5.jpg'
import Sweater1 from './assets/clotheImg/sweaters/sweater10.jpg'
import Sweater2 from './assets/clotheImg/sweaters/sweater8.jpg'
import tShirt1 from './assets/clotheImg/tshirts/tshirt3.jpg'
import tShirt2 from './assets/clotheImg/tshirts/tshirt5.jpg'
//booksData  imports
import circe from './assets/BooksImages/fantasy/circe.png'
import courtofwinter from  './assets/BooksImages/fantasy/court of winter.png'
import Drift from './assets/BooksImages/fiction/Drift.png'
import Foulhearthuntsman from './assets/BooksImages/fiction/Foul heart huntsman.png'
import birdbox from './assets/BooksImages/horror/bird box.png'
import darkvalley from './assets/BooksImages/horror/dark valley.png'
import AManLayDead from './assets/BooksImages/mystery/AManLayDead.png'
import CrimeAndPunishment from './assets/BooksImages/mystery/CrimeAndPunishment.png'
import PeerEKamil from './assets/BooksImages/novels/peer e kamil.png'
import UmraoJaanAdda from './assets/BooksImages/novels/umrao jan adda.png'
import ACurseFromTheTrueLove from './assets/BooksImages/romance/A curse for true love.png'
import WitchOfwildThings from './assets/BooksImages/romance/witch of wild things.png'
import Dune from './assets/BooksImages/science fiction/hyperion.png'
import Ice from './assets/BooksImages/science fiction/frankenstien.png'
import Chaos from './assets/BooksImages/suspense/our sisters grave.png'
import LoriFoster from './assets/BooksImages/suspense/lori foster.png'
import FiveBadDeeds from './assets/BooksImages/thriller/five bad deeds.png'
import DeathInTheDarkWoods from './assets/BooksImages/thriller/death in the dark woods.png'

export const clothesData = [
  {
        id: 1,
        title: 'Black Wear',
        price: 5000,
        category: "Dresses",
        image: Dress1
    },
    {
        id: 2,
        title: 'Party Wear',
        price: 6000,
        category: "Dresses",
        image:Dress2
    },
    
    {
        id: 3,
        title: 'Causal Shirt',
        price: 1000,
        category: "Shirts",
        image:Shirt1
    },
    {
        id: 4,
        title: 'Floral Printed',
        price: 1500,
        category: "Shirts",
        image:Shirt2
    },
    {
        id: 5,
        title: 'Baggy Jeans',
        price: 2500,
        category: "Jeans",
        image:Jeans1
    },
    {
        id: 6,
        title: 'Denim jeans',
        price: 2000,
        category: "Jeans",
        image:Jeans2
    },
  
    {
        id: 7,
        title: 'Circle Skirt',
        price: 3000,
        category: "Skirts",
        image:Skirt1
    },
    {
        id: 8,
        title: 'Casual Mini Skater Skirt',
        price: 4000,
        category: "Skirts",
        image:Skirt2
    },
    {
        id: 9,
        title: 'Sabine pants',
        price: 6000,
        category: "Pants",
        image:Pants1
    },
    {
        id: 10,
        title: 'Cotton Check Pant',
        price: 2000,
        category: "Pants",
        image:Pants2
    },
    {
        id: 11,
        title: 'Long Sleeve T-Shirt',
        price: 1500,
        category: "T-Shirts",
        image:tShirt1
    },
    {
        id: 12,
        title: 'Mock Neck T-Shirt',
        price: 6000,
        category: "T-Shirts",
        image:tShirt2
    },
    
    {
        id: 13,
        title: 'Hogwarts Uniform',
        price: 6000,
        category: "Boys' Uniform",
        image:boysUniform1
    },
    {
        id: 14,
        title: 'Air Force Uniform',
        price: 5000,
        category: "Boys' Uniform",
        image:boysUniform2
    },
    {
        id:15 ,
        title: 'Jeonju Art High School',
        price: 6000,
        category: "Girls' Uniform",
        image:GirlsUniform1
    },
    {
        id: 16,
        title: 'DreamWeft Institute',
        price: 7000,
        category: "Girls' Uniform",
        image:GirlsUniform2
    },
        {
            id:17 ,
            title: 'Brown Sweater',
            price: 6000,
            category: "Sweaters",
            image:Sweater1
        },
        {
            id: 18,
            title: 'Sequin Knit Fancy Sweater',
            price: 7000,
            category: "Sweaters",
            image:Sweater2
    }
]
export const booksData = [
{
    id: 1,
    title: 'Fantasy Books',
    price: 5000,
    category: "Fantasy",
    image: circe,
},
{
    id: 2,
    title: 'Fantasy Books',
    price: 6000,
    category: "Fantasy",
    image: courtofwinter,
},
{
    id: 3,
    title: 'Fiction Books',
    price: 6000,
    category: "Fiction",
    image: Drift,
},
{
    id: 4,
    title: 'Fiction Books',
    price: 7000,
    category: "Fiction",
    image: Foulhearthuntsman,
},
{
    id: 5,
    title: 'Horror Books',
    price: 4500,
    category: "Horror",
    image: birdbox,
},
{
    id: 6,
    title: 'Horror Books',
    price: 5500,
    category: "Horror",
    image: darkvalley,
},
{
    id: 7,
    title: 'Mystery Books',
    price: 4000,
    category: "Mystery",
    image: AManLayDead,
},
{
    id: 8,
    title: 'Mystery Books',
    price: 4500,
    category: "Mystery",
    image: CrimeAndPunishment,
},
{
    id: 9,
    title: 'Novels',
    price: 5500,
    category: "Novels",
    image: PeerEKamil,
},
{
    id: 10,
    title: 'Novels',
    price: 6000,
    category: "Novels",
    image: UmraoJaanAdda,
},
{
    id: 11,
    title: 'Romance Books',
    price: 5000,
    category: "Romance",
    image: ACurseFromTheTrueLove,
},
{
    id: 12,
    title: 'Romance Books',
    price: 5500,
    category: "Romance",
    image: WitchOfwildThings,
},
{
    id: 13,
    title: 'Science Fiction Books',
    price: 6500,
    category:     "Science-Fiction",
    image: Dune,
},
{
    id: 14,
    title: 'Science Fiction Books',
    price: 7000,
    category:"Science-Fiction",
    image: Ice,
},
{
    id: 15,
    title: 'Suspense Books',
    price: 6000,
    category: "Suspense",
    image: Chaos,
},
{
    id: 16,
    title: 'Suspense Books',
    price: 6500,
    category: "Suspense",
    image: LoriFoster,
},
{
    id: 17,
    title: 'Thriller Books',
    price: 5500,
    category: "Thriller",
    image: FiveBadDeeds,
},
{
    id: 18,
    title: 'Thriller Books',
    price: 6000,
    category: "Thriller",
    image: DeathInTheDarkWoods,
},
];