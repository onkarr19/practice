/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    let list = new Map();

    transactions.forEach(transaction => {
        const category = transaction['category'];
        const price = transaction['price'];

        if (!list.has(category)) {
            list.set(category, 0);
        }

        list.set(category, list.get(category) + price);
    });

    let res = Array.from(list.entries()).map(([category, price]) => ({
        'category': category,
        'totalSpent': price
    }));

    return res;
}

module.exports = calculateTotalSpentByCategory;
