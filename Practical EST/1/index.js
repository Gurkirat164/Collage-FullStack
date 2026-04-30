//Q1) Write a function getUsers() that uses fetch and async/await to call: https://jsonplaceholder.typicode.com/users Display only the names of the first 5 users in the console. Handle any error using try...catch.

async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    
    try {
        const data = await fetch(url);

        const users = await data.json();

        users.slice(0 , 5).forEach(users => {
            console.log(users.name);
        })
    } catch (error) {
        console.error("Error");
    }
}

getUsers();
