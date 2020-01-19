const projects = [
    {
        title: "Product Cards Project", 
        screenshot: "Screen Shot 2020-01-18 at 8.05.33 PM.jpg", 
        description: "This project requires a knowledge of CSS flexbox and general CSS styling prowess.  I added added a button that triggers a JS function that will randomly place the sold out picture on a card.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 1", 
        screenshot: "Screen Shot 2020-01-18 at 8.05.33 PM.jpg", 
        description: "This is a placeholder description, while I work out the JavaScript.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 2", 
        screenshot: "Screen Shot 2020-01-18 at 8.05.33 PM.jpg", 
        description: "This is another placeholder, until I actually have projects to put here.  This is all I got right now.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 3", 
        screenshot: "Screen Shot 2020-01-18 at 8.05.33 PM.jpg", 
        description: "This is another placeholder, this one should not appear because it is not available.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/davideverett89", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 4", 
        screenshot: "Screen Shot 2020-01-18 at 8.05.33 PM.jpg", 
        description: "This is another placeholder.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/davideverett89"
    }
];

const printToDOM = (element, string) => {
    let domElement = document.getElementById(`${element}`);
    let domString = string;
    // console.log(domElement);
    // console.log(domString);
    domElement.innerHTML += domString;
}

const createProjectCards = (arr) => {
    let available = arr.filter(function (x) {
        return x.available === true;
    })
    for (let i = 0; i < available.length; i++) {
        printToDOM("projectsPage", `
    <div class="card">
        <img src="${available[i].screenshot}" alt="${available[i].title}" style="width:100%">
        <div class="container">
            <h4><b>${available[i].title}</b></h4>
            <p>${available[i].description}</p>
        </div>
    </div>`);
    }
}

document.onload = createProjectCards(projects);
