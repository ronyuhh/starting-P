console.log("Hello, World!");
console.log("I am learning JavaScript.");
console.log(10 + 20);
const studentName = "Rony";
const subject = "Web Development";
let studyHours = 5;

console.log("Student: " + studentName);
console.log("Subject: " + subject);
console.log("Daily study hours: " + studyHours);

studyHours = 6;

console.log("Updated study hours: " + studyHours);
console.log("Data type of studyHours: " + typeof studyHours);
const marksScore = 85;

console.log("Student: " + studentName);
console.log("Marks: " + marksScore);

if (marksScore >= 80) {
    console.log("Excellent result!");
} else if (marksScore >= 60) {
    console.log("Good result!");
} else if (marksScore >= 40) {
    console.log("You passed.");
} else {
    console.log("You did not pass.");
}
const markList = [75, 82, 68, 90, 85];

let total = 0;

for (let i = 0; i < markList.length; i++) {
    total = total + markList[i];
}

const average = total / markList.length;

console.log("Total marks:", total);
console.log("Number of subjects:", markList.length);
console.log("Average marks:", average);
const products = [
    { name: "Notebook", price: 120 },
    { name: "Pen", price: 20 },
    { name: "Backpack", price: 850 },
    { name: "Water Bottle", price: 300 },
    { name: "Calculator", price: 650 }
];

let productTotal = 0;

for (const product of products) {
    console.log(product.name + " - Tk " + product.price);
    productTotal += product.price;
}

console.log("Total price: Tk " + productTotal);

const affordableProducts = products.filter(
    product => product.price < 400
);

console.log("Products below Tk 400:", affordableProducts);

const projects = [
    {
        title: "Portfolio Website",
        client: "Client A",
        budget: 5000,
        completed: true,
        deadline: "2026-11-20"
    },
    {
        title: "Product Data Entry",
        client: "Client B",
        budget: 2000,
        completed: false,
        deadline: "2026-11-05"
    },
    {
        title: "Business Landing Page",
        client: "Client C",
        budget: 8000,
        completed: false,
        deadline: "2026-11-20"
    }
];

// Display every project
function displayProjects() {
    for (const project of projects) {
        console.log("Project:", project.title);
        console.log("Client:", project.client);
        console.log("Budget: Tk", project.budget);
        console.log("Completed:", project.completed);
        console.log("--------------------");
    }
}

// Get completed projects
function getCompletedProjects() {
    return projects.filter(project => project.completed);
}

// Calculate the total project budget
function calculateTotalBudget() {
    let total = 0;

    for (const project of projects) {
        total += project.budget;
    }

    return total;
}

displayProjects();

console.log(
    "Completed projects:",
    getCompletedProjects()
);

console.log(
    "Total budget: Tk",
    calculateTotalBudget()
);

projects.push({
    title: "E-commerce Website",
    client: "Client D",
    budget: 12000,
    completed: false,
    deadline: "2026-11-20"
});
function countIncompleteProjects() {
    let count = 0;

    for (const project of projects) {
        if (project.completed === false) {
            count++;
        }
    }

    return count;
}

console.log("Incomplete projects:", countIncompleteProjects());
const highBudgetProjects = projects.filter(
    project => project.budget > 5000
);

console.log("Projects above Tk 5,000:", highBudgetProjects);
const ecommerceProject = projects.find(
    project => project.title === "E-commerce Website"
);

console.log("E-commerce project:", ecommerceProject);
function calculateCompletedBudget() {
    let total = 0;

    for (const project of projects) {
        if (project.completed === true) {
            total += project.budget;
        }
    }

    return total;
}

console.log(
    "Completed projects budget: Tk",
    calculateCompletedBudget()
);