function Word(text){
    this.text = text;
}

function Verb(text,kana,type,kanji,definition,group){
    this.text = text;
    this.kana = kana;
    this.type = type;
    this.kanji = kanji;
    this.definition = definition;
    this.group = group;
    this.teForm = teForm(text,type);
    this.kanaTeForm = teForm(kana,type);
    this.negativeForm = negativeForm(text,type)
    this.kanaNegativeForm = negativeForm(kana,type)
    this.masuForm = masuForm(text,type);
    this.kanaMasuForm = masuForm(kana,type);
    this.potentialForm = potentialForm(text,type);
    this.kanaPotentialForm = potentialForm(kana,type);
    this.passiveForm = passiveForm(text,type);
    this.kanaPassiveForm = passiveForm(kana,type);
    this.causativeForm = causativeForm(text,type);
    this.kanaCausativeForm = causativeForm(kana,type);
    this.causativePassiveForm = causativePassiveForm(text,type);
    this.kanaCausativePassiveForm = causativePassiveForm(kana,type);
    verbs[verbs.length] = this;
}

Verb.prototype = new Word;

function teForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "て";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
            case "る":
            case "つ":
                return strip + "って";
                break;
            case "く":
                return strip + "いて";
                break;
            case "ぐ":
                return strip + "いで";
                break;
            case "む":
            case "ぶ":
            case "ぬ":
                return strip + "んで";
                break;    
            case "す":
                return strip + "して";
                break;
        }
    } else {
        
    }
}

function negativeForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "ない";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "わない";
                break;
            case "る":
                return strip + "らない";
                break;
            case "つ":
                return strip + "たない";
                break;
            case "く":
                return strip + "かない";
                break;
            case "ぐ":
                return strip + "がない";
                break;
            case "む":
                return strip + "まない";
                break;
            case "ぶ":
                return strip + "ばない";
                break;
            case "ぬ":
                return strip + "なない";
                break;    
            case "す":
                return strip + "さない";
                break;
        }
    } else {
        
    }
}
function masuForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "ます";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "います";
                break;
            case "る":
                return strip + "ります";
                break;
            case "つ":
                return strip + "ちます";
                break;
            case "く":
                return strip + "きます";
                break;
            case "ぐ":
                return strip + "ぎます";
                break;
            case "む":
                return strip + "みます";
                break;
            case "ぶ":
                return strip + "びます";
                break;
            case "ぬ":
                return strip + "にます";
                break;    
            case "す":
                return strip + "します";
                break;
        }
    } else {
        
    }
}

function potentialForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "られる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "える";
                break;
            case "る":
                return strip + "れる";
                break;
            case "つ":
                return strip + "てる";
                break;
            case "く":
                return strip + "ける";
                break;
            case "ぐ":
                return strip + "げる";
                break;
            case "む":
                return strip + "める";
                break;
            case "ぶ":
                return strip + "べる";
                break;
            case "ぬ":
                return strip + "ねる";
                break;    
            case "す":
                return strip + "せる";
                break;
        }
    } else {
        
    }
}

function passiveForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "られる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "われる";
                break;
            case "る":
                return strip + "られる";
                break;
            case "つ":
                return strip + "たれる";
                break;
            case "く":
                return strip + "かれる";
                break;
            case "ぐ":
                return strip + "がれる";
                break;
            case "む":
                return strip + "まれる";
                break;
            case "ぶ":
                return strip + "ばれる";
                break;
            case "ぬ":
                return strip + "なれる";
                break;    
            case "す":
                return strip + "される";
                break;
        }
    } else {
        
    }
}

function causativeForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "させる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "わせる";
                break;
            case "る":
                return strip + "らせる";
                break;
            case "つ":
                return strip + "たせる";
                break;
            case "く":
                return strip + "かせる";
                break;
            case "ぐ":
                return strip + "がせる";
                break;
            case "む":
                return strip + "ませる";
                break;
            case "ぶ":
                return strip + "ばせる";
                break;
            case "ぬ":
                return strip + "なせる";
                break;    
            case "す":
                return strip + "させる";
                break;
        }
    } else {
        
    }
}

function causativePassiveForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "させられる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "わせられる";
                break;
            case "る":
                return strip + "らせられる";
                break;
            case "つ":
                return strip + "たせられる";
                break;
            case "く":
                return strip + "かせられる";
                break;
            case "ぐ":
                return strip + "がせられる";
                break;
            case "む":
                return strip + "ませられる";
                break;
            case "ぶ":
                return strip + "ばせられる";
                break;
            case "ぬ":
                return strip + "なせられる";
                break;    
            case "す":
                return strip + "させられる";
                break;
        }
    } else {
        
    }
}


//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////




//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////


function decreaseBar(speed,amount){

    var countdown = setInterval(function () {

      if(levelBarWidth > 0){
        levelBarWidth -= amount
        $('.level.inner').css('width',levelBarWidth); 
      } else {
        levelBarWidth = 0  
        $('.level.inner').css('width',0);
        endGame()  
      }    
    }, speed);
    
    return countdown;
}

function flashText(object,speed,final){
    object.css("opacity",0);
    setTimeout(function(){
        object.css("opacity",1);
        setTimeout(function(){
            object.css("opacity",0)
                setTimeout(function(){
                    object.css("opacity",1);
                        setTimeout(function(){
                            object.css("opacity",0)
                            setTimeout(function(){
                                object.css("opacity",1);
            if(final === 'off') {
            setTimeout(function(){
            object.css("opacity",0);
            },speed);
            }
                         },speed);
                     },speed);
                },speed);
        },speed);
    },speed); 
};


function updateValues(){

    for (i=0;i<currentlyStudying.length;i++){
        if(currentlyStudying[i][0]===1){conjNumber=i}
    }
    currentConjugation = currentlyStudying[conjNumber][1]
    conjJapanese = currentlyStudying[conjNumber][2]

    $("#form-name").html('Change to '+ conjJapanese + "-form:");
    $("#question").html(verbs[verbPosition].text);
    $("#kana").html(verbs[verbPosition].kana);

    $("#stat-main .number").html("<br>" + statMain);
    $("#stat1 .number").html(stat1);
    $("#stat2 .number").html(stat2);

    $("#stat-bar-number").html(statBar);
    $('#stat-bar-inner').css('width',statBarWidth);

    $("input[name=answer]").val("");

}

//------bonus bar structure----///

function Multiplier(multiply,color){
    this.multiply = multiply;
    this.color = color;
    multipliers[multipliers.length] = this
}

var multipliers = new Array()

var start = new Multiplier(1,'#EC1739')
var first = new Multiplier(1.2,'#E12B81')
var second = new Multiplier(1.5,'#37C556')
var third = new Multiplier(2,'#A210A2')
var fourth = new Multiplier(3,'#FFAD30')
var fifth = new Multiplier(5,'#FFAD30')

function multiplierCalculations(ease,text,div){
    
    var prevMultiplierLevel = multiplierLevel;
    
    multiplierLevel = Math.floor(streak/ease); 
    var multiplierProgress = ((streak/ease) - multiplierLevel);
    
    if (multiplierLevel > 4) {
        multiplierLevel = 5; 
        multiplierProgress = 1;
    }    
    var multiplier = multipliers[multiplierLevel].multiply
      
    if (prevMultiplierLevel !== multiplierLevel ){
        flashText(text,100)
        div.css('background-color',multipliers[multiplierLevel].color); 
    };

    return multiplier;
    
}

