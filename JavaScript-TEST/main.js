const button = document.querySelector('#button-res')

imgQuestion.addEventListener('click', function imgVerification(event) {
  const x = event.layerX
  const y = event.layerY
  console.log(imgQuestion.style)

  if (x >= 400 && x <= 420 && y >= 240 && y <= 250) {
    imgQuestion.style = 'border: 5px solid green'
  } else {
    imgQuestion.style = 'border: 5px solid red'
  }

})

button.addEventListener('click', function(event) {

  const inputsRadio = document.querySelectorAll('input[type="radio"]')
  const inputsCheckbox = document.querySelectorAll('input[type="checkbox"]')
  const inputsText = document.querySelectorAll('input[type="text"]')
  const selectsQuestion = document.querySelectorAll('select')
  const imgQuestion = document.querySelector('#imgQuestion')

  console.log(inputsRadio, inputsCheckbox, inputsText, selectsQuestion, imgQuestion)

  let score = 0

  const answersRadio = [
    ["2"],
    ["7"],
    ["13"],
    ["africa"],
    ["16"],
    ["21"],
    ["23"],
    ["30"]
  ]

  // ПРОВЕРКА С 1 ОТВЕТОМ

  inputsRadio.forEach(function (input) {
    answersRadio.forEach(function (answer) {
      if (input.checked && input.id == answer) {
        score++
      }
    })
  })

  // ПРОВЕРКА С НЕСКОЛЬКИМИ ОТВЕТАМИ

    if (inputsCheckbox[0].checked && inputsCheckbox[1].checked && !inputsCheckbox[2].checked) {
      score++
    }

    if (inputsCheckbox[3].checked && inputsCheckbox[4].checked && inputsCheckbox[5].checked) {
      score++
    }
    
    if (inputsCheckbox[6].checked && inputsCheckbox[7].checked && inputsCheckbox[8].checked) {
      score++
    }

  // ПРОВЕРКА ТЕКСТОВЫХ ОТВЕТОВ

    if (inputsText[0].value == '1492') {
      score++
    }

    if (inputsText[1].value == '1896') {
      score++
    }

  // ПРОВЕРКА СЕЛЕКТОВ

  if (selectsQuestion[0].value == 'Tokyo' && selectsQuestion[1].value == 'NewYork' && selectsQuestion[2].value == 'Moscow' ) {
    score++
  }
 
  // ПРОВЕРКА IMG

  if (imgQuestion.style.borderColor === 'green') { 
    score++;
}

  // ВЫВОД РЕЗУЛЬТАТА

  const result = document.querySelector('.result')

  result.innerText = `Результат: ${score}/15 `

})