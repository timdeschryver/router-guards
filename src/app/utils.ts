export function log(...args) {
  let p = document.createElement("p");
  let t = document.createTextNode(args.join(" "));
  p.appendChild(t);
  let log = document.querySelector("#log");
  log.insertBefore(p, log.firstChild);
  console.log(...args);
}
