const img = [
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/book.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
  { url: "./img/subject.png" },
];
$("#slides").innerHTML = img
  .map(({ url }) => `<img src="${url}"  alt="errow"/>`)
  .join("");

$("#next").onclick = () => {
  $("#slides").style.transform = "translateX(400px)";
};
