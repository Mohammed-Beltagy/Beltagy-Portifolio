const rightBracket = document.getElementById("right-bracket");
// Check IF Syle Rules Changed
this.mutationObserver = new window.MutationObserver(createRightBracket);
this.mutationObserver.observe(rightBracket, {
  attributes: true,
  attributeFilter: ["style", "class"],
});
window.addEventListener("load", createRightBracket);

function createRightBracket() {
  let color = getComputedStyle(rightBracket).getPropertyValue("color");

  const attributes = {
    fill: color,
    id: "Flat",
    stroke: color,
    "stroke-width": "0.00256",
    viewBox: "87.97 31.98 80.07 192.05",
  };

  const attrKeys = Object.keys(attributes);
  attrKeys.forEach((attr) => {
    rightBracket.setAttribute(attr, attributes[attr]);
  });

  rightBracket.innerHTML = `
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="19.968"/>
  <g id="SVGRepo_iconCarrier">
  <path d="M 160 120 C 137.02 120 136 108.313 136 84 C 136 72.281 136 60.163 131.198 50.26 C 125.324 38.144 113.481 32 96 32 C 89.842 32 85.993 38.667 89.072 44 C 90.501 46.475 93.142 48 96 48 C 118.98 48 120 59.687 120 84 C 120 95.719 120 107.837 124.802 117.74 C 126.686 121.71 129.426 125.214 132.825 128 C 129.426 130.786 126.686 134.29 124.802 138.26 C 120 148.163 120 160.281 120 172 C 120 196.313 118.98 208 96 208 C 89.842 208 85.993 214.667 89.072 220 C 90.501 222.475 93.142 224 96 224 C 113.481 224 125.324 217.856 131.198 205.74 C 136 195.837 136 183.719 136 172 C 136 147.687 137.02 136 160 136 C 166.158 136 170.007 129.333 166.928 124 C 165.499 121.525 162.858 120 160 120 Z"/>
  </g>
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  `;
}
