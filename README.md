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
