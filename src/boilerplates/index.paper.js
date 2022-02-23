const paper = require("paper");

window.onload = function () {

  let canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  paper.setup(canvas);

  paper.project.currentStyle = {
    fillColor: 'rgba(0, 0, 0, 0.02)'
  };

  const ballNums = 128;
  const baseRadius = Math.floor(Math.min(paper.view.size.width, paper.view.size.height) * 0.08);
  const circlePaths = [];

  for (let i = 0; i < ballNums; i++) {
    const position = [
      Math.floor(pb.randrange(-paper.view.size.width * 0.2, paper.view.size.width * 1.2)), 
      Math.floor(pb.randrange(-paper.view.size.height * 0.2, paper.view.size.height * 1.2))];
    const radius = pb.randint(Math.floor(baseRadius * 0.5), Math.floor(baseRadius * 0.8));
    const circlePath = new paper.Path.Circle({
      center: position,
      radius: radius
    });
    circlePaths.push(circlePath);
  }

  const connections = new paper.Group();

  function generateConnections(paths) {
    connections.children = [];
    for (let i = 0, l = paths.length; i < l; i++) {
      for (let j = i - 1; j >= 0; j--) {
        const path = connect(paths[i], paths[j]);
        if (path) {
          connections.appendTop(path);
        }
      }
    }
  }

  generateConnections(circlePaths);

  function connect(ball1, ball2) {

    const handle_len_rate = 7.4;
    const v = 0.5;
    const maxDistance = Math.min(paper.view.size.width, paper.view.size.height) * 0.3;

    const center1 = ball1.position;
    const center2 = ball2.position;
    const pi2 = Math.PI / 2;
    let radius1 = ball1.bounds.width / 2;
    let radius2 = ball2.bounds.width / 2;
    const d = center1.getDistance(center2);
    let u1, u2;

    if (radius1 == 0 || radius2 == 0) { return };

    if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
      u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
        (2 * radius1 * d));
      u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
        (2 * radius2 * d));
    } else {
      u1 = 0;
      u2 = 0;
    }

    let vector = center2.subtract(center1);
    let angle1 = vector.getAngleInRadians();
    let angle2 = Math.acos((radius1 - radius2) / d);
    let angle1a = angle1 + u1 + (angle2 - u1) * v;
    let angle1b = angle1 - u1 - (angle2 - u1) * v;
    let angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
    let angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;
    let p1a = center1.add(getVector(angle1a, radius1));
    let p1b = center1.add(getVector(angle1b, radius1));
    let p2a = center2.add(getVector(angle2a, radius2));
    let p2b = center2.add(getVector(angle2b, radius2));
    const totalRadius = (radius1 + radius2);
    let d2 = Math.min(v * handle_len_rate, (p1a - p2a).length / totalRadius);
    d2 *= Math.min(1, d * 2 / (radius1 + radius2));

    radius1 *= d2;
    radius2 *= d2;

    p1a.handleOut = getVector(angle1a - pi2, radius1);
    p2a.handleIn = getVector(angle2a + pi2, radius2);
    p2b.handleOut = getVector(angle2b - pi2, radius2);
    p1b.handleIn = getVector(angle1b + pi2, radius1);

    const path = new paper.Path({
      segments: [p1a, p2a, p2b, p1b],
      style: ball1.style,
      closed: true
    });
    path.smooth();
    return path;
  }

  function getVector(radians, length) {
    return new paper.Point({
      angle: radians * 180 / Math.PI,
      length: length
    });
  }

  // Reference: http://paperjs.org/examples/meta-balls/

}
