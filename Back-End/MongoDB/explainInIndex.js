// To use the explain method in its default mode you can pass in the queryPlanner parameter, or, you can invoke the method with no parameter at all. When no parameter is provided, the default mode (queryPlanner) will be used.

db.collection
  .explain("queryPlanner")
  .find({ timestamp: { $gt: 2 }, isActivated: true });

// or

db.collection.explain().find({ timestamp: { $gt: 2 }, isActivated: true });
// To get specific information from the explain output, you can use vanilla JavaScript dot notation. For example, you can return only the value of queryPlanner.winningPlan with the following command:

db.collection.find({ timestamp: { $gt: 2 }, isActivated: true }).explain()
  .queryPlanner.winningPlan;
// Similarly, to return only the rejectedPlans object from the explain output, you can also use dot notation like so:

db.collection
  .find({
    timestamp: { $gt: 2 },
    isActivated: true,
  })
  .explain().queryPlanner.rejectedPlans;
// To use the explain method in executionStats mode to get detailed execution stats (including nReturned, totalKeysExamined, totalDocsExamined, and executionTimeMillis), you can pass the string executionStats to the explain method as a parameter, like so:

db.collection
  .explain("executionStats")
  .find({
    timestamp: { $gt: 2 },
    isActivated: true,
  })
  .sort({ rating: -1 });
// The allPlansExecution verbosity mode will return output that contains scores that MongoDB’s query planner calculates for each index based on a number of factors. To use the explain method in allPlansExecution mode, you can pass the string allPlansExecution to the explain method as a parameter, like so:

db.collection.explain("allPlansExecution").find({
  timestamp: { $gt: 2 },
  isActivated: true,
});
