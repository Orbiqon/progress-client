export const bubblesCircle = ({
  parentClass,
  noOfBubbles,
  childClass,
  childHeight,
  value,
}) => {
  let div = 360 / noOfBubbles;
  let radius1 = (childHeight * (noOfBubbles / 2)) / 2 - 5;
  let parentdiv = document.getElementById(parentClass);
  parentdiv.style.height = childHeight * (noOfBubbles / 2 + 1) + 'px';
  parentdiv.style.width = childHeight * (noOfBubbles / 2 + 1) + 'px';

  if (parentdiv) {
    for (var i = 1; i <= noOfBubbles; ++i) {
      var childdiv = document.createElement('div');
      var circleToBeFilled = Math.ceil(value / 4);
      var positionToBe = i - 11;
      if (i <= circleToBeFilled) {
        childdiv.className = `bg-${colorLoader(i)} ${childClass}`;
      } else {
        childdiv.className = childClass;
      }
      childdiv.style.position = 'absolute';
      var y =
        Math.cos(div * positionToBe * (Math.PI / 180)) * radius1 + radius1;
      var x =
        Math.sin(div * positionToBe * (Math.PI / 180)) * radius1 + radius1;
      childdiv.style.top = y.toString() + 'px';
      childdiv.style.left = x.toString() + 'px';
      childdiv.style.height = childHeight + 'px';
      childdiv.style.width = childHeight + 'px';
      parentdiv.appendChild(childdiv);
    }
  }
};

export const colorLoader = (value) => {
  switch (true) {
    case value > 0 && value <= 4:
      return 'primary-red';
    case value > 4 && value <= 8:
      return 'primary-orange';
    case value > 8 && value <= 12:
      return 'primary-yellow';
    case value > 12 && value <= 16:
      return 'primary-green-light';
    case value > 16 && value <= 20:
      return 'primary-green';
  }
};
