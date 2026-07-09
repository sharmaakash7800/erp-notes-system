const notesList = document.getElementById("notesList");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const countText = document.getElementById("countText");

let selectedCategory = "All";

function categories() {
  return ["All", ...new Set(notesData.map(item => item.category))];
}

function renderCategories() {
  categoryList.innerHTML = "";
  categories().forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (category === selectedCategory ? " active" : "");
    const total = category === "All" ? notesData.length : notesData.filter(x => x.category === category).length;
    btn.textContent = `${category} (${total})`;
    btn.onclick = () => {
      selectedCategory = category;
      renderCategories();
      renderNotes();
    };
    categoryList.appendChild(btn);
  });
}

function renderNotes() {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = notesData.filter(item => {
    const haystack = `${item.title} ${item.category} ${item.note}`.toLowerCase();
    const matchSearch = haystack.includes(q);
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  countText.textContent = `${filtered.length} result(s) found`;
  notesList.innerHTML = "";

  if (!filtered.length) {
    notesList.innerHTML = `<div class="empty">No notes found. Search text change karein ya All category select karein.</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="badge">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.note}</p>
    `;
    notesList.appendChild(card);
  });
}

searchInput.addEventListener("input", renderNotes);
renderCategories();
renderNotes();
