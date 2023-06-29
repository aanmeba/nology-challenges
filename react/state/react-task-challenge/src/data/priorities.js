const priorities = ["very high", "high", "medium", "low"];

export const rankPriority = (priority) => {
  return priorities.indexOf(priority);
};

export default priorities;
