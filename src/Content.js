// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if false, animation plays everytime element comes on screen
    once: true
}

const section2title = "About Me"
const about = {
    paragraph: ""
}

const skillsBar = [
    {
        name: "Javascript",
        faClass: "fab fa-js"
    },
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },
    {
        name: "CSS3",
        faClass: "fab fa-css3"
    },
    {
        name:   "React",
        faClass: "fab fa-react"
    },
    {
        name: "SASS",
        faClass: "fab fa-sass"
    },
    {
        name: "Node",
        faClass: "fab fa-node"
    },
    {
        name: "PHP",
        faClass: "fab fa-php"
    },


]

const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "The Habit Tracker",
        // skills: ["JavaScript, Node, MySQL"],
        skills: [<a href="https://github.com/ablizben/Habit-Tracker"><i class="fab fa-github fa-2x" id="githubLink"></i></a>, <a href="https://thomas-abby-dada-jessica.herokuapp.com/"><i class="fas fa-laptop fa-2x" id="siteLink"></i></a>],
        // url: "https://github.com/ablizben/Habit-Tracker"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "What's On The Menu",
        // skills: ["HTML, CSS, JavaScript"],
        skills: [<a href="https://github.com/ablizben/diet-search"><i class="fab fa-github fa-2x" id="githubLink"></i></a>, <a href="https://larguar.github.io/diet-search/"><i class="fas fa-laptop fa-2x" id="siteLink"></i></a>],
        // url: "https://github.com/ablizben/diet-search"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Flavor Saver",
        // skills: ["React, Express, Node, MongoDB"],
        skills: [<a href="https://github.com/ablizben/flavor-saver"><i class="fab fa-github fa-2x" id="githubLink"></i></a>, <a href="https://flavor-saver-app.herokuapp.com/"><i class="fas fa-laptop fa-2x" id="siteLink"></i></a>],
        // url: "https://github.com/ablizben/flavor-saver"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Employee Directory",
        // skills: ["React, CSS"],
        skills: [<a href="https://github.com/ablizben/employee-directory"><i class="fab fa-github fa-2x" id="githubLink"></i></a>, <a href="https://ablizben.github.io/employee-directory/"><i class="fas fa-laptop fa-2x" id="siteLink"></i></a>],
        // url: "https://github.com/ablizben/employee-directory"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Luna's Online Store",
        // skills: ["React, CSS"],
        skills: [<a href="https://github.com/ablizben/luna-online-store"><i class="fab fa-github fa-2x" id="githubLink"></i></a>],
        // url: "https://github.com/ablizben/lunas-online-store"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Pig Game",
        // skills: ["HTML, CSS, JS"],
        skills: [<a href="https://github.com/ablizben/pig-game"><i class="fab fa-github fa-2x" id="githubLink"></i></a>, <a href="https://ablizben.github.io/pig-game/"><i class="fas fa-laptop fa-2x" id="siteLink"></i></a>],
        // url: "https://github.com/ablizben/pig-game"
    },
]

// const section4Title = "Collabs"
// const miscellaneous = [
//     {
//         // Add image in './styles/images.css' in #misc1
//         id: "misc1",
//         name: "The Collab Lab",
//         url: "https://github.com/ablizben"
//     },
//     {
//         // Add image in './styles/images.css' in #misc2        
//         id: "misc2",
//         name: "Code.Share.Grow.",
//         url: "https://github.com/ablizben"
//     },
// ]


const section5Title = "Get in Touch"
const contact = {
    copyright: "Abigail Benjamin",
    contactUrl: 'https://form.jotform.com/211218316553045'
}

const social = {
    github: 'https://github.com/ablizben',
    twitter: 'https://twitter.com/ablizben',
    linkedin: 'https://www.linkedin.com/in/abby-benjamin/',
    resume: 'https://drive.google.com/file/d/1drl_KJkt48Ng72uib-Tns0BDbcecPjSI/view?usp=sharing'
}


export { animation, about, skillsBar, projects, contact, social, section2title, section3Title, section5Title }

//removed miscellaneous and section4Title for now. 