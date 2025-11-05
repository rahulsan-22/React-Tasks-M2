1)Create a folder called Props into src
2)Create a Restaurant Component called Restaurant.jsx.
3)Restaurant.jsx component should accept props and render:
A <h2> element that displays the restaurants name.
A <p> element that displays the restaurants location.
A <p> element that displays the restaurants pincode.
Use props.name,props.location,props.pincode to display the dynamic values passed from the parent component.
4)Create a Dish Component called Dish.jsx.
5)Dish.jsx component should accept props and render:
A <h2> element that displays the one famous dish name.
A <p> element that displays the dish price.
Use props.name and props.price to display the values passed from the parent component.
6)Import both Restaurant.jsx and Dish.jsx into App.jsx
7)Inside the App component, pass dynamic data as props to both Restaurant and Dish components:
Pass name,location and pincode as props to the Restaurant component.
Pass name and price as props to the Dish component.