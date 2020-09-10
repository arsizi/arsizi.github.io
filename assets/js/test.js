const states = ['D', 'Du', 'Duv', 'Duvi', 'Duvi_', 'Duvi_B', 'Duvi_Bo', 'Duvi_Bot'];
let i = 0;
setInterval(() => {
  if (i === states.length - 1) {
    i = 0;
  }
  document.title = states[i++];
}, 250);