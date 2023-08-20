//KEY BUTTONS

const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  if (keyPressed === 'Backspace') {
    input.value = input.value.slice(0,-1)
  } else if (!isNaN(keyPressed) || ['+','-','*','/','.'].includes(keyPressed)) {
    if (input.value === "Enter number") {
      input.value = keyPressed;
    }
    else {
      input.value += keyPressed; 
    }
  }
});
//KEY BUTTONS


//ONCLICK BUTTONS

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (input.value === "Enter number") {
      input.value = button.value;
    } else {
      input.value += button.value;
    }
  });
});
//ONCLICK BUTTONS


// EQUALSTO FUNCTION WITH ENTER

function equalsTo() {
  const input = document.querySelector('.input');
  const expression = input.value;
  const result = eval(expression); // Use a safer way to evaluate expressions, such as using a library like `math.js`
  input.value = result;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Simulate a click on the equals button
    function equalsTo() {
      const input = document.querySelector('.input');
      const expression = input.value;
      const result = eval(expression); // Use a safer way to evaluate expressions, such as using a library like `math.js`
      input.value = ("Ans = ") + result ;
      if (!expression ) {
        input.value = "Enter number"
      }
    
        
      }
    }
    equalsTo();
  }
);
const equalsBtn = document.querySelector('.equal');
equalsBtn.addEventListener('click', equalsTo);
// EQUALSTO FUNCTION WITH ENTER



// CLEAR FUNCTION

function clear () {
  input.value = "Enter number";
}

const clrBtn = document.querySelector('.clr');
clrBtn.addEventListener('click',clear);
// CLEAR FUNCTION



// DARK MODE

const darkMode = document.querySelector('.db');

function dark() {
  //DARK theme
  if (darkMode.textContent === "Dark Mode") {
    const btn = document.getElementsByTagName('button');
    darkMode.textContent = "Light Mode";
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = '#565656';
      btn[i].style.color = 'oldlace';
    }
    const input = document.querySelector('.input');
    input.style.backgroundColor = 'silver';
    document.body.style.backgroundColor = '#15191d';
    // DARK theme

    // Light theme
  } else {
    if (darkMode.textContent === "Light Mode") {
      const btn = document.getElementsByTagName('button');
      darkMode.textContent = "Dark Mode";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = 'azure';
        btn[i].style.color = 'blue';
      }
      const input = document.querySelector('.input');
      input.style.backgroundColor = 'chartreuse';
      document.body.style.backgroundColor = 'white';
    // Light theme
    }
  }
}
darkMode.addEventListener('click', dark);
// DARK MODE


