// Freelancer Class
class Freelancer {
    constructor(name, occupation, startingPrice) {
        this.name = name;
        this.occupation = occupation;
        this.startingPrice = startingPrice;
    }
}

// Initialize the freelancers array with Alice using the Freelancer class
const freelancers = [new Freelancer('Alice', 'Writer', 30)];

// Populate freelancerPool with more freelancers
const freelancerPool = [];
freelancerPool.push(new Freelancer('Carlos', 'Teacher', 70));
freelancerPool.push(new Freelancer('Kelsey', 'Programmer', 80));
freelancerPool.push(new Freelancer('Juan', 'Landscaping', 120));
freelancerPool.push(new Freelancer('Daisy', 'Pianno Lessons', 130));
freelancerPool.push(new Freelancer('Jose', 'Soccer Coach', 60));
freelancerPool.push(new Freelancer('Catt', 'Nail Technician ', 50));
freelancerPool.push(new Freelancer('Jimmy', 'Pickleball  Trainer', 40));
freelancerPool.push(new Freelancer('Dolly Parton', 'Vocal Coach', 5000));
freelancerPool.push(new Freelancer('Messi', 'Soccer Coach', 8000));
freelancerPool.push(new Freelancer('Alexis', 'Personal Trainer', 80));

console.log(freelancerPool);

let i = 0;

// Function to calculate and update the average price
function updateAverage() {
    let sum = freelancers.reduce((sum, free) => sum + free.startingPrice, 0);
    let average = sum / freelancers.length;
    average = Math.floor(average * 100) / 100; // Round to 2 decimal places
    const averageDisplay = document.querySelector("#averageStartingPrice");
    averageDisplay.innerText = average;
}

// Function to render a freelancer in the table
function render() {
    if (i >= freelancerPool.length) {
        clearInterval(addFreelancerIntervalId);
        return;
    }

    // Select the table container
    const table = document.querySelector(".table");

    // Create a new freelancer div
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");

    // Add freelancer details (name, occupation, price)
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${freelancerPool[i].name}`;
    const occupationSpan = document.createElement("span");
    occupationSpan.textContent = `${freelancerPool[i].occupation}`;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${freelancerPool[i].startingPrice}`;

    // Append the spans to the freelancer div
    freelancerDiv.appendChild(nameSpan);
    freelancerDiv.appendChild(occupationSpan);
    freelancerDiv.appendChild(priceSpan);

    // Append the freelancer div to the table
    table.appendChild(freelancerDiv);

    // Add the new freelancer to the freelancers array
    freelancers.push(freelancerPool[i]);

    // Update the average starting price
    updateAverage();

    // Increment the counter
    i++;
}

// Add a new freelancer every 3 seconds
const addFreelancerIntervalId = setInterval(() => {
    render();
}, 3000);