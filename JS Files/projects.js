const button = document.querySelector('#ui button');
const projects = document.getElementsByClassName('project');
const siteLinks = document.getElementsByClassName('live-site');
const githubRepos = document.getElementsByClassName('github-repo');

//Make button functional
button.addEventListener('click', event => {
    window.location = 'info.html';
})

//Customize "live site" and "github repo" elements
siteLinks[3].style.bottom = '0';
githubRepos[3].style.bottom = '0';
siteLinks[4].style.bottom = '0';
githubRepos[4].style.bottom = '0';
siteLinks[5].style.bottom = '0';
githubRepos[5].style.bottom = '0';

for (let i=0; i<projects.length; i++) {
    projects[i].addEventListener('mouseover', () => {
        siteLinks[i].style.display = 'initial';
        githubRepos[i].style.display = 'initial';
    })
    projects[i].addEventListener('mouseout', () => {
        siteLinks[i].style.display = 'none';
        githubRepos[i].style.display = 'none';
    })
}