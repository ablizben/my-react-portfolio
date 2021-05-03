// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if false, animation plays everytime element comes on screen
    once: true
}

// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Dapibus ultrices in iaculis nunc. Pretium nibh ipsum consequat nisl vel. Consequat ac felis donec et odio. Orci nulla pellentesque dignissim enim sit amet. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
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
        skills: ["JavaScript, Node, MySQL"],
        url: "https://github.com/ablizben/Habit-Tracker"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "What's On The Menu",
        skills: ["HTML, CSS, JavaScript"],
        url: "https://github.com/ablizben/diet-search"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Flavor Saver",
        skills: ["React, Express, Node, MongoDB"],
        url: "https://github.com/ablizben/flavor-saver"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Employee Directory",
        skills: ["React, CSS"],
        url: "https://github.com/ablizben/employee-directory"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Fitness Tracker",
        skills: ["JavaScript, Node, MongoDB"],
        url: "https://github.com/ablizben/fitness-tracker"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Pig Game",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/ablizben/pig-game"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Collabs"
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "The Collab Lab",
        url: "https://github.com/ablizben"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "Code.Share.Grow.",
        url: "https://github.com/ablizben"
    },
]

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you have the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    copyright: "Abigail Benjamin",
    contactUrl: 'https://form.jotform.com/211218316553045'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shareable link and paste it in the resume section
const social = {
    github: 'https://github.com/ablizben',
    twitter: 'https://twitter.com/ablizben',
    linkedin: 'https://www.linkedin.com/in/abby-benjamin/',
    resume: 'https://novoresume.com/'
}
// Dont change anything here
export { animation, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }