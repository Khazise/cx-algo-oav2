function sortBySelection(array = [], i=0)
{   
    let tmp = array[i];
    if(array[i] == null)
    {
        return array;
    }
    let min = i;
    for (let y=i; y<array.length;y++)
    {
        if(array[y] < array[min])
        {
            min = y ;
        }
    }
    array[i] = array[min];
    array[min] = tmp;
   return sortBySelection(array, i+1)
}

console.log(sortBySelection([5,2,1,4,3]));