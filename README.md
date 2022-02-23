<font size="6"> **Visma identity-app documentation**</font> 

In this project I have attempted to solve the internship test by Visma

<font size="3"> **TASK:**</font>

This is the way I understood the task:
\
\
 Design and implement a class which is responsible for validating a string it receives as input. If the string passed to the class has scheme "visma-identity" the class will go on and process the string after the scheme. Otherwise the class should return an error("Invalid scheme for example") and the string won't be processed.
\
\
If the sheme is valid, the string after it should contains only one of the following paths(actions): "login", "confirm", "sign" which in return should have the following parameters respectively: "source", "source &paymentnumber", "source & documentid". In other cases, the class should report some kind of error.

\
\
The class should return the "action" and the "parameter value for the key"(probably the parameters and their values?)


<font size="3"> **Development tools**</font> 

- Nodejs with JavaScript
- npm package manager
