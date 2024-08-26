const home = document.getElementById('intro');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const notepad = document.getElementById('notepad');

function nameClick() {
    home.classList.remove('hidden');
    hideHome()
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

      home.style.zIndex = 2;
      about.style.zIndex = 1;
      projects.style.zIndex = 1;
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

      about.style.zIndex = 2;
      home.style.zIndex = 1;
      projects.style.zIndex = 1;
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

      projects.style.zIndex = 2;
      home.style.zIndex = 1;
      about.style.zIndex = 1;
}
function hideProjects() {
    projects.classList.add('hidden');
}

var lastProj = "";

function showFolders() {
    document.getElementById('folders').classList.remove('hidden');

    document.getElementById('front').classList.add('hidden');
    document.getElementById('CS50').classList.add('hidden');

    document.getElementById('backBt').classList.add('activebtn')
    setTimeout(() => document.getElementById('backBt').classList.remove('activebtn'), 150)

    document.getElementById('projUrl').innerHTML = "";
}

function goLast() {
    if (lastProj !== '') {
        document.getElementById(lastProj).classList.remove('hidden');

        document.getElementById('folders').classList.add('hidden')

        document.getElementById('projUrl').innerHTML = lastProj;
    }

    document.getElementById('nextBt').classList.add('activebtn')
    setTimeout(() => document.getElementById('nextBt').classList.remove('activebtn'), 150)
}

function showFront() {
    document.getElementById('folders').classList.add('hidden');

    document.getElementById('front').classList.remove('hidden');

    lastProj = 'front'

    document.getElementById('projUrl').innerHTML = lastProj;
}


function showCS50() {
    document.getElementById('folders').classList.add('hidden');

    document.getElementById('CS50').classList.remove('hidden');

    lastProj = 'CS50'

    document.getElementById('projUrl').innerHTML = lastProj;
}

function closeProj(elmnt) {
    elmnt.classList.add('hidden');
}

function showProj(elmnt) {
    elmnt.classList.remove('hidden')
    elmnt.style.zIndex = 2;
    projects.style.zIndex = 1;
}

