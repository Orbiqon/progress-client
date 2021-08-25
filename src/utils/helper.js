export const bubblesCircle = ({
  parentClass,
  noOfBubbles,
  childClass,
  childHeight,
  value,
}) => {
  let div = 360 / noOfBubbles;
  let radius1 = (childHeight * ((noOfBubbles/2)) / 2) - 5;
  let parentdiv = document.getElementById(parentClass);
  parentdiv.style.height = (childHeight * ((noOfBubbles/2) + 1))+'px';
  parentdiv.style.width = (childHeight * ((noOfBubbles/2) + 1))+'px';

  if (parentdiv) {
    for (var i = 1; i <= noOfBubbles; ++i) {
      var childdiv = document.createElement('div');
      var circleToBeFilled = Math.ceil(value / 4);
      if (i < circleToBeFilled) {
        childdiv.className = `bg-${colorLoader(i)} ${childClass}`;
      } else {
        childdiv.className = childClass;
      }
      childdiv.style.position = 'absolute';
      var y = Math.sin(div * i * (Math.PI / 180)) * radius1 + radius1;
      var x = Math.cos(div * i * (Math.PI / 180)) * radius1 + radius1;
      childdiv.style.top = (y).toString() + 'px';
      childdiv.style.left = (x).toString() + 'px';
      childdiv.style.height = childHeight + 'px';
      childdiv.style.width = childHeight + 'px';
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
