import { TweenMax, TimelineMax } from "gsap";

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "50px",
  height: "50px",
  x: "50px",
  y: "50px"
});

const timeline = new TimelineMax({ repeat: -1 })

timeline.pause();

timeline.to("#box", .5, { x: 100 })
timeline.to("#box", .5, { y: 100 })
timeline.to("#box", .5, { x: 50 })
timeline.to("#box", .5, { y: 50 })

document.querySelector("#box").addEventListener("click", () => {
  if (timeline.isActive()) {
    timeline.pause();
  } else {
    timeline.resume();
  }
})

document.addEventListener("wheel", (e) => {
  if (e.wheelDelta > 0) {
    // timeline.progress(timeline.progress() + 0.1);
    TweenMax.to(timeline, .25, { progress: "+=0.2" })
  } else {
    TweenMax.to(timeline, .25, { progress: "-=0.2" })
    // timeline.progress(timeline.progress() - 0.1);
  }
})

const divs = Array.from({ length: 100 }, () => document.createElement("div"));

// divs.forEach(div => {
//   TweenMax.set(div, {
//     position: "absolute",
//     x: `${Math.random() * window.innerWidth}px`,
//     y: `${Math.random() * window.innerHeight}px`,
//     width: 20,
//     height: 20,
//     backgroundColor: "green",
//     border: "3px solid black"
//   })

//   document.body.appendChild(div);
// });

// TweenMax.to(divs, 10, { x: 100, y: 100 });
// document.addEventListener("click", event => {
//   const { x, y } = event;

//   TweenMax.killTweensOf(event.target);
// })


const box = document.createElement("div");
box.setAttribute("class", "box");

document.body.appendChild(box);


box.addEventListener("mouseover", () => {
  TweenMax.to(box, .25, { className: "+=hover" })
})

box.addEventListener("mouseout", () => {
  TweenMax.to(box, .25, { className: "-=hover" })
})

box.addEventListener("mousedown", () => {
  TweenMax.to(box, .25, { className: "+=down" })
})

box.addEventListener("mouseup", () => {
  TweenMax.to(box, .25, { className: "-=down" })
})

document.addEventListener("mousemove", event => {
  TweenMax.set(document.body, { perspective: event.x });
})




Array.from({ length: 30 }).map(() => {
  return document.createElement("div")
}).forEach(box => {
  box.setAttribute("class", "box");

  document.body.appendChild(box);
  TweenMax.set(box, { rotationY: "30" })
})

