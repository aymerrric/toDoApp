class Task{
    constructor(name, description, dueDate, project,priority, notes, checklist){
        // checklist should be an object in the form of "item" : bolean with 0 if item not done
        // 1 otherwise
        // priority should be a number from 0 to 9 9 being the most important
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.project = project;
    }

    toggleCheckItem(item){
        this.checklist[item] = !this.checklist[item];  
    }

    changePriority(newPriority){
        this.project.tooglePriority(this, newPriority);
        this.priority = newPriority;
    }
    changeDuedate(newDate){
        this.dueDate = newDate;
    }
};

export default Task;