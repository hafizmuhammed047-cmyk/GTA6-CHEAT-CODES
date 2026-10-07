const cheats = [
  {
    name: "Full Health",
    icon: "❤️",
    category: "player",
    code: "R1, R2, L1, L2, ←, →, ←, →"
  },
  {
    name: "Infinite Ammo",
    icon: "🔫",
    category: "weapons",
    code: "R1, R2, L1, L2, ○, ○, ←, →"
  },
  {
    name: "All Weapons",
    icon: "💥",
    category: "weapons",
    code: "R1, R2, L1, L2, △, ○, ←, →"
  },
  {
    name: "Spawn Car",
    icon: "🚗",
    category: "vehicles",
    code: "R1, R2, L1, L2, ↑, ↓, ←, →"
  },
  {
    name: "Spawn Helicopter",
    icon: "🚁",
    category: "vehicles",
    code: "R1, R2, L1, L2, △, ↑, ↓, ○"
  },
  {
    name: "Change Weather",
    icon: "☀️",
    category: "player",
    code: "R1, R2, L1, L2, ←, →, ↑, ↓"
  }
];

let currentFilter = "all";
let favorites = [];

function renderCheats(list = cheats) {
  const box = document.getElementById("cheatList");

  box.innerHTML = "";

  list.forEach((cheat, index) => {
    box.innerHTML += `
      <div class="cheat">
        <div class="icon">${cheat.icon}</div>

        <div class="cheat-info">
          <h3>${cheat.name}</h3>
          <p>${cheat.code}</p>
        </div>

        <button class="star"
          onclick="toggleFavorite(${index})">
          ${favorites.includes(index) ? "★" : "☆"}
        </button>
      </div>
    `;
  });
}

function filterCheats(category) {
  currentFilter = category;

  if (category === "all") {
    renderCheats();
  } else {
    renderCheats(
      cheats.filter(c => c.category === category)
    );
  }
}

function searchCheats() {
  const text = document
    .getElementById("search")
    .value
    .toLowerCase();

  const result = cheats.filter(c =>
    c.name.toLowerCase().includes(text)
  );

  renderCheats(result);
}

function toggleFavorite(index) {
  if (favorites.includes(index)) {
    favorites = favorites.filter(i => i !== index);
  } else {
    favorites.push(index);
  }

  renderCheats();
}

renderCheats();