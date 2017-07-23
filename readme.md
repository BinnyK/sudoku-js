# Sudoku challenge
[Heroku demo](https://binny-sudoku.herokuapp.com/)

# Overview

* [Project brief](#project-brief)
* [Constraints](#constraints)
* [Technology stack](#technology-stack)
* [User stories](#user-stories)
* [Design process](#design-process)
    * Tech choice
	* Planning
	* Implementation
* [Challenges](#challenges)
* [Reflections](#reflections)
* [Next steps](#next-steps)

# Project brief

* Implement a client side sudoku app

# Constraints

* Between 3 - 6 hours to complete task
* Built without using an external sudoku library ( of course! )
* Own implementation of the game

# Technology Stack

* Javascript
* Jquery
* Mocha
* Chai
* Ramda

# User stories

1. As a user, I can enter starting sudoku values into a form, so that I start playing the game with those values.
2. As a user, I cannot edit any of the starting values so that it abides by sudoku rules.
3. As a user, I can edit any non starting value.
4. As a user, I can only enter the numbers 1-9.
5. As a user, I can click a 'solve' button that will solve the current sudoku board.
6. As a user, I can click a 'check' button that will tell me if the current board is valid.
7. As a user, I can click a 'clear' button that will clear the sudoku board.

# Design process

### Tech choice

* Vanilla js
    - The decision not to use a framework came mainly from the time constraint. I tried to stick to the advice of selecting the 'right tool for the job' and in this case it was vanilla js.
* jQuery
    - It became clear that jQuery would come in handy for the constant dom manipulation (see challenges)
* Mocha Chai
    - I wanted confidence in my code and so attempted a TDD approach to solving this challenge (see reflections)
* Ramda
    - Continuing my learning of Ramda js to compose and reuse smaller functions

### Planning

Part of the planning involved:

* Making decisions about the file/folder structure. Keeping things modular rather than hacking things together in one file.
* Breaking down the app into manageable parts based on functionality.
    - view layer of the sudoku board and buttons
    - formatting user input
    - populating and rendering sudoku board with input
    - resetting sudoku board
    - validating rows, columns and regions
    - solving the sudoku

### Implementation

Create an implementation order based on the features that build on top of each other

1. Format user input into multidimensional array
2. Create game board
3. Populate game board with initial values
4. Button to clear board
5. Editing cells
6. Check valid
7. Solve sudoku
8. Add styles (make it work first, then make it look good)

# Challenges

A list of challenges I faced:

* Input data
    - what type of data do I want to be manipulating?
    - a single string or multidimensional array?
* Game board
    - is it necessary to hard code all the table rows?
    - should I create 1 single row of cells that are formatted into a grid using CSS?
    - rather than hard coding, could I loop through and generate the cells using javascript?
* What is the best way to identify which row, column and region a cell belongs to?
    - is there a DRYer way to achieve this rather than using CSS id and classes?
    - could this be done using javascript objects?
    - could this have been passed using props? (with a framework like React)
* Validations
    - what is the most efficient way to calculate a row/col/reg is valid?
        - contains no duplicates?
        - contains all numbers 1-9?
        - how would validations need to be created so that you can check an unfinished game?
    - how do I get the current state of the board and format it ready for validation?
    - how do I deal with the '0's that exist in an unfinished game?

# Reflections

* TDD might have been a good thought but it may have been unnecessary in this situation as it added extra time that could have been spent on working on the challenge. If there was no time limit, TDD would be a great way to do it.
* As this was my first technical test, I didn't know if looking up solutions on Google was ok. I decided to try and attempt the challenge without looking for solutions as a learning opportunity. (However, in the real world, googling is probably the fastest and best way to attempt a problem like that)
* A framework like React may have been a good choice given it's ability to handle state. Using props to keep track of cell positions would have also been helpful in this situation.
* Rather than rushing into solving the challenge, I should have spent double the amount of time planning and thinking through how I would approach certain problems. e.g. validations using duplicates or numbers, dealing with '0's in the array.

# Next steps

Here is how I might attempt to solve the 'solve' and 'undo' buttons.

### Solve button
* For each cell, identify which row, col and region it belongs to.
* For each cell, determine its 'available numbers' by taking into account what is already in the row, col and regions.
* Start by finding the cell which has the least possible numbers to choose from
    - this is how we would solve a sudoku.
    - rather than going from left to right, we find the cell with least possible choices and go from there.
* Take a sample from the available numbers and add it to the cell.
* Keep track of each move using an array of objects

```
let moveHistory = [
    // top left cell
    {
        row: '1',
        col: '1',
        reg: '1',
        val: '3'
    },
    // bottom right cell
    {
        row: '1',
        col: '9',
        reg: '9',
        val: '2'
    }
]
```

* After adding a value to a cell, check that the current game board is still valid
    - VALID? determine again which cell has the least possible choices (could this be achieved through recursion?) and repeat the process
    - NOT VALID? using the history array, backtrack to the last decision and try a different number. repeat process
* Repeat the process.

### Undo button
* Using the moveHistory array, you could remove the value from the last move by using the row and column id's as a reference.
