
// TASK 1: 

function addition(a, b) {
    return a + b;
}
console.log("TASK 1: ADDITION");
        console.log(addition(5, 3));

   // TASK 2: 

function bitwiseAND(a, b) {
    return a & b;
}

function bitwiseOR(a, b) {
    return a | b;
}

     function bitwiseXOR(a, b) {
    return a ^ b;
}

console.log("TASK 2: BITWISE OPERATORS");
console.log("AND:", bitwiseAND(5, 3));
console.log("OR:", bitwiseOR(5, 3));
console.log("XOR:", bitwiseXOR(5, 3));

  // TASK 3: ADD UP

function addUp(a) {
    let sum = 0;

    for (let i = 1; i <= a; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log("TASK 3: ADD UP");
console.log(addUp(4));

// TASK 4: 

function progressBar(a) {
    let filled = Math.floor(a / 10);
    let empty = 10 - filled;

    return "#".repeat(filled) + "-".repeat(empty);
}
console.log("TASK 4: PROGRESS BAR");
console.log(progressBar(10));
console.log(progressBar(40));
console.log(progressBar(49));
console.log(progressBar(70));

// TASK 5:

function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return [min, max];
}

console.log("TASK 5: MIN MAX");
console.log(minMax([1, 2, 3, 4, 5, 6]));

// TASK 6: 

function calculateRepoStats(repos) {

    let stars = repos.map(function(repo) {
        return repo.stars;
    });

    let maxStars = Math.max(...stars);
    let minStars = Math.min(...stars);

    let total = 0;

    for (let i = 0; i < stars.length; i++) {
        total = total + stars[i];
    }

    let avgStars = Math.floor(total / stars.length);

    let varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars: maxStars,
        minStars: minStars,
        avgStars: avgStars,
        varianceScore: varianceScore
    };
}

const repos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];

console.log("TASK 6: REPOSITORY STATISTICS");
console.log(calculateRepoStats(repos));

// TASK 7: 

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    
    let discountedPrice =
        basePrice * (1 - discountPercentage / 100);

    discountedPrice =
        Math.round((discountedPrice + Number.EPSILON) * 100) / 100;

    let finalPrice =
        discountedPrice * (1 + taxRate / 100);

    finalPrice =
        Math.round((finalPrice + Number.EPSILON) * 100) / 100;

    let loyaltyPoints = Math.ceil(finalPrice);

    return {
        finalPrice: finalPrice,
        loyaltyPoints: loyaltyPoints
    };
}

console.log("TASK 7: FINAL PRICE");
console.log(calculateFinalPrice(100, 10, 20));

// TASK 8: 

function paginateData(items, pageNumber, pageSize = 5) {
    
    let totalPages = Math.ceil(items.length / pageSize);
    let start = (pageNumber - 1) * pageSize;
    let end = start + pageSize;
    let data = items.slice(start, end);
    return {
        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1
    };
}
  const allProducts = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];
const result = paginateData(allProducts, 2, 3);

console.log("TASK 8: PAGINATION");
console.log(result);
