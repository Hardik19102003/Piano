const C1 = new Audio("needs/piano-mp3/C1.mp3");
const Db1 = new Audio("needs/piano-mp3/Db1.mp3");
const D1 = new Audio("needs/piano-mp3/D1.mp3");
const Eb1 = new Audio("needs/piano-mp3/Eb1.mp3");
const E1 = new Audio("needs/piano-mp3/E1.mp3");
const F1 = new Audio("needs/piano-mp3/F1.mp3");
const Gb1 = new Audio("needs/piano-mp3/Gb1.mp3");
const G1 = new Audio("needs/piano-mp3/G1.mp3");
const Ab1 = new Audio("needs/piano-mp3/Ab1.mp3");
const A1 = new Audio("needs/piano-mp3/A1.mp3");
const Bb1 = new Audio("needs/piano-mp3/Bb1.mp3");
const B1 = new Audio("needs/piano-mp3/B1.mp3");
// .
const C2 = new Audio("needs/piano-mp3/C2.mp3");
const Db2 = new Audio("needs/piano-mp3/Db2.mp3");
const D2 = new Audio("needs/piano-mp3/D2.mp3");
const Eb2 = new Audio("needs/piano-mp3/Eb2.mp3");
const E2 = new Audio("needs/piano-mp3/E2.mp3");
const F2 = new Audio("needs/piano-mp3/F2.mp3");
const Gb2 = new Audio("needs/piano-mp3/Gb2.mp3");
const G2 = new Audio("needs/piano-mp3/G2.mp3");
const Ab2 = new Audio("needs/piano-mp3/Ab2.mp3");
const A2 = new Audio("needs/piano-mp3/A2.mp3");
const Bb2 = new Audio("needs/piano-mp3/Bb2.mp3");
const B2 = new Audio("needs/piano-mp3/B2.mp3");
// .
const C3 = new Audio("needs/piano-mp3/C3.mp3");
const Db3 = new Audio("needs/piano-mp3/Db3.mp3");
const D3 = new Audio("needs/piano-mp3/D3.mp3");
const Eb3 = new Audio("needs/piano-mp3/Eb3.mp3");
const E3 = new Audio("needs/piano-mp3/E3.mp3");
const F3 = new Audio("needs/piano-mp3/F3.mp3");
const Gb3 = new Audio("needs/piano-mp3/Gb3.mp3");
const G3 = new Audio("needs/piano-mp3/G3.mp3");
const Ab3 = new Audio("needs/piano-mp3/Ab3.mp3");
const A3 = new Audio("needs/piano-mp3/A3.mp3");
const Bb3 = new Audio("needs/piano-mp3/Bb3.mp3");
const B3 = new Audio("needs/piano-mp3/B3.mp3");
// .
const C4 = new Audio("needs/piano-mp3/C4.mp3");
const Db4 = new Audio("needs/piano-mp3/Db4.mp3");
const D4 = new Audio("needs/piano-mp3/D4.mp3");
const Eb4 = new Audio("needs/piano-mp3/Eb4.mp3");
const E4 = new Audio("needs/piano-mp3/E4.mp3");
const F4 = new Audio("needs/piano-mp3/F4.mp3");
const Gb4 = new Audio("needs/piano-mp3/Gb4.mp3");
const G4 = new Audio("needs/piano-mp3/G4.mp3");
const Ab4 = new Audio("needs/piano-mp3/Ab4.mp3");
const A4 = new Audio("needs/piano-mp3/A4.mp3");
const Bb4 = new Audio("needs/piano-mp3/Bb4.mp3");
const B4 = new Audio("needs/piano-mp3/B4.mp3");
// .
const C5 = new Audio("needs/piano-mp3/C5.mp3");
const Db5 = new Audio("needs/piano-mp3/Db5.mp3");
const D5 = new Audio("needs/piano-mp3/D5.mp3");
const Eb5 = new Audio("needs/piano-mp3/Eb5.mp3");
const E5 = new Audio("needs/piano-mp3/E5.mp3");
const F5 = new Audio("needs/piano-mp3/F5.mp3");
const Gb5 = new Audio("needs/piano-mp3/Gb5.mp3");
const G5 = new Audio("needs/piano-mp3/G5.mp3");
const Ab5 = new Audio("needs/piano-mp3/Ab5.mp3");
const A5 = new Audio("needs/piano-mp3/A5.mp3");
const Bb5 = new Audio("needs/piano-mp3/Bb5.mp3");
const B5 = new Audio("needs/piano-mp3/B5.mp3");
// .
const C6 = new Audio("needs/piano-mp3/C6.mp3");
const Db6 = new Audio("needs/piano-mp3/Db6.mp3");
const D6 = new Audio("needs/piano-mp3/D6.mp3");
const Eb6 = new Audio("needs/piano-mp3/Eb6.mp3");
const E6 = new Audio("needs/piano-mp3/E6.mp3");
const F6 = new Audio("needs/piano-mp3/F6.mp3");
const Gb6 = new Audio("needs/piano-mp3/Gb6.mp3");
const G6 = new Audio("needs/piano-mp3/G6.mp3");
const Ab6 = new Audio("needs/piano-mp3/Ab6.mp3");
const A6 = new Audio("needs/piano-mp3/A6.mp3");
const Bb6 = new Audio("needs/piano-mp3/Bb6.mp3");
const B6 = new Audio("needs/piano-mp3/B6.mp3");
// .
const C7 = new Audio("needs/piano-mp3/C7.mp3");
const Db7 = new Audio("needs/piano-mp3/Db7.mp3");
const D7 = new Audio("needs/piano-mp3/D7.mp3");
const Eb7 = new Audio("needs/piano-mp3/Eb7.mp3");
const E7 = new Audio("needs/piano-mp3/E7.mp3");
const F7 = new Audio("needs/piano-mp3/F7.mp3");
const Gb7 = new Audio("needs/piano-mp3/Gb7.mp3");
const G7 = new Audio("needs/piano-mp3/G7.mp3");
const Ab7 = new Audio("needs/piano-mp3/Ab7.mp3");
const A7 = new Audio("needs/piano-mp3/A7.mp3");
const Bb7 = new Audio("needs/piano-mp3/Bb7.mp3");
const B7 = new Audio("needs/piano-mp3/B7.mp3");
// .
const playSound = (audio) => {
  const clone = audio.cloneNode();
  clone.play();
  // audio.play();
  setTimeout(() => (clone.volume = 9), 9000);
  setTimeout(() => (clone.volume = 8), 18000);
  setTimeout(() => (clone.volume = 7), 27000);
  setTimeout(() => (clone.volume = 6), 36000);
  setTimeout(() => (clone.volume = 5), 40500);
  setTimeout(() => (clone.volume = 4), 50400);
  setTimeout(() => (clone.volume = 3), 70000);
  setTimeout(() => (clone.volume = 2), 80000);
  setTimeout(() => (clone.volume = 1), 90000);
  setTimeout(() => (clone.volume = 0), 100000);
};

