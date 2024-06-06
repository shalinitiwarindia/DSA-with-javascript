//printing name only once

var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];

var party = [];
var present = false;

for(var i = 0; i<arr.length; i++)
{
    for(var j=0; j<party.length; j++)
    {
        if(arr[i] == party[j])
        {
          present= true;
          break;
        }
    }

    if(present == false)
    {
      party.push(arr[i]);
    }
    else
    {
      present = false;
    }

}

console.log(party);
