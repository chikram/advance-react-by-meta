const allMeal = [
  {
    id: "1",
    title: "Baryani",
    description: "very delicious ",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fchicken-dum-biryani%2Frs54308405.cms&psig=AOvVaw3Awtkm9t01vU0HUyQIJRWc&ust=1702661542209000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODvy9q6j4MDFQAAAAAdAAAAABAE",
    price: "230",

  },
  {
    id: "2",
    title: "pizza",
    description: "very testy",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fpizza&psig=AOvVaw2nH-BeEDZMBHsp36lHAkTH&ust=1702661735105000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKjVsra7j4MDFQAAAAAdAAAAABAE",
    price: "1230",

  },
  {
    id: "3",
    title: "Cake",
    description: "Pine Apple",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.faridabadcake.com%2Fproduct-category%2Fpineapple-cakes%2F&psig=AOvVaw0bsj3d6MpdKIcGuWNaScHn&ust=1702661826442000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCj2vi7j4MDFQAAAAAdAAAAABAE",
    price: "1030",

  }
]

function App() {
  const listItems = allMeal.map(meal => {
    const itemText = `${meal.title} - ${meal.description} - ${meal.price}`
    return (<li>{itemText}</li>)
  })
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
