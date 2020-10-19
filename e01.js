function bubbleSort(array = [])
{
    let tmp=0;
    for(let y=0; y<array.length;y++)
    {
        for(let i=0; i<array.length-1;i++)
        {
            if(array[i] > array[i+1])
            {
                tmp = array[i] ;
                array[i] = array[i+1];
                array[i+1] = tmp;
            }
        }
    }
    
    return array;
}

console.log(bubbleSort([5,2,1,4,3]));