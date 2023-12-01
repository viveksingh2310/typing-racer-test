let sentence="Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus autem totam magnam obcaecati iste animi, nihil veritatis a voluptatem velit fugit est reprehenderit voluptate ipsam incidunt eligendi quas rerum dicta excepturi fugiat. Sed et fugit itaque accusantium ipsa sunt beatae vitae nobis molestiae tenetur.";
let sentenceDiv=document.querySelector('#sentence-div');
let startButton=document.querySelector("#start-btn");
let userInput=document.querySelector("#input-text");
let counterDiv=document.querySelector("#counter-div");
let scoreDiv=document.querySelector("#score-div");
userInput.disabled=true;
let timerCount=30;
let userInputText="";
let timerID=0;
function startTest(){
    userInput.disabled=false;
    startButton.disabled=true;
    sentenceDiv.textContent=sentence;
    userInput.focus();
    startCounter();
}
function endGame(){
  clearInterval(timerID);
  counterDiv.textContent="Time up!!";
  userInputText=userInput.value;
  calculateScore(userInputText,sentence);
  userInput.disabled=true;
  startButton.style.opacity=0;
//   sentenceDiv.textContent="Time Up!!"
}
function calculateScore(userInput,sentence){
    let userArr=Array.from(userInput);
    let sentenceArr=Array.from(sentence);
    let correctChar=0;
    let inputWord=userInput.split(' ');
    let sentenceWord=sentence.split(' ');
    let correctWord=0;
for(let i=0;i<inputWord.length;i++){
    if(inputWord[i]===sentenceWord[i]){
        correctWord++;
    console.log(inputWord[i]);
    }
}
let speed=(correctWord/timerCount).toFixed(0);
   
    for(let i=0;i<userArr.length;i++){
        if(userArr[i]==sentenceArr[i])
        correctChar++;
    }
    let accuracy=((correctChar/userArr.length)*100).toFixed(2);
    scoreDiv.textContent=`Accuracy:${accuracy}% Speed:${speed}wps`;



}
function startCounter(){
timerID=setInterval(()=>{
    counterDiv.textContent=`Ends in:${timerCount}`;
    timerCount-=1;
    if(timerCount<0){
      endGame();
    }
},1000);
}
startButton.addEventListener('click',startTest);

// userInput.focus();

