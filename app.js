const container = document.getElementById("container");
const formSubmit = document.querySelector("form");
const inputName = document.getElementById("name");
const inputRadio = document.getElementsByName("flexRadioDefault");
const inputSelect = document.getElementById("select");
const inputDate = document.getElementById("date");
const inputTel = document.getElementById("phone");
const loading = document.getElementById("loading");

let Character = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "i",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

formSubmit.addEventListener("submit", (e) => {
  inputcontrol();
  e.preventDefault();
});

function inputcontrol(e) {
  let inputControl = [];
  [...inputName.value].forEach((e) => {
    if (!Character.includes(e.toLowerCase())) {
      inputControl.push(e);
    }
  });
  console.log(inputControl);
  if (
    inputControl.length > 0 ||
    inputName.value.length < 6 ||
    inputName.value.length > 12
  ) {
    let dangerMesaj = ` 
      <div class="alert alert-danger alert" role="alert" id="alert">
      Should have a name input that; has min 6 chars, has max 12 chars, doesnt allow special chars.
      </div>
      `;
    container.innerHTML += dangerMesaj;

    setTimeout(() => {
      document.getElementById("alert").remove();
      window.location.reload(false);
    }, 2000);
  } else {
    radioControl();
  }
  //   inputName.value = "";
}

function radioControl() {
  //Radio Kontrol
  let kontrol = [];
  for (let i = 0; i < inputRadio.length; i++) {
    if (inputRadio[i].checked == true) {
      console.log(inputRadio[i].value);
      kontrol.push(inputRadio[i].value);
    }
  }
  if (kontrol.length == 0) {
    let dangerMesaj = ` 
    <div class="alert alert-danger" role="alert" id="alert">
    Should have a gender input
    </div>
    `;
    container.innerHTML += dangerMesaj;
    setTimeout(() => {
      document.getElementById("alert").remove();
      window.location.reload(false);
    }, 2000);
  } else {
    inputDateControl();
    
    console.log("oldu");
  }
}

function inputDateControl(){
  if(inputDate.value.length === 0) {
    let dangerMesaj = ` 
    <div class="alert alert-danger" role="alert" id="alert">
    Please,enter date!
    </div>
    `;
    container.innerHTML += dangerMesaj;
    setTimeout(() => {
      document.getElementById("alert").remove();
      window.location.reload(false);
    }, 2000);
  }else {
    inputTelControl();
  }
}

function inputTelControl() {
  if(inputTel.value.length === 0){
    let dangerMesaj = ` 
    <div class="alert alert-danger" role="alert" id="alert">
    Please,enter Phone Number!
    </div>
    `;
    container.innerHTML += dangerMesaj;
    setTimeout(() => {
      document.getElementById("alert").remove();
      window.location.reload(false);
    }, 2000);
  }else {
    container.style.display = "none";
    loading.style.display = "block"
    setTimeout(() => {
      window.location.href = "https://github.com/D1183-Mustafa";
    },2000)
    
  }
  

}
