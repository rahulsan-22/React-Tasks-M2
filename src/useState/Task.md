Create a folder called useState into src and create a component called State.jsx into it

Inside State.jsx make use of useState() hooks and achieve the below scenario
⸻

1) String State
 • Create a string state variable called studentName with the initial value "Pavan".
 • Add a button that toggles the name between "Pavan" and "Monty".

⸻

2) Number State
 • Create a number state variable called score with the initial value 0.
 • Add two buttons:
 • Increment Score → increases the score by 5
 • Decrement Score → decreases the score by 5

⸻

3) Boolean State
 • Create a boolean state variable called isLoggedIn with the initial value false.
 • Add a button that toggles the value between true and false.
 • Display “Logged In” or “Logged Out” based on the state.

⸻

4) Array State
 • Create an array state variable called skills with the initial value ["HTML"].
 • Add three buttons:
 • Add CSS → adds "CSS" to the skills array
 • Add JS → adds "JS" to the skills array
 • Clear Skills → makes the skills array empty
 • Display the skills on the screen.

⸻

5) Object State
 • Create an object state variable called profile with the initial value:
{ age: 20, city: "Hyderabad" }
 • Add two buttons:
 • Increase Age → increases the age by 1
 • Change City → toggles the city between "Hyderabad" and "Bangalore"
 • Display the age and city on the screen.

⸻

6) Array of Objects State
 • Create a state variable called todos with the initial value:
[ { id: 1, task: "Learn React" } ]
 • Add two buttons:
 • Add Todo → adds a new todo object with an incrementing id and a dummy task
 • Remove Last Todo → removes the last item from the array
 • Display all todos on the screen in a list.

⸻

--> Final Output Requirement

Your UI must display all the states on the screen:
 • Student name
 • Score
 • Login status
 • Skills list
 • Profile (age and city)
 • Todos list

All updates must work correctly when the corresponding buttons are clicked.