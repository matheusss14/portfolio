const home = document.getElementById('intro');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const notepad = document.getElementById('notepad');

function nameClick() {
    home.classList.remove('hidden');
    hideAbout()
    hideProjects()
}

function showHome() {
    home.classList.remove('hidden');
    notepad.classList.remove('hidden')
    
    document.getElementById('homeBt').classList.add('activebtn')
    setTimeout(() => document.getElementById('homeBt').classList.remove('activebtn'), 150)

    if (window.innerWidth <= 767) {
        hideAbout();
        hideProjects();
        console.log('hi')
      }
}

function hideHome() {
    home.classList.add('hidden');
}

function closeNotepad() {
    notepad.classList.add('hidden');
}

function showAbout() {
    document.getElementById('aboutBt').classList.add('activebtn')
    setTimeout(() => document.getElementById('aboutBt').classList.remove('activebtn'), 150)
    about.classList.toggle('hidden');

    if (window.innerWidth <= 767) {
        hideHome();
        hideProjects();
        console.log('hi')
      }
}
    
function hideAbout() {
    about.classList.add('hidden');
}

function showProjects() {
    setTimeout(() => document.getElementById('projBt').classList.remove('activebtn'), 150)
    projects.classList.toggle('hidden');
    document.getElementById('projBt').classList.add('activebtn')

    if (window.innerWidth <= 767) {
        hideAbout();
        hideHome();
        console.log('hi')
      }
}
function hideProjects() {
    projects.classList.add('hidden');
}




