var items = [
              ['A', 'B', 'C'],
              ['D', 'E', 'F'],
              ['G', 'H', 'I']
            ];



var rows = items.length;
var cols = items[0].length;


for(var r=0; r<=rows-1; r++)
{

  var snake = "";
  if(r%2==0)
  {
    for(var c=0; c<=cols-1;c++)
    {
        snake = snake + items[r][c]+" ";
    }
  }
  else
  {
    for(var c=cols-1; c>=0;c--)
    {
        snake = snake + items[r][c]+" ";
    }
  }
  console.log(snake);
}
