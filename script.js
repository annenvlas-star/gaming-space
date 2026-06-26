const lesson = {
  title: "At School",
  words: ["book", "pen", "ruler"]
};

let currentStep = 0;

function startLesson() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("lesson-screen").classList.remove("hidden");

  document.getElementById("lesson-title").innerText = lesson.title;

  renderWords();
}

function renderWords() {
  const container = document.getElementById("words");
  container.innerHTML = "";

  lesson.words.forEach(word => {
    const div = document.createElement("div");
    div.className = "word";
    div.innerText = word;
    container.appendChild(div);
  });
}

function nextStep() {
  currentStep++;

  alert("Next stage coming soon 🚀 (we will build games here)");
}

