export const bubblesCircle = ({
  radius,
  parentDiv,
  noOfBubbles,
  childDiv,
  value,
}) => {
  let div = 360 / noOfBubbles;
  let radius1 = radius;
  let parentdiv = document.getElementById(parentDiv);
  let abc = colorLoader(value);
  console.log('ali', abc);

  if (parentdiv) {
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
    var offsetToChildCenter = 20;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 1; i <= 20; ++i) {
      var childdiv = document.createElement('div');
      if (i > value) {
        childdiv.className = `bg-${colorLoader(value)} ${childDiv}`;
      } else {
        childdiv.className = childDiv;
      }

      childdiv.style.position = 'absolute';
      var y = Math.sin(div * i * (Math.PI / 180)) * radius1;
      var x = Math.cos(div * i * (Math.PI / 180)) * radius1;
      childdiv.style.top = (y + totalOffset).toString() + 'px';
      childdiv.style.left = (x + totalOffset).toString() + 'px';
      parentdiv.appendChild(childdiv);
    }
  }
};

export const colorLoader = (value) => {
  let color;
  switch (true) {
    case value <= 20 && value > 0:
      return 'primary-green';
    case value <= 40 && value > 20:
      return 'primary-green-light';
    case value <= 60 && value > 40:
      return 'primary-yellow';
    case value <= 80 && value > 60:
      return 'primary-orange';
    case value <= 100 && value > 80:
      return 'primary-red';
  }
};
