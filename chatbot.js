const question = document.querySelector("#question");
const message = document.querySelector("#message");
const list = {
  jordi : "너는 누구야?",
  kled : "누가 만들었어?",
  weather : "오늘 날씨 어때?",
  chunsik : "다른 친구는 어딨어?"
}

var n = 0;

function btn(){
  if(question.value === list.jordi){
      console.log("저는 죠르디에요 ❤️");
      message.innerHTML = "저는 죠르디에요 ❤️";
  }
  else if(question.value === list.kled){
      console.log("Kled님이 만들었어요 :)");
      message.innerHTML = "Kled님이 만들었어요 :)";
  }
  else if(question.value === list.weather){
      console.log("오늘은 습한 날씨네요 ☔️");
      message.innerHTML = "오늘은 습한 날씨네요 ☔️";
  }
  else if(question.value === list.chunsik){
      message.innerHTML = '<a href="https://competent-payne-da6f41.netlify.app/chunsik.html" target="_blank" color=black>여기 여기!</a>';
  }
  else if(question.value == "불좀 꺼줄래?"){
    if(n == 0){
      n++;
      message.innerHTML = "하아암..";
    }
    else if(n == 1){
      n++;
      message.innerHTML = "귀찮네..";
      document.body.style.backgroundColor = '#606060';
    }
    else{
      message.innerHTML = "그만..!";
    }
  }
  else if(question.value === "이제 불 켜줘"){
      message.innerHTML = "짠!"
      document.body.style.backgroundColor = '#ffffff';
    }
  else if(question.value === "명령어") {
    message.innerHTML = "너는 누구야? <br> 누가 만들었어? <br> 오늘 날씨 어때? <br> 다른 친구는 어딨어? <br> 불좀 꺼줄래?";
  }
  
  else {
    message.innerHTML = "뭐라고? <br> ('명령어' 라고 입력해보세요!)";
  }
}