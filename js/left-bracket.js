const leftBracket = document.getElementById("left-bracket");
// Check IF Syle Rules Changed
this.mutationObserver = new window.MutationObserver(createLeftBracket);
this.mutationObserver.observe(leftBracket, {
  attributes: true,
  attributeFilter: ["style", "class"],
});
window.addEventListener("load", createLeftBracket);

function createLeftBracket() {
  let color = getComputedStyle(leftBracket).getPropertyValue("color");

  const attributes = {
    fill: color,
    id: "Flat",
    stroke: color,
    "stroke-width": "0.00256",
    viewBox: "87.97 31.98 80.07 192.05",
  };

  const attrKeys = Object.keys(attributes);
  attrKeys.forEach((attr) => {
    leftBracket.setAttribute(attr, attributes[attr]);
  });

  leftBracket.innerHTML = `
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="19.968"/>
  <g id="SVGRepo_iconCarrier">
  <path d="M 123.175 128 C 126.574 130.786 129.314 134.29 131.198 138.26 C 136 148.163 136 160.281 136 172 C 136 196.313 137.02 208 160 208 C 166.158 208 170.007 214.667 166.928 220 C 165.499 222.475 162.858 224 160 224 C 142.519 224 130.676 217.856 124.802 205.74 C 120 195.837 120 183.719 120 172 C 120 147.687 118.98 136 96 136 C 89.842 136 85.993 129.333 89.072 124 C 90.501 121.525 93.142 120 96 120 C 118.98 120 120 108.313 120 84 C 120 72.281 120 60.163 124.802 50.26 C 130.676 38.144 142.519 32 160 32 C 166.158 32 170.007 38.667 166.928 44 C 165.499 46.475 162.858 48 160 48 C 137.02 48 136 59.687 136 84 C 136 95.719 136 107.837 131.198 117.74 C 129.314 121.71 126.574 125.214 123.175 128 Z"/>
  </g>
  `;
}
