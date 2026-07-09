const notesList = document.getElementById("notesList");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const countText = document.getElementById("countText");
const totalCount = document.getElementById("totalCount");
const shownCount = document.getElementById("shownCount");
const moduleCount = document.getElementById("moduleCount");
const categoryCount = document.getElementById("categoryCount");
const resultTitle = document.getElementById("resultTitle");
const clearBtn = document.getElementById("clearBtn");
const themeToggle = document.getElementById("themeToggle");

const lockScreen = document.getElementById("lockScreen");
const appLayout = document.getElementById("appLayout");
const unlockForm = document.getElementById("unlockForm");
const pinInput = document.getElementById("pinInput");
const lockMessage = document.getElementById("lockMessage");
const lockBtn = document.getElementById("lockBtn");
const changePinBtn = document.getElementById("changePinBtn");

const noteModal = document.getElementById("noteModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalNote = document.getElementById("modalNote");

let selectedCategory = "All";

const DEFAULT_PIN = "1234";
const PIN_KEY = "erp_notes_pin";
const UNLOCK_KEY = "erp_notes_unlocked";
const THEME_KEY = "erp_notes_theme";

function getSavedPin() {
  return localStorage.getItem(PIN_KEY) || DEFAULT_PIN;
}

function showApp() {
  lockScreen.classList.add("app-hidden");
  appLayout.classList.remove("app-hidden");
  localStorage.setItem(UNLOCK_KEY, "yes");
  setTimeout(() => searchInput.focus(), 100);
}

function showLock() {
  appLayout.classList.add("app-hidden");
  lockScreen.classList.remove("app-hidden");
  localStorage.removeItem(UNLOCK_KEY);
  pinInput.value = "";
  lockMessage.textContent = "";
  setTimeout(() => pinInput.focus(), 100);
}

unlockForm.addEventListener("submit", event => {
  event.preventDefault();
  if (pinInput.value === getSavedPin()) showApp();
  else {
    lockMessage.textContent = "Wrong PIN. Dobara try karein.";
    pinInput.value = "";
  }
});

lockBtn.addEventListener("click", showLock);

changePinBtn.addEventListener("click", () => {
  const oldPin = prompt("Current PIN enter karein:");
  if (oldPin === null) return;
  if (oldPin !== getSavedPin()) return alert("Current PIN galat hai.");

  const newPin = prompt("New PIN enter karein, minimum 4 digits:");
  if (!newPin) return;
  if (!/^\d{4,8}$/.test(newPin)) return alert("PIN sirf numbers mein hona chahiye aur 4 se 8 digits ka hona chahiye.");

  localStorage.setItem(PIN_KEY, newPin);
  alert("PIN successfully change ho gaya.");
});

function categories() {
  return ["All", ...new Set(notesData.map(item => item.category))];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCategories() {
  categoryList.innerHTML = "";
  categories().forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (category === selectedCategory ? " active" : "");
    const total = category === "All" ? notesData.length : notesData.filter(x => x.category === category).length;
    btn.innerHTML = `<span>${escapeHtml(category)}</span><small>${total}</small>`;
    btn.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderNotes();
    });
    categoryList.appendChild(btn);
  });
}

function getFilteredNotes() {
  const q = searchInput.value.trim().toLowerCase();
  return notesData.filter(item => {
    const haystack = `${item.title} ${item.category} ${item.note}`.toLowerCase();
    return haystack.includes(q) && (selectedCategory === "All" || item.category === selectedCategory);
  });
}

function previewNote(item) {
  const meaningLine = String(item.note || "").split("\n").find(line => line.startsWith("Meaning:"));
  return meaningLine ? meaningLine.replace("Meaning:", "").trim() : item.note;
}

function renderNotes() {
  const filtered = getFilteredNotes();
  const q = searchInput.value.trim();

  shownCount.textContent = filtered.length;
  countText.textContent = `${filtered.length} result(s) found`;
  resultTitle.textContent = selectedCategory === "All" ? "All Notes" : selectedCategory;
  notesList.innerHTML = "";

  if (!filtered.length) {
    notesList.innerHTML = `<div class="empty">No notes found. Search text change karein ya All category select karein.</div>`;
    return;
  }

  filtered.forEach((item, index) => {
    const originalIndex = notesData.indexOf(item);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="badge">${escapeHtml(item.category)}</span>
      <h3>${highlightText(item.title, q)}</h3>
      <p>${highlightText(previewNote(item), q)}</p>
      <button type="button" data-index="${originalIndex}">View details →</button>
    `;
    card.querySelector("button").addEventListener("click", () => openModal(item));
    card.addEventListener("dblclick", () => openModal(item));
    notesList.appendChild(card);
  });
}

function highlightText(text, query) {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(`(${escapedQuery})`, "gi"), "<mark>$1</mark>");
}

function openModal(item) {
  modalCategory.textContent = item.category;
  modalTitle.textContent = item.title;
  modalNote.textContent = item.note;
  noteModal.classList.remove("app-hidden");
}

function closeModal() {
  noteModal.classList.add("app-hidden");
}

modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  selectedCategory = "All";
  renderCategories();
  renderNotes();
  searchInput.focus();
});

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem(THEME_KEY, theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

searchInput.addEventListener("input", renderNotes);

totalCount.textContent = notesData.length;
moduleCount.textContent = notesData.length;
categoryCount.textContent = categories().length - 1;
applyTheme(localStorage.getItem(THEME_KEY) || "light");
renderCategories();
renderNotes();

if (localStorage.getItem(UNLOCK_KEY) === "yes") showApp();
else showLock();
