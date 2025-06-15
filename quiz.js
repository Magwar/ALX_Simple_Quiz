function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Check if the user input is empty
  if (!userAnswer) {
    document.querySelector("#feedback").textContent =
      "Please select an answer.";
    return;
  }
    // Check if the user input matches the correct answer
    const correctAnswerValue = userAnswer.value;

  if (correctAnswerValue === correctAnswer) {
    document.querySelector("#feedback").textContent = "Correct! Well done.";
  } else {
    document.querySelector("#feedback").textContent =
      "That's incorrect. Try again!";
  }

}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
