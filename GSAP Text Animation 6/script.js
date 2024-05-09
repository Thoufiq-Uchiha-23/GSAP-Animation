function breakTheText() {
  var h1 = document.querySelector("h1");

  var h1Text = h1.textContent; //divided way

  // Text broken/ split on the basis of nothing
  var splittedText = h1Text.split("");
  var halfValue = Math.floor(splittedText.length / 2);

  var clutter = "";

  splittedText.forEach(function (elem, idx) {
    console.log(idx);
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }

    h1.innerHTML = clutter;
  });
}

breakTheText();

gsap.from("h1 .a", {
  y: 80,
  duration: 0.6,
  delay: 0.6,
  stagger: 0.15,
  opacity: 0,
});

gsap.from("h1 .b", {
  y: 80,
  duration: 0.6,
  delay: 0.6,
  stagger: -0.15,
  opacity: 0,
});
