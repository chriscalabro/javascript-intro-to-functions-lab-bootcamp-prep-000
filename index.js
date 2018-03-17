// TEST 1
function shout(string)
{
  return string.toUpperCase()
}

shout.string("hello")

// TEST 2
function whisper(string)
{
  return string.toLowerCase()
}

string.whisper("HELLO")

// TEST 3
function logShout(string)
{
  var string = string.toUpperCase()
  console.log(string)
}

logShout("hello")

// TEST 4
function logWhisper(string)
{
  var string = string.toLowerCase()
  console.log(string)
}
logWhisper("HELLO")

// TEST 5 

var uppercase = "HELLO!"
uppercase.toUpperCase()===uppercase

var lowercase = "hello!"
lowercase.toLowerCase()===lowercase 

var mixedCase = "Hi there!"
mixedCase.toLowerCase()===mixedCase
mixedCase.toUpperCase()===mixedCase

function sayHiToGrandma(string){
  if(string.toLowerCase) return("I can't hear you!")
  if(string.toUpperCase) return("YES INDEED!")
  if(mixedCase) return("I love you")
}


function sayHiToGrandma(string)
{
  var myWord = 'hello'
  if(myWord.toLowerCase === myWord) {
    return`I can\'t hear you!`
  }
}
sayHiToGrandma("hello")

