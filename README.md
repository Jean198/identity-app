# Visma identity-app documentation

This is my solution to the internship coding task by Visma solutions.

## TASK

### This is the way I understood the task

*Design and implement a class which is responsible for validating a string it receives as input. If the string passed to the class has scheme "visma-identity" the class will go on and process the string after the scheme. Otherwise the class should return an error("Invalid scheme for example") and the string won't be processed.*

*If the scheme is valid, the string after it should contains only one of the following paths(actions):* **login**, **confirm**, **sign** *which should have the following parameters respectively:* **source**, **source &paymentnumber**, **source & documentid**. *In other cases, the class should report some kind of error.*

*The class should return the "action" and the parameters with their values.*

## The class structure and a brief explanation of how it works

The class has five methods (constructor(), main(), login(), confirm() and sign()).

### The constructor() method.

- The **string** prompts the user to enter the string to be validated.
- The **results** is an object where I will be pushing the returned action and parameters.
- The **url**(object) is the output from the parsed **string**. From this object, I am interested in:

  -  The **protocol** which refered to as the **scheme** in the task.

  -  The **host** which refered to as the **action** in the task.

  -  The **query** which is refered to as **parameters** in the task.

### The main() method.

This method verifies if the **scheme** and the **action** are valid and
will call the method that matches the **action**. This is the method that will be called in the end for result display.

If either the scheme or the action is not valid, the method will return an error.

### The login(), confirm() and sign() methods.

These methods check if the number of parameters in the string and the names of parameters match the requirements for the action in question.
If all match, the methods will push the **action** and the **parameters**(with their values) to the **results** object and the **results** object is returned.

In other cases, the methods return an error!. 

The results will be printed to the console by calling the main() method.






### Challenges I had
- When I first read the task, the use of REGEX was the first thing I thought of for string validation, but as I kept reading the task, I realised that maybe REGEX is not the option for this task! I had to do some recap for Javascript classes, and spent some time trying to figure out the best way to parse the string.

- The use of the word "class" in the task has been a bit confusing for me. I could maybe have understood the task quickly if I was asked to implement a "function" !.

- The **url-parse** module extracts the scheme with colon(:), so for simplicity, I made the valid scheme ***visma-identity:***

### Improvements that can be made
- Maybe a parameter for identifying the user could be added to the string(ex: visma-identity://login?source=severa&userId=123). Right now there is no way to identify who wants to login.

## Development tools

- **Nodejs with JavaScript**

- **url-parse**(node): module(package) to convert a string/url into an object with several properties.

- **prompt-sync**: module(package) used to prompt inputs

- VSCode
