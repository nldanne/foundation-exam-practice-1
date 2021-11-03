'use strict';

const fs = require('fs');

let myfile: string = './lyrics.txt';

function writeLyrics(filname: string) :void {
  let content: string = fs.readFileSync(filname, 'utf8');
  let contentArr: string[] = content.split(/\r\n/);
  let subString: string[][] = [];

  for (let i: number = 0; i < contentArr.length; i++) {
    subString[i] = [];
    subString[i].push(contentArr[i]);
  }

  let wordArr: string[][] = [];
  let myString: string = '';

  for (let j: number = 0; j < subString.length; j++) {

    wordArr[j] = [];
     for (let k: number = 0; k < subString[j].length; k++) {

       if (j === 0){   // 1st day
         wordArr[j].push(subString[j][k].substring(0, 8) + 'st' + subString[j][k].substring(8));

       } else if (j === 1) {   // 2nd day
        wordArr[j].push(subString[j][k].substring(0, 8) + 'nd' + subString[j][k].substring(8));

       } else if (j === 2) {   // 3rd day
         wordArr[j].push(subString[j][k].substring(0, 8) + 'rd' + subString[j][k].substring(8));

       } else if (j >= 3 && j <= 8) {   //4th to 9th
        wordArr[j].push(subString[j][k].substring(0, 8) + 'th' + subString[j][k].substring(8));

       } else {  //10th to 12th
        wordArr[j].push(subString[j][k].substring(0, 9) + 'th' + subString[j][k].substring(9));
       }
   
     }
   }
  
  myString = wordArr.join('\n');
  //console.log(myString);
 
   fs.writeFileSync('output.txt', myString);
  //console.log(subString[0]);
  //console.log(subString[1]);
  //console.log(subString[2]);

}

writeLyrics(myfile);
