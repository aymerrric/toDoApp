class Project{
    constructor(name){
        this.name = name
        this.tasks = {};
        for (let i = 0; i<10; i++){
            this.tasks[`priority${i}`] = [];
        }
    }
    addNewTask(task){
        const priority = task.priority;
        this.tasks[`priority${priority}`];
    }
    tooglePriority(task, newPriority){
        const priority = task.priority;
        // remove the task from its previous position
        const priorityTasks = this.tasks[`priority${priority}`];
        priorityTasks.splice(priorityTasks.indexOf(task), 1);
        // add to the new one
        this.tasks[`priority${newPriority}`].push(task);
    }
    acheiveTask(task){
        this.tasks[`priority${task.priority}`].splice(this.tasks[`priority${task.priority}`].indexOf(task),1);        
    }
}

export default Project;