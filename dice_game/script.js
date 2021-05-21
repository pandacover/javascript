function roll_dice() {
  var arr = ['one', 'two', 'three', 'four', 'five', 'six'];
  var x = Math.floor(6 * Math.random());
  var y = Math.floor(6 * Math.random());
  if (x === y)
    return roll_dice();
  document.querySelector('.dice-'+arr[x]).classList.add('show');
  document.querySelector('.dice-'+arr[y]).classList.add('show');
  
  var z = document.querySelector('.title-t  xt');
  if(x > y)
    z.textContent = 'Hurray, left won!🥓'

  else
    z.textContent = 'Hurray, right won!🥓'


}