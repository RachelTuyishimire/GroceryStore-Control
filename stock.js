// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.


let goods = ["Apples", "Mangos", "Bananas", "Pineapple", "Oranges"];
let stock = [10, 20, 2, 5, 6];
// Write a function to add a new item to the inventory, updating both arrays.

function addInventory (inventory, quantities){
    if (goods.length >= 10){
        return ;       
        }
        goods.push (inventory);
        stock.push (quantities);
        console.log (`${inventory} ${quantities}`)
    }
    addInventory ("Water melon", 8);
    addInventory ("Manderin", 20);
    addInventory ("Guava", 12)
    addInventory ("Kiwi", 20)
    addInventory ("Avocado", 23)
    console.log(goods)
    console.log(stock)

// Write a function to update the stock quantity of an existing item.

function updateInvontory (){
    stock[0] = 30
    console.log(stock)
    
}
updateInvontory()
// Write a function to calculate the total number of items in the inventory.

function calculateInventory(){
    let calculate = 0; 
    for (let i=0; i< stock.length; i++){
        calculate += stock[i];
    }
    return calculate;
}
console.log(calculateInventory ());


// Write a function to find the item with the lowest stock quantity.

function getLowestStock(){
    let minstock =  0;
    for (let i=1; i< stock.length; i++){
        if (stock[i] < stock[minstock]){
            minstock = i;
        }
    }
    console.log(stock[minstock])
}
getLowestStock();





        

    

