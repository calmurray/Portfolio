// Sample project data
const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    link: 'project1.html'
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    link: 'project2.html'
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    link: 'project3.html'
  }
];

// Display projects in the project list
const projectList = document.getElementById('project-list');
projects.forEach((project) => {
  const projectItem = document.createElement('li');
  projectItem.className = 'project-item';
  const link = document.createElement('a');
  link.href = project.link;
  link.textContent = project.title;
  projectItem.appendChild(link);
  projectList.appendChild(projectItem);
});


