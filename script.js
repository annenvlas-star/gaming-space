const lesson = {
  title: "At School",
  steps: [
    { id: "entrance", name: "🏫 School Entrance" },
    { id: "words", name: "📖 Learn Words" },
    { id: "memory", name: "🎮 Memory Game" },
    { id: "find", name: "🎯 Find It" },
    { id: "match", name: "🧩 Match" },
    { id: "speak", name: "🗣 Speak" },
    { id: "grammar", name: "✏ Grammar" },
    { id: "final", name: "🏆 Final Challenge" },
    { id: "certificate", name: "🎉 Certificate" }
  ]
};

let currentStep = 0;

function startLesson() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("lesson-screen").classList.remove("hidden");

  document.getElementById("lesson-title").innerText = lesson.title;

  renderMap();
}

function renderMap() {
  const container = document.getElementById("words");
  container.innerHTML = "";

  lesson.steps.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "step";

    if (index === currentStep) {
      div.classList.add("active");
    }

    if (index < currentStep) {
      div.classList.add("done");
    }

    div.innerText = step.name;
    container.appendChild(div);
  });
}

function nextStep() {
  if (currentStep < lesson.steps.length - 1) {
    currentStep++;
    renderMap();
  } else {
    alert("🎉 Lesson completed!");
  }
}
