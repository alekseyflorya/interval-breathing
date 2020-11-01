export function FigureThree(sceneRef) {
  sceneRef.requestAnimFrame = (function () {
    return function (callback) {
        setTimeout(callback, 1000 / 60);
      };
  })();

    let w = sceneRef.clientWidth;
    let h = (sceneRef.clientWidth / 16) * 9;

    let c = sceneRef.children[0];
    c.width = c.w = w;
    c.height = c.h = h;
    const $ = c.getContext('2d');

    let p = 0,
      lvl1 = true, lvl5,
      R = w / 7.5,
      r = w / 50,
      d = w / 20,
      teta = 0,
      step = 2
    run()

    function D() {
      p += 0.5
      $.shadowColor = `hsla(${p / 3},95%, 50%,1)`
      $.shadowBlur = 0
      $.fillStyle = 'hsla(0,0%,0%,.05)';
      $.fillRect(0, 0, w, w);

      $.strokeStyle = `hsla(${p / 5},95%, 0%,1)`;
      $.lineWidth = 2

      $.translate(w / 2, h / 2)
      let gradient = $.createLinearGradient(-150, -150, 150, 150);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(.1, 'yellow');
      gradient.addColorStop(0.5, 'red');
      gradient.addColorStop(0.6, 'yellow');
      gradient.addColorStop(0.75, 'red');
      gradient.addColorStop(1, 'yellow');

      if (lvl1) {
        lvl5 = true
        $.strokeStyle = `hsla(${p / 3},95%, 50%,1)`
      }

      if (lvl5) {
        if (step < 1000) step += 1
        $.translate(0, 45)
        for (let i = 0; i < step; i++) {
          $.fillStyle = '#fff'
          spiro();
        }
        $.rotate(0.3 * Math.PI / 180)
        $.translate(0, -45)
      }
      $.translate(0, 45)
      $.beginPath()
      $.arc(0, 0, h / 3, Math.PI * 0.1, Math.PI * 0.5)
      $.stroke()
      $.beginPath()
      $.arc(0, 0, h / 3, Math.PI * 0.6, Math.PI * 1)
      $.stroke()
      $.beginPath()
      $.arc(0, 0, h / 3, Math.PI * 1.1, Math.PI * 1.5)
      $.stroke()
      $.beginPath()
      $.arc(0, 0, h / 3, Math.PI * 1.6, Math.PI * 2)
      $.stroke()
      $.translate(0, -45)

      $.translate(-w / 2, -h / 2)

      function spiro() {
        let x = (R - r) * Math.cos(teta) + d * Math.cos((R - r) * teta / r);
        let y = (R - r) * Math.sin(teta) - d * Math.sin((R - r) * teta / r);
        teta = teta + 0.1;

        $.fillRect(x, y, 2, 2);
      }
    }

    console.log('$ = ', $)

    function run() {
      sceneRef.requestAnimFrame(run);
      D();
    }

  return null
}
