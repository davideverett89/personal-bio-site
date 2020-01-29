const projects = [
    {
        title: "Placeholder 1", 
        screenshot: "data:image/jpeg;base64,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", 
        description: "This is a placeholder.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 2", 
        screenshot: "http://images4.fanpop.com/image/answers/240000/240298_1304450098101_425_282.jpg", 
        description: "This is a placeholder description, while I work out the JavaScript.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 3", 
        screenshot: "https://i0.wp.com/2.bp.blogspot.com/-vE-3YToaZms/UQnZA-U7rTI/AAAAAAAACKM/Yvbn5JzFsKQ/s640/VYVU0430+%25281024x683%2529.jpg?resize=610%2C406", 
        description: "This is another placeholder, until I actually have projects to put here.  This is all I got right now.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 4", 
        screenshot: "https://static.boredpanda.com/blog/wp-content/uploads/2015/01/fruits0023__700.jpg", 
        description: "This is another placeholder, this one should not appear because it is not available.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 5", 
        screenshot: "https://farm1.static.flickr.com/962/27858036788_65f776f4cc.jpg", 
        description: "This is another placeholder.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 6", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA2JOXl3RdBm2s4hZpJes8CHspDiEmyp3PRG7d6Mw7EwCuJccMg&s", 
        description: "This is another placeholder.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    },
    {
        title: "Placeholder 7", 
        screenshot: "https://img51.lightake.com/1000x1000/2018/626/1914/2231853/3f40e8e664894765adf29b59de9b1568.jpg", 
        description: "This is another placeholder.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/davideverett89",
        githubUrl: "https://github.com/davideverett89"
    }
];

const printToDOM = (element, string) => {
    document.getElementById(element).innerHTML = string;
}

const createProjectCards = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].available) {
            domString += '<div class="card">';
            domString +=    `<img src="${arr[i].screenshot}" alt="${arr[i].title}">`;
            domString +=    '<div class="container">';
            domString +=        `<h4><b>${arr[i].title}</b></h4>`;
            domString +=        `<p>${arr[i].description}</p>`;
            domString +=        `<p>Technologies Used: ${arr[i].technologiesUsed}</p>`;
            domString +=        `<p><a href="${arr[i].url}">Project Link</a></p>`;
            domString +=        `<p><a href="${arr[i].githubUrl}">GitHub Link</a></p>`;
            domString +=    '</div>';
            domString += '</div>';
        }
    }
    printToDOM("projectsPage", domString);
}

const init = () => {
    createProjectCards(projects);
}

init();

    
        
        
    

