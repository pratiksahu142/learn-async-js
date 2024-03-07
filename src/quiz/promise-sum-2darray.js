const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function RowSum(arr,rowIndex){
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length>rowIndex) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr[rowIndex].length; i++) {
                        sum += arr[rowIndex][i];
                    }

                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('index out of bounds');
        }
        console.log('returning from sum');

})
}

promises=[];

for(let x=0;x<array2D.length;x++){
    promises.push(RowSum(array2D,x))
}

async function calculateTotalSum(promises) {
    try {
        const rsum = await Promise.all(promises);
        let sum = 0;
        rsum.forEach(r => {
            sum += r;
        });
        console.log(sum);
    } catch (error) {
        console.error(error);
    }
}

calculateTotalSum(promises);
