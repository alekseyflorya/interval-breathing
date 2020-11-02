export function FigureFour(sceneRef) {
  sceneRef.requestAnimFrame = (function () {
    return sceneRef.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  let w = sceneRef.clientWidth;
  let h = (sceneRef.clientWidth / 16) * 9;
  let canvElem = document.createElement('canvas')
  sceneRef.appendChild(canvElem)
  let c = sceneRef.children[0];
  c.width = c.w = w;
  c.height = c.h = h;
  const $ = c.getContext('2d');

    let p = 0,
      lvl1 = true, lvl2, lvl3, lvl4,
      sz2 = 0, sz3 = 0,
      R = 180,
      r = 30,
      d = 120,
      teta = 0,
      step = 2,
      y11 = 180, y12 = 0, y21 = 100, y22 = 100, y31 = 0, y32 = 120,
      trans = true

    $.fillStyle = '#ccc';
    $.fillRect(0, 0, w, h);

    run()

    function D() {
      p += 0.5
      R = 100
      $.shadowColor = `hsla(${p / 3},95%, 50%,1)`
      $.shadowBlur = 0
      $.fillStyle = 'hsla(0,0%,0%,.05)';
      $.fillRect(0, 0, w, h);

      $.strokeStyle = `hsla(${p / 5},95%, 0%,1)`;
      $.lineWidth = 2

      $.translate(w / 2, h / 2)
      if (lvl4) {
        if (step < 1000) step += 1
        $.translate(0, 45)
        for (let i = 0; i < step; i++) {
          $.fillStyle = 'blue'
          spiro();
        }
        $.translate(0, -45)
      }

      if (lvl1) {
        lvl2 = true

        $.translate(0, y11)
        $.strokeStyle = `hsla(${p / 3},95%, 50%,1)`
        $.translate(0, -y11)

        $.translate(0, y12)
        $.strokeStyle = `hsla(${p / 4},95%, 50%,1)`
        $.translate(0, -y12)
      }
      if (lvl3) {
        if (sz3 < 200) sz3 += 1
        else {
          lvl4 = true
          if (trans && y11 < 300) {
            y11 += .5
            y21 += .5
            y31 += .5
            y12 -= .5
            y22 -= .5
            y32 -= .5
          } else {
            trans = false
          }
          if (!trans && y11 > 180) {
            y11 -= .5
            y21 -= .5
            y31 -= .5
            y12 += .5
            y22 += .5
            y32 += .5
          } else {
            trans = true
          }
        }
        $.translate(0, y31)
        $.strokeStyle = `hsla(${p / 3},95%, 50%,1)`
        $.translate(0, -y31)

        if (sz3 < 200) sz3 += 1
        $.translate(0, y32)
        $.strokeStyle = `hsla(${p / 4},95%, 50%,1)`
        $.translate(0, -y32)
      }

      if (lvl2) {
        lvl3 = true
        $.translate(0, y21)
        $.strokeStyle = `hsla(${p / 3},95%, 50%,1)`
        $.translate(0, -y21)

        if (sz2 < 280) sz2 += 1
        $.translate(0, y22)
        $.strokeStyle = `hsla(${p / 4},95%, 50%,1)`
        $.translate(0, -y22)
      }

      $.translate(-w / 2, -h / 2)

      function spiro() {
        var x = (R - r) * Math.cos(teta) + d * Math.cos((R - r) * teta / r);
        var y = (R - r) * Math.sin(teta) - d * Math.sin((R - r) * teta / r);
        teta = teta + 0.1;

        $.fillRect(x, y, 2, 2);
      }
    }

    function run() {
      sceneRef.requestAnimFrame(run);
      D();
    }

  return null
}
