import Project from "./project";

const ToDoList = (function(){
    projects = [new Project("Tasks")];

    const addNewProject = function(name){
        projects.push(new project(name));
    }

    const removeProject = function(project){
        projects.splice(projects.indexOf(project, 1));
    }

    const displayProjects = ()=>projects;

    return {addNewProject, removeProject, displayProjects}
})();