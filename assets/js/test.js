const states = ['D', 'Du', 'Duv', 'Duvi'];
let i = 0;
setInterval(() => {
  if (i === states.length - 1) {
    i = 0;
  }
  document.title = states[i++];
}, 250);