function sidebarManager(){

    $('#sidebar-trigger-area').animate({top: "+=60"},500)
    $("#sidebar-trigger-area").mouseenter(function(event) {
        $("#sidebar").animate({left: "-=300"},300)
        for(i=1;i<8;i++){
        $(".sub.num"+i).animate({top: "+="+70*i},600)
        }
    });    
    $("#sidebar").mouseleave(function(event) {
        $("#sidebar").animate({left: "1300"},500)
        for(i=7;i>0;i--){
        $(".sub.num"+i).animate({top: "0"},500)
        }
    });

    for(i=1;i<8;i++){
        $(".sub.num"+i).click(function(){
            $(".sub").css("background-color","#fafafa")
            $(this).css("background-color","#2FAA8F")
            active = $(this).attr('id')
            for(i=0;i<currentlyStudying.length;i++){
                currentlyStudying[i][0]=0
                if(currentlyStudying[i][1]===active){
                    currentlyStudying[i][0]=1}
            }
        initializeGame()
        });
    }
}

function popupManager(){

    setInterval(function(){
        if($("#popup").css("display") !== "none"){
            $(document).mousemove( function(e) {
                mouseX = e.pageX; 
                mouseY = e.pageY;
                $("#popup").css("top",mouseY-80)
                $("#popup").css("left",mouseX+20)
            });
        }
    },500) 


    $(".popup").mouseenter(function(){
            $(document).mousemove( function(e) {
                mouseX = e.pageX; 
                mouseY = e.pageY;
                $("#popup").css("top",mouseY-80)
                $("#popup").css("left",mouseX+20)
            });
        $("#popup").css("display","inline-block")
            $(this).mouseleave(function(){
                $("#popup").css("display","none")
            }); 

    });   
}

function popupData(){
        var output = "<p class = 'pop-char'>" + verbs[verbPosition].kanji + "</p>"
        + "<p class = 'pop-text'>" + verbs[verbPosition].kana + "<br>"
        + verbs[verbPosition].definition + "</p><table class = 'pop-table'>"
        for(i=0;i<7;i++){output += "<tr><td>" + currentlyStudying[i][2] + "-form:</td><td>" + verbs[verbPosition][currentlyStudying[i][1]] + "</td></tr>"}
        $("#popup").html(output)

}

