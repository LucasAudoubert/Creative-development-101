const sections = document.querySelectorAll("section");
const tabs = document.querySelectorAll(".tab");
const tabContainer = document.querySelector(".tab-container");

tabs.forEach((tab, index) => {
  tab.addEventListener("change", () => {
    if (tab.checked && sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  let currentIndex = 0;
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentIndex = index;
    }
  });
  if (tabs[currentIndex]) {
    tabs[currentIndex].checked = true;
  }

  if (sections[currentIndex] && sections[currentIndex].id === "calm-section") {
    tabContainer.classList.add("on-calm");
  } else {
    tabContainer.classList.remove("on-calm");
  }
});
