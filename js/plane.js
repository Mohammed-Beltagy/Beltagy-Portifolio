// Create Plane
const plane = document.getElementById("bg-plane");
// Check IF Syle Rules Changed
this.mutationObserver = new window.MutationObserver(createPlane);
this.mutationObserver.observe(plane, {
  attributes: true,
  attributeFilter: ["style", "class"],
});
window.addEventListener("load", createPlane);

function createPlane() {
  let color = getComputedStyle(plane).getPropertyValue("color");
  plane.innerHTML = `
	<g transform="matrix(1 0 0 1 540 540)" id="b6240c04-6166-486d-afca-7e1bda2b91cd"  >
	<rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
	</g>
	<g transform="matrix(1 0 0 1 540 540)" id="ab6ad028-c361-4e0c-b78a-01c6bbb0c676"  >
	</g>
	<g transform="matrix(0.71 -0.71 0.71 0.71 540 596.62)"  >
	<g style="" vector-effect="non-scaling-stroke"   >
			<g transform="matrix(1.56 0 0 1.56 -206.54 19.77)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-123.85, -268.65)" d="M 163.1 261 L 103.6 235.2 L 84.6 254.2 L 132.5 302.09999999999997 C 135.1 294.59999999999997 139.2 287.7 144.5 281.79999999999995 L 163.1 261 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -19.82 206.64)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-243.35, -388.25)" d="M 230.2 367.6 C 224.29999999999998 372.90000000000003 217.39999999999998 377 209.89999999999998 379.6 L 257.79999999999995 427.5 L 276.79999999999995 408.5 L 251 349 L 230.2 367.6 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -43.65 -250.86)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-228.1, -95.45)" d="M 291.8 117.1 C 296.90000000000003 111.39999999999999 302.3 105.89999999999999 307.7 100.8 L 261.3 74.69999999999999 L 232 58.2 L 179.3 28.6 L 148.5 59.400000000000006 L 251.4 162.3 L 291.8 117.1 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 250.88 43.59)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-416.6, -283.9)" d="M 437.3 250.6 L 411.2 204.3 C 409.4 206.20000000000002 407.5 208.20000000000002 405.5 210.20000000000002 C 402.2 213.50000000000003 398.6 216.9 394.9 220.20000000000002 L 349.79999999999995 260.5 L 452.69999999999993 363.5 L 483.3999999999999 332.7 L 453.8 280 L 437.3 250.6 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 73.22 -73.13)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-302.9, -209.2)" d="M 395.6 200.3 C 398.5 197.4 401.3 194.5 404 191.5 C 432.6 160 452.7 121.4 462.2 79.6 C 464.2 70.69999999999999 461.3 62.3 455.5 56.599999999999994 C 449.7 50.89999999999999 441.4 47.89999999999999 432.5 49.89999999999999 C 390.7 59.39999999999999 352.2 79.5 320.6 108.1 C 314.20000000000005 113.89999999999999 308.1 120 302.3 126.5 L 261.40000000000003 172.2 L 176.60000000000002 267 L 154.90000000000003 291.3 C 149.10000000000002 297.8 145.40000000000003 305.6 143.80000000000004 313.6 C 141.00000000000003 328.3 145.30000000000004 344.1 156.60000000000005 355.40000000000003 C 167.90000000000006 366.70000000000005 183.70000000000005 371.1 198.40000000000003 368.3 C 206.50000000000003 366.8 214.20000000000005 363.1 220.70000000000005 357.2 L 245.00000000000006 335.5 L 339.80000000000007 250.7 L 385.50000000000006 209.89999999999998 C 389 206.7 392.3 203.5 395.6 200.3 z M 379.3 111.7 C 375.5 111.7 372.3 108.60000000000001 372.3 104.8 C 372.3 100.89999999999999 375.40000000000003 97.8 379.2 97.7 C 388.9 97.60000000000001 398 101.3 404.8 108.2 C 411 114.4 414.7 122.60000000000001 415.2 131.3 C 415.4 135.20000000000002 412.5 138.5 408.59999999999997 138.70000000000002 C 408.49999999999994 138.70000000000002 408.29999999999995 138.70000000000002 408.2 138.70000000000002 C 404.5 138.70000000000002 401.4 135.8 401.2 132.10000000000002 C 400.9 126.80000000000003 398.59999999999997 121.80000000000003 394.8 118.00000000000003 C 390.8 113.9 385.2 111.6 379.3 111.7 L 379.3 111.7 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 333.54 -17.75)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-469.5, -244.64)" d="M 486.6 224.3 C 480.20000000000005 218 470 218 463.6 224.3 L 447.6 240.3 L 449.5 243.70000000000002 L 464.1 269.70000000000005 L 486.6 247.30000000000004 C 489.8 244.10000000000005 491.40000000000003 240.00000000000003 491.40000000000003 235.80000000000004 C 491.3 231.6 489.7 227.5 486.6 224.3 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 197.68 112.89)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-382.55, -328.25)" d="M 368.3 319.5 C 361.90000000000003 325.9 361.90000000000003 336.1 368.3 342.5 C 374.7 348.9 384.90000000000003 348.9 391.3 342.5 L 401.6 332.2 L 378.6 309.2 L 368.3 319.5 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 17.68 -333.52)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-267.35, -42.55)" d="M 287.7 48.4 C 290.9 45.199999999999996 292.5 41.1 292.5 36.9 C 292.5 32.699999999999996 290.9 28.599999999999998 287.7 25.4 C 281.4 19 271.09999999999997 19 264.7 25.4 L 242.2 47.9 L 271.59999999999997 64.5 L 287.7 48.4 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -112.87 -197.79)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-183.8, -129.41)" d="M 169.5 143.7 C 175.9 150 186.2 150 192.5 143.7 L 202.9 133.39999999999998 L 179.9 110.39999999999998 L 169.5 120.69999999999997 C 163.1 127 163.1 137.3 169.5 143.7 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -336.63 66)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-40.59, -298.24)" d="M 58.5 280.3 C 55.8 277.6 51.3 277.6 48.6 280.3 L 22.700000000000003 306.2 C 20.000000000000004 308.9 20.000000000000004 313.4 22.700000000000003 316.09999999999997 C 24.1 317.49999999999994 25.900000000000002 318.2 27.6 318.2 C 29.3 318.2 31.200000000000003 317.5 32.5 316.09999999999997 L 58.4 290.2 C 61.2 287.4 61.2 283 58.5 280.3 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -275.29 127.25)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-79.85, -337.44)" d="M 87.8 319.5 L 62 345.4 C 59.3 348.09999999999997 59.3 352.59999999999997 62 355.29999999999995 C 63.4 356.69999999999993 65.2 357.4 66.9 357.4 C 68.60000000000001 357.4 70.5 356.7 71.80000000000001 355.29999999999995 L 97.70000000000002 329.4 C 100.40000000000002 326.7 100.40000000000002 322.2 97.70000000000002 319.5 C 95 316.8 90.6 316.8 87.8 319.5 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -127.26 275.37)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-174.59, -432.24)" d="M 192.5 414.3 C 189.8 411.6 185.3 411.6 182.6 414.3 L 156.7 440.2 C 154 442.9 154 447.4 156.7 450.09999999999997 C 158.1 451.49999999999994 159.89999999999998 452.2 161.6 452.2 C 163.4 452.2 165.2 451.5 166.5 450.09999999999997 L 192.4 424.2 C 195.2 421.4 195.2 417 192.5 414.3 z" stroke-linecap="round" />
	</g>
			<g transform="matrix(1.56 0 0 1.56 -65.92 336.62)"  >
	<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${color}; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-213.85, -471.44)" d="M 221.8 453.5 L 196 479.4 C 193.3 482.09999999999997 193.3 486.59999999999997 196 489.29999999999995 C 197.4 490.69999999999993 199.2 491.4 200.9 491.4 C 202.60000000000002 491.4 204.5 490.7 205.8 489.29999999999995 L 231.70000000000002 463.4 C 234.4 460.7 234.4 456.2 231.70000000000002 453.5 C 229 450.8 224.6 450.8 221.8 453.5 z" stroke-linecap="round" />
	</g>
	</g>
	</g>
	`;
}
// Change The Transform Origin For Planes To Be In The Center Of The Parent
function changeOrigin() {
  let planeWidth = parseFloat(
      getComputedStyle(plane).getPropertyValue("width")
    ),
    planeRight = parseFloat(getComputedStyle(plane).getPropertyValue("right")),
    parentHeight = parseFloat(
      getComputedStyle(plane.parentElement).getPropertyValue("height")
    );
  plane.style.transformOrigin =
    (-1 * parentHeight) / 2 + planeWidth + planeRight + "px";
}
changeOrigin();
window.addEventListener("resize", changeOrigin);
