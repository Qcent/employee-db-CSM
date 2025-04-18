
# Employee Management CMS
 
 ![MIT](https://img.shields.io/badge/License-MIT-orange)  ![Node.js](https://img.shields.io/badge/Tech-Node.js-lightblue)  ![MySQL](https://img.shields.io/badge/Tech-MySQL-lightblue)  ![Inquirer](https://img.shields.io/badge/Tech-Inquirer-lightblue)  ![ASCII%20ART](https://img.shields.io/badge/Tech-ASCII%20ART-lightblue) 

## Description
Manage your Employee Database with this handy CLI program written for Node.js.  

Watch the Demo Video

[![Employee CMS Demo Video](./assets/images/app-demo-screenshot.png)](https://drive.google.com/file/d/1ud1KZ_CNDARp5RbqzryCK4uefCp-nGS0/view?usp=sharing "Employee CMS Demo Video")

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)
* [Good Bye](#good-bye)

## Installation

This program requires that the end user already has [`Node.js`](https://nodejs.org/en/) and [`MySQL`](https://www.mysql.com/) set up and running on their system.  
 Copy the repository files by running `git clone git@github.com:Qcent/employee-db-CMS.git`  
 Before you first run the program you will need to install the `npm` dependencies by typing `npm install`.\
  And then set up the database by connecting to your MySQL server and typing `source db/db.sql`\
 If you would like to load some mock data into the database type `source db/seeds.sql`

 The final step is to open `db/connection.js` and edit the `host`, `user`, and `password` strings to reflect the settings required by your MySQL server.

![Edit your settings](./assets/images/app-screenshot-2.png)

## Usage

Once finished with the initial setup merely type `node index.js` or `npm start` to run the application.  
 You will be greeted by the landing screen while, the app connects to the MySQL server, then presented with a list of option to choose from. 
 ![Landing Screen](./assets/images/app-screenshot-1.png)   
 Follow the on screen prompts to View / Create / Edit or Delete: Departments, Roles and Employees from your company database. 

## Credits
Big thanks goes out to the Hard Coding Developers responsible for the npm packages `Inquirer` and `MySQL2`, for making this and many other projects possible. I'd also like to extend my warm and heartfelt appreciation to Eric the TA. Whose patient soul and mindful eye helped reveal my broken logic and set me back on the path to glory! 

A T-pose and a tip of the hat are in order for [DanCRichards](https://github.com/DanCRichards) for providing his Computer themed ASCII art at https://github.com/DanCRichards/ASCII-Art-Splash-Screen.

As well as [Scarecrow](https://www.incredibleart.org/links/ascii/ScarecrowGifGalle.html) and his ASCII GIF gallery

Let's not forget the ASCII font man, [Pat Gillespie](http://patorjk.com/) and his amazing [ASCII font generating tool](https://patorjk.com/software/taag/)

Last minute Shout Out to [Mike McNeil](https://github.com/mikermcneil) author of [`fixture-stdout`](https://github.com/balderdashy/fixture-stdout), [bahmutov](https://github.com/bahmutov) for the [`console.table`](https://github.com/bahmutov/console.table) package, and [pp3nd3x](https://github.com/pp3nd3x) for creating [`ascii-box`](https://github.com/pp3nd3x/node-ascii-box). The three of which I combined to be able to wrap the output tables in a nice border.

## Questions

[GitHub: Qcent](https://github.com/Qcent)  
dquinn8@cogeco.ca

   
## License

MIT License

Copyright (c) 2021 Dave Quinn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
                 

     
## Good Bye
```
                                     .,;;;;;;;,.
                                   ,;;;;;;;,/;;;;
                  .,aa###########@a;;;;;/;;;,//;;;
         ..,,,.,aa##################@a;//;;;,//;;;
      ,;;;;;;;O#####OO##############OOO###a,/;;;;'
    .;;//,;;;O####OOO##########OOO####OOO#####a'
   .;;/,;;/;OO##OO#######################OOO####.
   ;;;/,;;//OO#######OOO###########OOO###########.      ██████╗  ██████╗  ██████╗ ██████╗ 
   `;;//,;,OOO#########OO#########OO##############.    ██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗ 
 ;.  ``````OOO#####;;;;;;OO#####OO;;;;;;######O####.   ██║  ███╗██║   ██║██║   ██║██║  ██║ 
.;;,       OOO###O;;' ~`;##OOOOO##;' ~`;;O#####OO###   ██║   ██║██║   ██║██║   ██║██║  ██║ 
;;;;    ,  OOO##O;;;,.,;O#########O;,.,;;;O####OO###,  ╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝ 
`;;'   ,;; OOO##OO;;;;OOO(???????)OOO;;;;OO####OO###%,  ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝  
   `\  ;;; `OOO#####OOOO##\?????/##OOOO#######O####%O@a   
     \,`;'  `OOO####OOO######;######OOO###########%O###,    ██████╗ ██╗   ██╗███████╗██╗  
     .,\      `OO####OO"#####;#####"OO##########%oO###O#;   ██╔══██╗╚██╗ ██╔╝██╔════╝██║ 
   ,;;;; \   .::::OO##OOOaaa###aaaOOO#######',;OO##OOO##;,  ██████╔╝ ╚████╔╝ █████╗  ██║ 
  .;;''    \:::.OOaa`###OO#######OO###'::aOO.:;;OO###OO;::. ██╔══██╗  ╚██╔╝  ██╔══╝  ╚═╝
  '       .::\.OO####O#::;;;;;;;;;;;;::O#O@OO.::::::::://:: ██████╔╝   ██║   ███████╗██╗
         .:::.O\########O#O::;;;::O#OO#O###@OO.:;;;;;;;;//:,╚═════╝    ╚═╝   ╚══════╝╚═╝
        .:/;:.OO#\#########OO#OO#OO########@OO.:;;;;;;;;;//:
       .://;;.OO###\##########O#############@OO.:;;;;;;;;//:.
       ;//;;;;.O'//;;;;;;\##################@OO.:;;;;;;;;//:..
      ;//:;;;;:.//;;;;;;;;;#################@OO.:;;;;;;;;;//..
      ;;//:;;;:://;;;;;;;;;################@OO.:/;;;;;;;;;//..
      `;;;;;:::::::ooOOOoo#\############@OOO.;;//;;;;;;;;;//.o,
      .;,,,.OOOOO############\#######@OOO.;;;//;;;;;;;;;;//;.OO,
     //;;.oO##################@\OOO.;;;;;;;;;;;;;;;;;;;;//;.oO#O,
    //;;;;O##############@OOO=;;;;//;;;;;;;;;;;;;;;;;;;//;.oO##Oo
    //::;;O#########@OOOOO=;;;;;;;//;;;;;;;;;;;;;;;////;.oO####OO
 .n.n.n.n\`;O########@OOOOO=;;;;;;;;;;///;;;;////////';oO########OO
.%%%%%%%%%,;;########@=;;;;=;;;;///////////////':::::::::.a######@
/%%%%%%%%%%.;;;;""""=:://:::::::::::::::::\::::::::::::://:.####@'
/%%%%%%%%%//.;'     =:://:::::::::::::::::::\::::::::::://:.###@'
 /%%%%%%%%//'        =:://::::::::;:::::::::::\:::::::://:.##@'
  /%%%%%%/             =:://:::;;:::::::::::::::\::::::::'
    ''''                 ''''''   ''''''''''''''''\''''
                                                    \
```
