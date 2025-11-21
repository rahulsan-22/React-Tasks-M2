1)Create a folder called CombinedTask inside src
2)Create files like Context.js,StudentCard.jsx into CombinedTask Folder
3)Inside Context.js 
--create a context using createContext() and store it a variable called ThemeContext
--Insert the ThemeContext.Provider in such a place where all other components come under it.
4)Inside App.jsx
--Create a state which takes initial value as light 
  Ex:const [theme, setTheme] = useState("light");
--Create a button on clicking which state should toggle from light to dark and dark to light
--Create array of objects
Ex:
const students = [ 
  { id: 1, name: "Rahul", branch: "MECH", score: 85 },
  { id: 2, name: "Pavan", branch: "CIVIL", score: 72 }, 
  { id: 3, name: "Monty", branch: "CIVIL", score: 90 }
];
--Send the theme state through Provider using value attribute
--Itterate the students array of object and send the data through props for <StudentCard> Component i.e name,branch and score
--Inside each <StudentCard>, pass extra info using children:
Example:
<StudentCard>
  <p>All the best!</p>
</StudentCard>
5)Inside StudentCard.jsx component
--It must receive props:name,branch,score,children
--Display name using JSX expressions
--If score ≥ 80 → show: "Status: Passed" Else → show: "Status: Failed" (Use ternary operator)
--Create a local state using useState() and pass initial value as false
--Show/hide student score using a button → "Show Score" / "Hide Score"
--Finally you need to display name,branch,Status: {score >= 80 ? "Passed" : "Failed"},button and theme

