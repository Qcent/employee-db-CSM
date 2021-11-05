// import Prompts/Questions object and methods
const DB_Questions = require("./lib/prompts");



const displaySplashScreen = () => console.log(`
                     .,,uod8B8bou,,.
             ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||        ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗   
         !.......:!?|||||!!^^""'            ||||        ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝   
         !.........||||                     ||||        █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
         !.........||||  Welcome            ||||        ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
         !.........||||    User             ||||        ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
         !.........||||                     ||||        ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
         !.........||||                     ||||
         !.........||||                     ||||    ███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗███╗   ███╗███████╗███╗   ██╗████████╗
         \`.........||||                    ,||||    ████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝
          .;.......||||               _.-!!|||||    ██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║   
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'     ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║ 
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     \`.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"\`;:::       \`.         ██████╗  █████╗ ████████╗ █████╗ ██████╗  █████╗ ███████╗███████╗
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
\`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo. ██║  ██║███████║   ██║   ███████║██████╔╝███████║███████╗█████╗
  \`..........:::::::::::::::::::::::;iof688888888888b.     \`YBBBP^ ██║  ██║██╔══██║   ██║   ██╔══██║██╔══██╗██╔══██║╚════██║██╔══╝
    \`........::::::::::::::::;iof688888888888888888888b.     \`     ██████╔╝██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║███████║███████╗
      \`......:::::::::;iof688888888888888888888888888888b.         ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
        \`....:::;iof688888888888888888888888888888888899fT!  
          \`..::!8888888888888888888888888888888899fT|!^"'   
            \`' !!988888888888888888888888899fT|!^"' 
              \`!!8888888888888888899fT|!^"'
                \`!988888888899fT|!^"'
                  \`!9899fT|!^"'
                    \`!^"'
`);

const displayGoodBye = () => {

    console.log(`
                                     .,;;;;;;;,.
                                   ,;;;;;;;,/;;;;
                  .,aa###########@a;;;;;/;;;,//;;;
         ..,,,.,aa##################@a;//;;;,//;;;
      ,;;;;;;;O#####OO##############OOO###a,/;;;;'
    .;;//,;;;O####OOO##########OOO####OOO#####a'
   .;;/,;;/;OO##OO#######################OOO####.
   ;;;/,;;//OO#######OOO###########OOO###########.          ██████╗  ██████╗  ██████╗ ██████╗     ██████╗ ██╗   ██╗███████╗██╗
   \`;;//,;,OOO#########OO#########OO##############.        ██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗    ██╔══██╗╚██╗ ██╔╝██╔════╝██║
  ;. \`\`\`\`\`\`OOO#####;;;;;;OO#####OO;;;;;;######O####.       ██║  ███╗██║   ██║██║   ██║██║  ██║    ██████╔╝ ╚████╔╝ █████╗  ██║
.;;,       OOO###O;;' ~\`;##OOOOO##;' ~\`;;O#####OO###       ██║   ██║██║   ██║██║   ██║██║  ██║    ██╔══██╗  ╚██╔╝  ██╔══╝  ╚═╝
;;;;    ,  OOO##O;;;,.,;O#########O;,.,;;;O####OO###,      ╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝    ██████╔╝   ██║   ███████╗██╗
\`;;'   ,;; OOO##OO;;;;OOO(???????)OOO;;;;OO####OO###%,      ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝     ╚═════╝    ╚═╝   ╚══════╝╚═╝
   \`\\  ;;; \`OOO#####OOOO##\?????/##OOOO#######O####%O@a   
     \,\`;'  \`OOO####OOO######;######OOO###########%O###,    
     .,\\      \`OO####OO"#####;#####"OO##########%oO###O#;   
   ,;;;; \\   .::::OO##OOOaaa###aaaOOO#######',;OO##OOO##;,                                                                                              
  .;;''    \:::.OOaa\`###OO#######OO###'::aOO.:;;OO###OO;::.
  '       .::\.OO####O#::;;;;;;;;;;;;::O#O@OO.::::::::://::
         .:::.O\########O#O::;;;::O#OO#O###@OO.:;;;;;;;;//:,
        .:/;:.OO#\#########OO#OO#OO########@OO.:;;;;;;;;;//:
       .://;;.OO###\##########O#############@OO.:;;;;;;;;//:.
       ;//;;;;.O'//;;;;;;\##################@OO.:;;;;;;;;//:..
      ;//:;;;;:.//;;;;;;;;;#################@OO.:;;;;;;;;;//..
      ;;//:;;;:://;;;;;;;;;################@OO.:/;;;;;;;;;//..
      \`;;;;;:::::::ooOOOoo#\############@OOO.;;//;;;;;;;;;//.o,
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
`);
};

const startQuestions = () => {
    DB_Questions()
        .then(response => {
            console.clear();

            if (response.primary != "Exit") startQuestions();
            else displayGoodBye();
        });
};


console.clear();
displaySplashScreen();

startQuestions();