function wrongAnswers(verb,conjugation,number){
       // methods //
    function wrong(type){
        switch (type) {
            case 1:
            //delete//
                var correctSelection = verbs[verb][conjugation]
             return wrongSelection = correctSelection[0] + correctSelection.substring(2,correctSelection.length)
            break;
            case 2:
            //change ending
                var correctSelection = verbs[verb][conjugation]
                var lastKeta = correctSelection[correctSelection.length-1]
                    switch (lastKeta){
                        case "る":
                            return wrongSelection = verbs[verb][conjugation].replace("る","た")
                        break;
                        case "て":
                            return wrongSelection = verbs[verb][conjugation].replace("て","た")
                        break;
                        case "で":
                            return wrongSelection = verbs[verb][conjugation].replace("で","て")
                        break;
                        default:
                            return false
                        break;
                    }
            break;
            case 3:
            //wrong conjugation
                var wrongConj = Math.floor(Math.random()*7)
                    if (wrongConj===conjNumber){return false}
                return wrongSelection = verbs[verb][currentlyStudying[wrongConj][1]]
            break;
            case 4:
            //switch characters
                var correctSelection = verbs[verb][conjugation]
                var correctLength = verbs[verb][conjugation].length
                if (correctLength <=2){return false}
                var pos1 = 1 + (Math.floor(Math.random()*(verbs[verb][conjugation].length-1)))
                do {var pos2 = 1 + (Math.floor(Math.random()*(verbs[verb][conjugation].length-1)))
                } while (pos1 === pos2)
                var keta1 = correctSelection[pos1]
                correctSelection = correctSelection.substring(0,pos1) + correctSelection[pos2] + correctSelection.substring(pos1+1,correctSelection.length-1)
                return wrongSelection = correctSelection.substring(0,pos2) + keta1 + correctSelection.substring(pos2+1,correctSelection.length-1)
            break;
            case 5:
            //wrong verb type
                var lastKeta = verbs[verbPosition].text[verbs[verbPosition].text.length-1]
                    switch (lastKeta){
                        case "る":
                            var correctType = verbs[verbPosition].type
                                if (correctType === 1){ var wrongType = 2}else{var wrongType = 1}
                            return wrongSelection = window[currentConjugation](verbs[verbPosition].text,wrongType);
                        break;
                        case "く":
                            var wrongEnd = verbs[verbPosition].text.replace("く","ぐ")
                            return wrongSelection = window[currentConjugation](wrongEnd,verbs[verbPosition].type);
                        break;
                        case "ぐ":
                            var wrongEnd = verbs[verbPosition].text.replace("ぐ","く")
                            return wrongSelection = window[currentConjugation](wrongEnd,verbs[verbPosition].type);                        break;
                        default:
                            return false
                        break;
                    }
            break;
        };
    };
    //select
    var wrongArray = new Array()
        do{ 
            var wrongType = Math.floor(Math.random()*6);
            var possibility = wrong(wrongType);
            var unique = true
                if (possibility){
                    for(i=0;i<wrongArray.length;i++){
                        if(possibility === wrongArray[i]){unique = false}
                    }
                if (unique){wrongArray[wrongArray.length]= possibility}
                }
        } while (wrongArray.length < number);
    
    return wrongArray
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// input verbs //

var verbs = new Array()

var talk = new Verb('話す' , 'はなす' , 1 , '話' , 'to talk' , 'basic');
var write = new Verb('書く' , 'かく' , 1 , '書' , 'to write' , 'basic');
var swim = new Verb('泳ぐ' , 'およぐ' , 1 , '泳' , 'to swim' , 'basic');
var drink = new Verb('飲む' , 'のむ' , 1 , '飲' , 'to drink' , 'basic');
var play = new Verb('遊ぶ' , 'あそぶ' , 1 , '遊' , 'to play' , 'basic');
var die = new Verb('死ぬ' , 'しぬ' , 1 , '死' , 'to die' , 'basic');
var cut = new Verb('切る' , 'きる' , 1 , '切' , 'to cut' , 'basic');
var buy = new Verb('買う' , 'かう' , 1 , '買' , 'to buy' , 'basic');
var hold = new Verb('持つ' , 'もつ' , 1 , '持' , 'to hold' , 'basic');
var runAway = new Verb('逃げる' , 'にげる' , 2 , '逃' , 'to run away' , 'basic');
var give = new Verb('あげる' , 'あげる' , 2 , '×' , 'to give' , 'basic');
var eat2 = new Verb('食う' , 'くう' , 1 , '食' , 'to eat (masculine)' , 'basic');
var show = new Verb('見せる' , 'みせる' , 2 , '見' , 'to show' , 'basic');
var run = new Verb('走る' , 'はしる' , 1 , '走' , 'to run' , 'basic');
var eat = new Verb('食べる' , 'たべる' , 2 , '食' , 'to eat' , 'basic');
var leave = new Verb('出る' , 'でる' , 2 , '出' , 'to exit' , 'basic');

var currentlyStudying = [[1,"teForm","て"],[0,"negativeForm","ない"],
                        [0,"masuForm","ます"],[0,"potentialForm","Potential"],
                        [0,"passiveForm","Passive"],[0,"causativeForm","Causative"],
                        [0,"causativePassiveForm","Causative-Passive"]];


//declare general variables//
var verbPosition = Math.floor(Math.random()*verbs.length) ;
var previousVerbPosition = 1;

var conjNumber = 0
var currentConjugation = currentlyStudying[conjNumber][1]
var conjJapanese = currentlyStudying[conjNumber][2]

var answer = ""
var kanjiCorrect = ""
var kanaCorrect = ""

var correctCount = 0;
var totalCount = 0;
var percentage = 100;
var streak = 0;
var defaultScore = 100;
var score = 0;
var multiplier = 1;
var multiplierLevel = 0;
var gameTime = 0;
var remainingTime = 60;
var decreaseSpeed = 50;

var statBarWidth = 0;
var statBarMaxWidth = 350;
var levelBarWidth = 0;
var levelBarMaxWidth = 760;

var statMain = 0;
var stat1 = 0;
var stat2 = 0;
var statBar = 0;
var times = new Array()

//declare game types
function Game(name,stats){
    this.name = name;
    this.stats = stats;
    games[games.length] = this;   
};

var games = new Array()

var oneminute = new Game("?oneminute",["score","streak","multiplier","percentage"])
var survival = new Game("?survival",["time","streak","multiplier","percentage"])
var streaker = new Game("?streaker",["streak","correct","total","percentage"])
var adventure = new Game("?adventure",["level","attack","defence","experience"])

//_-_-_-__//_-_-_-__   -_-_-__//_-_-_-__   -_-_-__//_-_-_-__   -_-_-__//_-_-_-__    
               // GAME START //
//_-_-_-__  //_-_-_-__    //_-_-_-__    //_-_-_-__    //_-_-_-__    
//_-_-_-__  
//_-_-_-__  
//_-_-_-__  
//_-_-_-__    
//_-_-_-__    


function initializeGame(){
    gameTime = 0;
    streak = 0;
    score = 0;
    correctCount = 0;
    totalCount = 0;
    statMain = 0;
    statbar = 0;
    stat1 = 0;
    stat2 = 0;
    statBarWidth = 0;
    $("#stat1, #stat2").css("background-color","#EC173A")

    for (i=0;i<currentlyStudying.length;i++){
        if(currentlyStudying[i][0]===1){conjNumber=i}
    }
    currentConjugation = currentlyStudying[conjNumber][1]
    conjJapanese = currentlyStudying[conjNumber][2]

    $('#main-window *').css('display', 'none');
    $('#main-window *:not(#try-again').fadeIn(500);
    $("#form-name").html('Change to '+ conjJapanese + "-form:");
    $("#question").html(verbs[verbPosition].text);
    $("#kana").html(verbs[verbPosition].kana);
    $("input[name=answer]").focus();

    gameType = window.location.search

    for(i=0;i<games.length;i++){
        if (gameType === games[i].name){
            $("#stat-main .small").html(games[i].stats[0])
            $("#stat1 .small").html(games[i].stats[1])
            $("#stat2 .small").html(games[i].stats[2])
            $(".stat.bar.small").html(games[i].stats[3])
        }
    }

    for(i=0;i<times.length;i++){clearInterval(times[i])}

    times[times.length] = setInterval(function(){
        gameTime++
    },10)

    //declare game specific variables

    switch (gameType){
        case "?oneminute":
        levelBarWidth = levelBarMaxWidth;
        remainingTime = 60
        times[times.length] = decreaseBar(1000,levelBarMaxWidth/60);
        times[times.length] = setInterval(function(){
            $(".level.bar.number").html(remainingTime--)
            if(remainingTime<=0) endGame()
        },1000)
        break;

        case "?survival":
        levelBarWidth = levelBarMaxWidth;
        times[times.length] = decreaseBar(decreaseSpeed,1);
        times[times.length] = setInterval(function(){
            $("#stat-main .number").html("<br>" + Math.floor(gameTime/100));
        },100);
        $("input[name=answer]").css("display","none");
        $('#answers').remove()
        $("#form-name").after("<div class = 'holder' id='answers'/>")
        for (i=-0;i<4;i++){
            $("#answers").append("<div class = 'holder ansbutton' id='ans" + i + "'/>");
        }

        var answersArray = wrongAnswers(verbPosition,currentConjugation,3)
        answersArray.push(verbs[verbPosition][currentConjugation]);
        shuffleArray(answersArray);
        for (i=-0;i<4;i++){
                    $("#ans" + i ).html("<p>" + answersArray[i] + "</p>");
        }

        break;

        case "?streak":
        break;

        case "?adventure":
        var level = 1;
        var attack = 10;
        var defence = 10;
        var experience = 0;
        var experienceNeeded = level*1000;
        var HP = 1000;
        var enemyHP = 100;
        var critical = Math.floor((Math.random()/10))
        break;
    }

    updateValues()
}

function runGame(correct){

percentage = Math.floor(correctCount/totalCount*100)

    switch (gameType){
        case "?oneminute":
            multiplier = multiplierCalculations(3,$('#stat2 .small, #stat2 .number'),$('#stat2'))
            if(correct){  
                score += defaultScore*multiplier
            }; 
            statMain = score
            stat1 = streak
            stat2 = "x" + multiplier
            statBar = percentage + "%"
            statBarWidth = percentage*statBarMaxWidth/100
        break;

        case "?survival":
            var ease = (50/percentage)*3
            multiplier = multiplierCalculations(ease,$('#stat2 .small, #stat2 .number'),$('#stat2'))
            if(correct){  
                levelBarWidth += defaultScore*multiplier
            };
            if (levelBarWidth > levelBarMaxWidth) {levelBarWidth=levelBarMaxWidth}
            statMain = Math.floor(gameTime/100); 
            stat1 = streak;
            stat2 = "x" + multiplier;
            statBar = percentage + "%";
            statBarWidth = percentage*statBarMaxWidth/100;
            if(decreaseSpeed>=20){decreaseSpeed -= 2}
            clearInterval(times[1])
            times[1] = decreaseBar(decreaseSpeed*percentage/100,1)

            var answersArray = wrongAnswers(verbPosition,currentConjugation,3)
            answersArray.push(verbs[verbPosition][currentConjugation]);
            shuffleArray(answersArray);
            for (i=-0;i<4;i++){
                        $("#ans" + i ).html("<p>" + answersArray[i] + "</p>");
            }
        break;

        case "?streak":
        break;

        case "?adventure":

        break;
    }


    updateValues()

}

function endGame(){

    switch (gameType){

    case "?oneminute":
        if(gameTime/100 >= 60){
            for(i=0;i<times.length;i++){clearInterval(times[i])}
            $(".level.bar.number").fadeOut(500)
            $("#try-again").fadeIn(500)
            $("#try-again").click(function(){
                initializeGame();
            });
        }
    break;

    case "?survival":
        if(levelBarWidth <= 0){
            for(i=0;i<times.length;i++){clearInterval(times[i])}
            $("#try-again").fadeIn(500);
            $("#try-again").click(function(){
                initializeGame();
            });
        }
    break;

    case "?streak":

    break;

    case "?adventure":

    break;
}

}

function innerWorkings(answer){
    //recieve answer
    totalCount++
    kanjiCorrect = verbs[verbPosition][currentConjugation]
    kanaCorrect = verbs[verbPosition]["kana"+
        currentConjugation.substring(0,1).toUpperCase()+
        currentConjugation.substring(1,currentConjugation.length)]
    
        //choose next verb
        previousVerbPosition = verbPosition;
        do {
            verbPosition = Math.floor
            (Math.random()*verbs.length);       
        } while (previousVerbPosition === verbPosition);
        //check answer
        if (answer === kanjiCorrect || answer === kanaCorrect ) {     
            correctCount++;
            streak++;
            runGame(true)      
        } else {
            streak = 0;
            runGame(false)
        }  
    
    updateValues() 
    popupData()
}

//______________-------------____________-----------__________??????//

$(document).ready(function(){
    
    initializeGame()
    popupData()

        $(document).keydown(function(key){
            //check for enter press:
            if (key.which == 13 && $("#try-again").css("display")==="none") {
                innerWorkings($("input[name=answer]").val())
                //$("#form-name").html()     
            }
        });

        $(document).on("click",$(".ansbutton p"),function(e){
            if ($("#try-again").css("display")==="none") {
                var target = $(e.target), article;
                if(target.parents("div").hasClass("ansbutton")){innerWorkings(target.html())}
            };
        });


    sidebarManager() 

    popupManager()


});

