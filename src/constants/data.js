import images from "./images";

const wines = [
    {
      title: 'Chapel Hill Shiraz',
      price: '$56',
      tags: 'AU | Bottle',
    },
    {
      title: 'Catena Malbee',
      price: '$59',
      tags: 'AU | Bottle',
    },
    {
      title: 'La Vieillw Rose',
      price: '$44',
      tags: 'FR | 750 ml',
    },
    {
      title: 'Rhino Pale Ale',
      price: '$31',
      tags: 'CA | 750 ml',
    },
    {
      title: 'Irish Guinness',
      price: '$26',
      tags: 'IE | 750 ml',
    },
];

const coffee = [
    {
      title: 'Espresso',
      price: '$56',
      tags: '400ml',
    },
    {
      title: 'Lattee',
      price: '$59',
      tags: '500ml',
    },
    {
      title: 'Macchiato',
      price: '$44',
      tags: '750 ml',
    },
    {
      title: 'Iced coffee',
      price: '$31',
      tags: '750 ml',
    },
    {
      title: 'Black coffee',
      price: '$26',
      tags: '750 ml',
    },
 
];

const award = [
  {
    imgUrl: images.award1,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    imgUrl: images.award2,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    imgUrl: images.award3,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    imgUrl: images.award4,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.'
  }
]

export default {
    wines,
    coffee,
    award
}