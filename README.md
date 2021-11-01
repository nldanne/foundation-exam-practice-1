# Foundation Exam Practice 0.1
The following exercises were curated to help you practice for the Foundation exam.
These may not follow the same level of difficulty compared to the real thing, 
but more so to give you an opportunity to practice your coding skills in a similar setup.

## Getting Started

- **Fork** this repository under your own account
- Clone your forked repository to your computer
- Create a `.gitignore` file so generated files won't be committed
- Commit your progress frequently and with descriptive commit messages
- All your answers and solutions should go in this repository
- Take care of style guide
- Take care of the naming of classes, fields, variables, files, etc.
- Change the visibility of this repository from Public to Private

## Exercises


### Diagonal Matrix

Create a function `diagonalMatrix` that takes a matrix as a parameter and returns the diagonal of that matrix. 
The original matrix should remain the same.

Write 1 unit test case.

#### Example 1

Input

```text
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Output

```text
[
  [1, 0, 0],
  [0, 5, 0],
  [0, 0, 9]
]
```


### Twelve Days of Christmas

Write a method `writeLyrics` which can read and parse a file containing the wrong lyrics of the song 
Twelve days of Christmas.

The method takes a `fileName` as a parameter.

The method should append the correct ordinal suffix for the days written in the lyrics. 
The method should save the correct lyrics in a new text file called *`output.txt`*.

Rules of Ordinal Suffixes in this case: 
- fir --> first
- seco --> second
- thi --> third
- four --> fourth
- fif --> fifth
- six --> sixth
- etc.

If the file is not found, it should write the following to the console: `File not found: `*`filename`*

[The file can be found here.](./lyrics.txt)


### Christmas cookies yumyum

Your task is to create a program where Santa gets to eat
cookies made by kids he is visiting during Chritmas Eve.

The program should have a `Santa`, a `Kid`, `Cookie`, `GingerBread`, `SnickerDoodle`, and `ChocoChip` classes.

Create a parent class where it's necessary for them.


#### Cookie

- A cookie has a `type` and `bakingTime`
  - there are three types of Christmas cookies: `GingerBread`, `SnickerDoodle`, and `ChocoChip`
  - the baking time for the gingerbread cookies is **3** hours
  - the baking time for the snickerdoodle cookies is **1** hours
  - the baking time for the chocochip cookies is **2** hours
 

#### Kid

- A kid has a `name`, `age`, `mood`, `freeTime` and `cookieAmount`
  - a kid is either happy or sad
 
- New kids can be created by providing the `name`, `age`.
  Every kid is **happy**,has **4** hours to do whatever they want, and **0**  cookies by default.
  
- It has a `bakeCookies` method that takes a `cookieType` as a paramater and makes the Kid bake the sepcified type of cookies of course.
  - a kid will make cookies if he is *happy* and has enough *freeTime* to bake them 
  - if the baking went successfully, the method should update the number of cookies by 10
  - otherwise, it should remain 0

- It has a `play` method that takes away *2 hours* from a kid's free time.

- It has an `introduce` method which returns an information about the kid.
  For example:

  - `My name is Bob, I am 10 years old. I made 12 cookies for Santa!`
  - `My name is Alice, I am 12 years old. I don't have cookies for Santa.`


#### Santa
- A santa has a `name`, `age`, `cookieAmount`, `cookieLimit`, and a `listOfKids`

- New santa can be created by providing the `name`, `age`.
  - our santa is on a diet, so his intake of cookies can't be more than **100**
  - our santa has an empty list of Kids by default.

- It has an `addKid` method that adds new kids to santa's list of Kids

- It has a `visit` method that lets him eat the cookies the kids' made for him, and returns the amount he has eaten.

- It has an `introduce` method which returns an information about santa.
  For example:

  - `My name is Nicholas, I am 60 years old. I ate 10 cookies, and I can eat much more HOHOHO!`
  - `My name is Claus, I am 54 years old. I didn't cookies this evening.`
