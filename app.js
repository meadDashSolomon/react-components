const { useState }  = React;

const groceryItems = ["fruit", "vegetables", "drinks"]

const GroceryListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    fontWeight: isHovered ? 'bold' : 'none',
  };

  return (
    <li style={style} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {props.item}
    </li>
  );
}

const GroceryList = (props) => {
  return (
    <ul>
      <h2>Groceries</h2>
      {props.groceryItems.map((item) => (
          <GroceryListItem item={item} />
        ))}
    </ul>
  );
}

ReactDOM.render(
  <GroceryList groceryItems={groceryItems} />,
  document.getElementById("app")
);