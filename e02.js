function sortByInsert(array = [], i=1)
{
    let temp = array[i];
    
    if(array[i] == null)
    {
        return array;
    }

    if(array[i] < array[i-1])
    {
        array[i] = array[i-1];
        array[i-1] = temp;
        
        return sortByInsert(array,i);
    }
    else if(array[i] > array[i+1])
    {
        array[i] = array[i+1];
        array[i+1] = temp;

        return sortByInsert(array,i); 
    }
    else
    {
        return sortByInsert(array,i+1);
    }
}

console.log(sortByInsert([5,2,1,4,3]));