// Tried to generalize----------------------------------
// const key = document.querySelector("key");
// const play = () => {
//   playSound(key);
//   key.classList.add("active");
//   setTimeout(() => key.classList.remove("active"), 200);
// };
// ----------------------------------------------------------------------------------------------
// C1
const C1Key = document.querySelector(".C1-key");
const playC1 = () => {
  playSound(C1);
  C1Key.classList.add("active");
  setTimeout(() => C1Key.classList.remove("active"), 200);
};
C1Key.addEventListener("click", playC1);

// C2
const C2Key = document.querySelector(".C2-key");
const playC2 = () => {
  playSound(C2);
  C2Key.classList.add("active");
  setTimeout(() => C2Key.classList.remove("active"), 200);
};
C2Key.addEventListener("click", playC2);

// C3
const C3Key = document.querySelector(".C3-key");
const playC3 = () => {
  playSound(C3);
  C3Key.classList.add("active");
  setTimeout(() => C3Key.classList.remove("active"), 200);
};
C3Key.addEventListener("click", playC3);

C3Key.addEventListener("click", playC3);
// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
  playSound(C5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// C6
const C6Key = document.querySelector(".C6-key");
const playC6 = () => {
  playSound(C6);
  C6Key.classList.add("active");
  setTimeout(() => C6Key.classList.remove("active"), 200);
};
C6Key.addEventListener("click", playC6);

// C6
const C7Key = document.querySelector(".C7-key");
const playC7 = () => {
  playSound(C7);
  C7Key.classList.add("active");
  setTimeout(() => C7Key.classList.remove("active"), 200);
};
C7Key.addEventListener("click", playC7);


// ----------------------------------------------------------------------------------------------
// Db1
const Db1Key = document.querySelector(".Db1-key");
const playDb1 = () => {
  playSound(Db1);
  Db1Key.classList.add("active");
  setTimeout(() => Db1Key.classList.remove("active"), 200);
};
Db1Key.addEventListener("click", playDb1);

// Db2
const Db2Key = document.querySelector(".Db2-key");
const playDb2 = () => {
  playSound(Db2);
  Db2Key.classList.add("active");
  setTimeout(() => Db2Key.classList.remove("active"), 200);
};
Db2Key.addEventListener("click", playDb2);

// Db3
const Db3Key = document.querySelector(".Db3-key");
const playDb3 = () => {
  playSound(Db3);
  Db3Key.classList.add("active");
  setTimeout(() => Db3Key.classList.remove("active"), 200);
};
Db3Key.addEventListener("click", playDb3);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
  playSound(Db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// Db6
const Db6Key = document.querySelector(".Db6-key");
const playDb6 = () => {
  playSound(Db6);
  Db6Key.classList.add("active");
  setTimeout(() => Db6Key.classList.remove("active"), 200);
};
Db6Key.addEventListener("click", playDb6);

// Db7
const Db7Key = document.querySelector(".Db7-key");
const playDb7 = () => {
  playSound(Db7);
  Db7Key.classList.add("active");
  setTimeout(() => Db7Key.classList.remove("active"), 200);
};
Db7Key.addEventListener("click", playDb7);

// ----------------------------------------------------------------------------------------------
// D1
const D1Key = document.querySelector(".D1-key");
const playD1 = () => {
  playSound(D1);
  D1Key.classList.add("active");
  setTimeout(() => D1Key.classList.remove("active"), 200);
};
D1Key.addEventListener("click", playD1);

// D2
const D2Key = document.querySelector(".D2-key");
const playD2 = () => {
  playSound(D2);
  D2Key.classList.add("active");
  setTimeout(() => D2Key.classList.remove("active"), 200);
};
D2Key.addEventListener("click", playD2);

// D3
const D3Key = document.querySelector(".D3-key");
const playD3 = () => {
  playSound(D3);
  D3Key.classList.add("active");
  setTimeout(() => D3Key.classList.remove("active"), 200);
};
D3Key.addEventListener("click", playD3);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
  playSound(D5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// D6
const D6Key = document.querySelector(".D6-key");
const playD6 = () => {
  playSound(D6);
  D6Key.classList.add("active");
  setTimeout(() => D6Key.classList.remove("active"), 200);
};
D6Key.addEventListener("click", playD6);

// D7
const D7Key = document.querySelector(".D7-key");
const playD7 = () => {
  playSound(D7);
  D7Key.classList.add("active");
  setTimeout(() => D7Key.classList.remove("active"), 200);
};
D7Key.addEventListener("click", playD7);
// ----------------------------------------------------------------------------------------------
// Eb1
const Eb1Key = document.querySelector(".Eb1-key");
const playEb1 = () => {
  playSound(Eb1);
  Eb1Key.classList.add("active");
  setTimeout(() => Eb1Key.classList.remove("active"), 200);
};
Eb1Key.addEventListener("click", playEb1);
// Eb2
const Eb2Key = document.querySelector(".Eb2-key");
const playEb2 = () => {
  playSound(Eb2);
  Eb2Key.classList.add("active");
  setTimeout(() => Eb2Key.classList.remove("active"), 200);
};
Eb2Key.addEventListener("click", playEb2);
// Eb3
const Eb3Key = document.querySelector(".Eb3-key");
const playEb3 = () => {
  playSound(Eb3);
  Eb3Key.classList.add("active");
  setTimeout(() => Eb3Key.classList.remove("active"), 200);
};
Eb3Key.addEventListener("click", playEb3);
// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
  playSound(Eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);
// Eb6
const Eb6Key = document.querySelector(".Eb6-key");
const playEb6 = () => {
  playSound(Eb6);
  Eb6Key.classList.add("active");
  setTimeout(() => Eb6Key.classList.remove("active"), 200);
};
Eb6Key.addEventListener("click", playEb6);

// Eb7
const Eb7Key = document.querySelector(".Eb7-key");
const playEb7 = () => {
  playSound(Eb7);
  Eb7Key.classList.add("active");
  setTimeout(() => Eb7Key.classList.remove("active"), 200);
};
Eb7Key.addEventListener("click", playEb7);
// ----------------------------------------------------------------------------------------------
// E1
const E1Key = document.querySelector(".E1-key");
const playE1 = () => {
  playSound(E1);
  E1Key.classList.add("active");
  setTimeout(() => E1Key.classList.remove("active"), 200);
};
E1Key.addEventListener("click", playE1);

// E2
const E2Key = document.querySelector(".E2-key");
const playE2 = () => {
  playSound(E2);
  E2Key.classList.add("active");
  setTimeout(() => E2Key.classList.remove("active"), 200);
};
E2Key.addEventListener("click", playE2);

// E3
const E3Key = document.querySelector(".E3-key");
const playE3 = () => {
  playSound(E3);
  E3Key.classList.add("active");
  setTimeout(() => E3Key.classList.remove("active"), 200);
};
E3Key.addEventListener("click", playE3);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
  playSound(E5);
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);

// E6
const E6Key = document.querySelector(".E6-key");
const playE6 = () => {
  playSound(E6);
  E6Key.classList.add("active");
  setTimeout(() => E6Key.classList.remove("active"), 200);
};
E6Key.addEventListener("click", playE6);

// E7
const E7Key = document.querySelector(".E7-key");
const playE7 = () => {
  playSound(E7);
  E7Key.classList.add("active");
  setTimeout(() => E7Key.classList.remove("active"), 200);
};
E7Key.addEventListener("click", playE7);
// ----------------------------------------------------------------------------------------------
const F1Key = document.querySelector(".F1-key");
const playF1 = () => {
  playSound(F1);
  F1Key.classList.add("active");
  setTimeout(() => F1Key.classList.remove("active"), 200);
};
F1Key.addEventListener("click", playF1);

const F2Key = document.querySelector(".F2-key");
const playF2 = () => {
  playSound(F2);
  F2Key.classList.add("active");
  setTimeout(() => F2Key.classList.remove("active"), 200);
};
F2Key.addEventListener("click", playF2);

const F3Key = document.querySelector(".F3-key");
const playF3 = () => {
  playSound(F3);
  F3Key.classList.add("active");
  setTimeout(() => F3Key.classList.remove("active"), 200);
};
F3Key.addEventListener("click", playF3);

const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

const F5Key = document.querySelector(".F5-key");
const playF5 = () => {
  playSound(F5);
  F5Key.classList.add("active");
  setTimeout(() => F5Key.classList.remove("active"), 200);
};
F5Key.addEventListener("click", playF5);

const F6Key = document.querySelector(".F6-key");
const playF6 = () => {
  playSound(F6);
  F6Key.classList.add("active");
  setTimeout(() => F6Key.classList.remove("active"), 200);
};
F6Key.addEventListener("click", playF6);

const F7Key = document.querySelector(".F7-key");
const playF7 = () => {
  playSound(F7);
  F7Key.classList.add("active");
  setTimeout(() => F7Key.classList.remove("active"), 200);
};
F7Key.addEventListener("click", playF7);
// ----------------------------------------------------------------------------------------------
// Gb1
const Gb1Key = document.querySelector(".Gb1-key");
const playGb1 = () => {
  playSound(Gb1);
  Gb1Key.classList.add("active");
  setTimeout(() => Gb1Key.classList.remove("active"), 200);
};
Gb1Key.addEventListener("click", playGb1);

// Gb2
const Gb2Key = document.querySelector(".Gb2-key");
const playGb2 = () => {
  playSound(Gb2);
  Gb2Key.classList.add("active");
  setTimeout(() => Gb2Key.classList.remove("active"), 200);
};
Gb2Key.addEventListener("click", playGb2);

// Gb3
const Gb3Key = document.querySelector(".Gb3-key");
const playGb3 = () => {
  playSound(Gb3);
  Gb3Key.classList.add("active");
  setTimeout(() => Gb3Key.classList.remove("active"), 200);
};
Gb3Key.addEventListener("click", playGb3);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// Gb5
const Gb5Key = document.querySelector(".Gb5-key");
const playGb5 = () => {
  playSound(Gb5);
  Gb5Key.classList.add("active");
  setTimeout(() => Gb5Key.classList.remove("active"), 200);
};
Gb5Key.addEventListener("click", playGb5);

// Gb6
const Gb6Key = document.querySelector(".Gb6-key");
const playGb6 = () => {
  playSound(Gb6);
  Gb6Key.classList.add("active");
  setTimeout(() => Gb6Key.classList.remove("active"), 200);
};
Gb6Key.addEventListener("click", playGb6);

// Gb7
const Gb7Key = document.querySelector(".Gb7-key");
const playGb7 = () => {
  playSound(Gb7);
  Gb7Key.classList.add("active");
  setTimeout(() => Gb7Key.classList.remove("active"), 200);
};
Gb7Key.addEventListener("click", playGb7);
// ----------------------------------------------------------------------------------------------
// G1
const G1Key = document.querySelector(".G1-key");
const playG1 = () => {
  playSound(G1);
  G1Key.classList.add("active");
  setTimeout(() => G1Key.classList.remove("active"), 200);
};
G1Key.addEventListener("click", playG1);
// G2
const G2Key = document.querySelector(".G2-key");
const playG2 = () => {
  playSound(G2);
  G2Key.classList.add("active");
  setTimeout(() => G2Key.classList.remove("active"), 200);
};
G2Key.addEventListener("click", playG2);
// G3
const G3Key = document.querySelector(".G3-key");
const playG3 = () => {
  playSound(G3);
  G3Key.classList.add("active");
  setTimeout(() => G3Key.classList.remove("active"), 200);
};
G3Key.addEventListener("click", playG3);
// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// G5
const G5Key = document.querySelector(".G5-key");
const playG5 = () => {
  playSound(G5);
  G5Key.classList.add("active");
  setTimeout(() => G5Key.classList.remove("active"), 200);
};
G5Key.addEventListener("click", playG5);

// G6
const G6Key = document.querySelector(".G6-key");
const playG6 = () => {
  playSound(G6);
  G6Key.classList.add("active");
  setTimeout(() => G6Key.classList.remove("active"), 200);
};
G6Key.addEventListener("click", playG6);
// G7
const G7Key = document.querySelector(".G7-key");
const playG7 = () => {
  playSound(G7);
  G7Key.classList.add("active");
  setTimeout(() => G7Key.classList.remove("active"), 200);
};
G7Key.addEventListener("click", playG7);
// ----------------------------------------------------------------------------------------------
// Ab1
const Ab1Key = document.querySelector(".Ab1-key");
const playAb1 = () => {
  playSound(Ab1);
  Ab1Key.classList.add("active");
  setTimeout(() => Ab1Key.classList.remove("active"), 200);
};
Ab1Key.addEventListener("click", playAb1);
// Ab2
const Ab2Key = document.querySelector(".Ab2-key");
const playAb2 = () => {
  playSound(Ab2);
  Ab2Key.classList.add("active");
  setTimeout(() => Ab2Key.classList.remove("active"), 200);
};

Ab2Key.addEventListener("click", playAb2);
// Ab3
const Ab3Key = document.querySelector(".Ab3-key");
const playAb3 = () => {
  playSound(Ab3);
  Ab3Key.classList.add("active");
  setTimeout(() => Ab3Key.classList.remove("active"), 200);
};
Ab3Key.addEventListener("click", playAb3);
// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  playSound(Ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// Ab5
const Ab5Key = document.querySelector(".Ab5-key");
const playAb5 = () => {
  playSound(Ab5);
  Ab5Key.classList.add("active");
  setTimeout(() => Ab5Key.classList.remove("active"), 200);
};
Ab5Key.addEventListener("click", playAb5);

// Ab6
const Ab6Key = document.querySelector(".Ab6-key");
const playAb6 = () => {
  playSound(Ab6);
  Ab6Key.classList.add("active");
  setTimeout(() => Ab6Key.classList.remove("active"), 200);
};
Ab6Key.addEventListener("click", playAb6);

// Ab7
const Ab7Key = document.querySelector(".Ab7-key");
const playAb7 = () => {
  playSound(Ab7);
  Ab7Key.classList.add("active");
  setTimeout(() => Ab7Key.classList.remove("active"), 200);
};
Ab7Key.addEventListener("click", playAb7);
// ----------------------------------------------------------------------------------------------
// A1
const A1Key = document.querySelector(".A1-key");
const playA1 = () => {
  playSound(A1);
  A1Key.classList.add("active");
  setTimeout(() => A1Key.classList.remove("active"), 200);
};
A1Key.addEventListener("click", playA1);
// A2
const A2Key = document.querySelector(".A2-key");
const playA2 = () => {
  playSound(A2);
  A2Key.classList.add("active");
  setTimeout(() => A2Key.classList.remove("active"), 200);
};
A2Key.addEventListener("click", playA2);
// A3
const A3Key = document.querySelector(".A3-key");
const playA3 = () => {
  playSound(A3);
  A3Key.classList.add("active");
  setTimeout(() => A3Key.classList.remove("active"), 200);
};
A3Key.addEventListener("click", playA3);
// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
  playSound(A4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// A5
const A5Key = document.querySelector(".A5-key");
const playA5 = () => {
  playSound(A5);
  A5Key.classList.add("active");
  setTimeout(() => A5Key.classList.remove("active"), 200);
};
A5Key.addEventListener("click", playA5);

// A6
const A6Key = document.querySelector(".A6-key");
const playA6 = () => {
  playSound(A6);
  A6Key.classList.add("active");
  setTimeout(() => A6Key.classList.remove("active"), 200);
};
A6Key.addEventListener("click", playA6);
// A7
const A7Key = document.querySelector(".A7-key");
const playA7 = () => {
  playSound(A7);
  A7Key.classList.add("active");
  setTimeout(() => A7Key.classList.remove("active"), 200);
};
A7Key.addEventListener("click", playA7);
// ----------------------------------------------------------------------------------------------
// Bb1
const Bb1Key = document.querySelector(".Bb1-key");
const playBb1 = () => {
  playSound(Bb1);
  Bb1Key.classList.add("active");
  setTimeout(() => Bb1Key.classList.remove("active"), 200);
};
Bb1Key.addEventListener("click", playBb1);
// Bb2
const Bb2Key = document.querySelector(".Bb2-key");
const playBb2 = () => {
  playSound(Bb2);
  Bb2Key.classList.add("active");
  setTimeout(() => Bb2Key.classList.remove("active"), 200);
};
Bb2Key.addEventListener("click", playBb2);
// Bb3
const Bb3Key = document.querySelector(".Bb3-key");
const playBb3 = () => {
  playSound(Bb3);
  Bb3Key.classList.add("active");
  setTimeout(() => Bb3Key.classList.remove("active"), 200);
};
Bb3Key.addEventListener("click", playBb3);
// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  playSound(Bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// Bb5
const Bb5Key = document.querySelector(".Bb5-key");
const playBb5 = () => {
  playSound(Bb5);
  Bb5Key.classList.add("active");
  setTimeout(() => Bb5Key.classList.remove("active"), 200);
};
Bb5Key.addEventListener("click", playBb5);

// Bb6
const Bb6Key = document.querySelector(".Bb6-key");
const playBb6 = () => {
  playSound(Bb6);
  Bb6Key.classList.add("active");
  setTimeout(() => Bb6Key.classList.remove("active"), 200);
};
Bb6Key.addEventListener("click", playBb6);
// Bb7
const Bb7Key = document.querySelector(".Bb7-key");
const playBb7 = () => {
  playSound(Bb7);
  Bb7Key.classList.add("active");
  setTimeout(() => Bb7Key.classList.remove("active"), 200);
};
Bb7Key.addEventListener("click", playBb7);
// ----------------------------------------------------------------------------------------------
// B1
const B1Key = document.querySelector(".B1-key");
const playB1 = () => {
  playSound(B1);
  B1Key.classList.add("active");
  setTimeout(() => B1Key.classList.remove("active"), 200);
};
B1Key.addEventListener("click", playB1);
// B2
const B2Key = document.querySelector(".B2-key");
const playB2 = () => {
  playSound(B2);
  B2Key.classList.add("active");
  setTimeout(() => B2Key.classList.remove("active"), 200);
};
B2Key.addEventListener("click", playB2);
// B3
const B3Key = document.querySelector(".B3-key");
const playB3 = () => {
  playSound(B3);
  B3Key.classList.add("active");
  setTimeout(() => B3Key.classList.remove("active"), 200);
};
B3Key.addEventListener("click", playB3);
// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
  playSound(B4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// B5
const B5Key = document.querySelector(".B5-key");
const playB5 = () => {
  playSound(B5);
  B5Key.classList.add("active");
  setTimeout(() => B5Key.classList.remove("active"), 200);
};
B5Key.addEventListener("click", playB5);

// B6
const B6Key = document.querySelector(".B6-key");
const playB6 = () => {
  playSound(B6);
  B6Key.classList.add("active");
  setTimeout(() => B6Key.classList.remove("active"), 200);
};
B6Key.addEventListener("click", playB6);
// B7
const B7Key = document.querySelector(".B7-key");
const playB7 = () => {
  playSound(B7);
  B7Key.classList.add("active");
  setTimeout(() => B7Key.classList.remove("active"), 200);
};
B7Key.addEventListener("click", playB7);

window.addEventListener("keydown", ({ keyCode }) => {
  //octave-4-------------------------------------
  // Press Q
  if (keyCode === 81) return playC4();

  // Press 2
  if (keyCode === 50) return playDb4();

  // Press W
  if (keyCode === 87) return playD4();

  // Press 3
  if (keyCode === 51) return playEb4();

  // Press E
  if (keyCode === 69) return playE4();

  // Press R
  if (keyCode === 82) return playF4();

  // Press 5
  if (keyCode === 53) return playGb4();
5  // Press T
  if (keyCode === 84) return playG4();

  // Press 6
  if (keyCode === 54) return playAb4();

  // Press Y
  if (keyCode === 89) return playA4();6
  // Press 7
  if (keyCode === 55) return playBb4();

  // Press U
  if (keyCode === 85) return playB4();

  // Press I
  if (keyCode === 73) return playC5();

  // Press 9
  if (keyCode === 57) return playDb5();

  // Press O
  if (keyCode === 79) return playD5();

  // Press 0
  if (keyCode === 48) return playEb5();
  // Press P
  if (keyCode === 80) return playE5();

  //octave-5-------------------------------------
  // Press Z
  if (keyCode === 90) return playF5();

  // Press 6
  if (keyCode === 83) return playGb5();

  // Press X
  if (keyCode === 88) return playG5();

  // Press D
  if (keyCode === 68) return playAb5();

  // Press C
  if (keyCode === 67) return playA5();

  // Press F
  if (keyCode === 70) return playBb5();

  // Press V
  if (keyCode === 86) return playB5();


  // Press B
  if (keyCode === 66) return playC6();

  // Press H
  if (keyCode === 72) return playDb6();

  // Press N
  if (keyCode === 78) return playD6();

  // Press J
  if (keyCode === 74) return playEb6();

  // Press M
  if (keyCode === 77) return playE6();

  // Press ,
  if (keyCode === 188) return playF6();

  // Press L
  if (keyCode === 76) return playGb6();

  // Press .
  if (keyCode === 190) return playG6();
  // Press ;
  if (keyCode === 186) return playAb6();

  // Press /
  if (keyCode === 191) return playA6();
});

   

// const C4 = new Audio("needs/piano-mp3/C4.mp3");
// const Db4 = new Audio("needs/piano-mp3/Db4.mp3");
// const D4 = new Audio("needs/piano-mp3/D4.mp3");
// const Eb4 = new Audio("needs/piano-mp3/Eb4.mp3");
// const E4 = new Audio("needs/piano-mp3/E4.mp3");
// const F4 = new Audio("needs/piano-mp3/F4.mp3");
// const Gb4 = new Audio("needs/piano-mp3/Gb4.mp3");
// const G4 = new Audio("needs/piano-mp3/G4.mp3");
// const Ab4 = new Audio("needs/piano-mp3/Ab4.mp3");
// const A4 = new Audio("needs/piano-mp3/A4.mp3");
// const Bb4 = new Audio("needs/piano-mp3/Bb4.mp3");
// const B4 = new Audio("needs/piano-mp3/B4.mp3");
// const C5 = new Audio("needs/piano-mp3/C5.mp3");
// const Db5 = new Audio("needs/piano-mp3/Db5.mp3");
// const D5 = new Audio("needs/piano-mp3/D5.mp3");
// const Eb5 = new Audio("needs/piano-mp3/Eb5.mp3");
// const E5 = new Audio("needs/piano-mp3/E5.mp3");

// const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
// const BLACK_KEYS = ['2', '3', '5', '6', '7','9','0','s','d','g','h','j','l',';']

// const keys = document.querySelectorAll('.key')
// const whiteKeys = document.querySelectorAll('.key.white-key')
// const blackKeys = document.querySelectorAll('.key.black-key')

// keys.forEach(key => {
//   key.addEventListener('click', () => playNote(key))
// })

// document.addEventListener('keydown', e => {
//   if (e.repeat) return
//   const key = e.key
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key)
//   const blackKeyIndex = BLACK_KEYS.indexOf(key)

//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
// })

// function playNote(key) {
//   const noteAudio = document.getElementById(key)
//   noteAudio.currentTime = 0
//   noteAudio.play()
//   key.classList.add('active')
//   noteAudio.addEventListener('ended', () => {
//     key.classList.remove('active')
//   })
// }
