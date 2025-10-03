/**
 * Home screen interactions.
 * Ensures handlers are attached whether loaded inline or after DOM ready.
 *
 * PUBLIC_INTERFACE
 * initHomeInteractions
 * Initialize event handlers for header buttons, cards, and FAB.
 */
export function initHomeInteractions() {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const btnSearch = $("#btn-search");
  const btnInfo = $("#btn-info");
  const fabAdd = $("#fab-add");
  const cards = $$(".card");

  if (btnSearch && !btnSearch.dataset.bound) {
    btnSearch.addEventListener("click", () => {
      // Placeholder behavior; integrate with future search UI
      alert("Search feature coming soon.");
    });
    btnSearch.dataset.bound = "true";
  }

  if (btnInfo && !btnInfo.dataset.bound) {
    btnInfo.addEventListener("click", () => {
      // Placeholder info; could open a modal
      alert("Personal Notes Organizer\nCreate, edit, and organize your notes.");
    });
    btnInfo.dataset.bound = "true";
  }

  if (fabAdd && !fabAdd.dataset.bound) {
    fabAdd.addEventListener("click", () => {
      // Placeholder add action; would route to a new-note view or open a sheet
      alert("Add new note action.");
    });
    fabAdd.dataset.bound = "true";
  }

  cards.forEach((card) => {
    if (!card.dataset.bound) {
      card.addEventListener("click", () => {
        const title = card.querySelector(".card__title")?.textContent?.trim() || "Card";
        alert(`Open: ${title}`);
      });
      card.dataset.bound = "true";
    }
  });
}

// Auto-init without relying on DOMContentLoaded to avoid conflicts in Astro
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomeInteractions, { once: true });
} else {
  initHomeInteractions();
}
