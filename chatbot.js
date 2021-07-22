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

  else if(question.value === "갸라도스 잡으러 가자!"){
      message.innerHTML = 
      message.innerHTML = `갸라! <br> <img src = "http://appdata.hungryapp.co.kr/images/dbimg/pokemongo/thumb/130.png" background: transparent, width: 30px>`
      var app = document.getElementById("app");

      var typewriter = new Typewriter(app, {
        loop: false,
      });
        typewriter
        .typeString('야생의 갸라도스가 나타났다!')
        .pauseFor(600)
        .deleteAll()
        .start();
  }

  else if(question.value === "명령어") {
    console.log(question.value);
    console.log(list);
    message.innerHTML = "🌸 너는 누구야? <br> 🌸 누가 만들었어? <br> 🌸 오늘 날씨 어때? <br> 🌸 다른 친구는 어딨어? <br> 🌸 불좀 꺼줄래? <br>⚔️ 갸라도스 잡으러 가자!";
  }
  
  else {
    console.log(question.value);
    message.innerHTML = "뭐라고?";

    var app = document.getElementById("app");

    var typewriter = new Typewriter(app, {
      loop: false,
    });
  typewriter
    .typeString('죠르디가 알아듣지 못한 것 같다.')
    .pauseFor(600)
    .deleteAll()
    .typeString('<strong>명령어</strong> 라고 입력해보자!')
    .pauseFor(1300)
    .deleteAll()
    .start();
  }
}

function sendMyText(e) {
  if (e.key === 'Enter') { // Enter 키를 입력 받으면
    btn();  // btn() 함수 실행
  }
}

// 이벤트 핸들러 등록
question.addEventListener('keypress', sendMyText);

