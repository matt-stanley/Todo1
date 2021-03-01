// Factory function to create Todos.
// Text is the task / name / description of the item
// Priority has three levels: 1 for critical, 2 for high, 3 for low
const createTodo = ({text = "Untitled", priority = 3}) => {
  const text = text;
  const priority = priority;
  const completed = false;
  const dateCreated = Date.now();
  const dateModified = dateCreated;

  return {
    getText: () => {
      return text;
    },

    setText: (newText) => {
      text = newText;
    },

    getPriority = () => {
      return priority;
    },

    setPriority: (newPriority) => {
      if(newPriority >= 1 && newPriority <= 3) {
        priority = newPriority;
      } else {
        return "Error";
      }
    },

    getCompleted = () => {
      return completed;
    },

    setCompleted = (newStatus) => {
      completed = newStatus;
    },

    toggleCompleted = () => {
      completed = !completed;
    },

    getDateCreated = () => {
      return dateCreated;
    },

    getDateModified = () => {
      return dateModified;
    },

    setDateModified = () => {
      dateModified = Date.now();
    }
  }
}