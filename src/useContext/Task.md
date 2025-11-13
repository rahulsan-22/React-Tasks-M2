TASK IS TO SHARE THE DATA FROM App.jsx to Student.jsx

1)Create a folder called useContext inside src
2)Create Components like Management.js , BranchHead.jsx , Trainer.jsx , Student.jsx
3)Insert Student.jsx --> Trainer.jsx --> BranchHead.jsx --> App.jsx
4)Create a Context called SundayContext using createContext() inside Management.js
5)Inside App.jsx
--> Create a useState() which take initial Value as "Management:This sunday classes will be there"
Ex: let [sunday,setSunday] = useState("Management:This sunday classes will be there 😎")
-->Pass the sunday value through SundayContext.Provider through value attribute
-->Create a button called Click to know the decision of students.
-->On Clicking the button sunday value should be changed to "These people dont have any other work but we have other important work so lets skip the classes".
6)Inside Student.jsx consume the data using useContext()
