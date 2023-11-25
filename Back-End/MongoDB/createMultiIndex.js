// Understanding Multikey Indexes
// Review the code below, which demonstrates how multikey indexes work. If a single field or compound index includes an array field, then the index is a multikey index.

// Create a Single field Multikey Index
// Use createIndex() to create a new index in a collection. Include an object as parameter that contains the array field and sort order. In this example accounts is an array field.

db.customers.createIndex({
  accounts: 1,
});

// View the Indexes used in a Collection
// Use getIndexes() to see all the indexes created in a collection.

db.customers.getIndexes();

// Check if an index is being used on a query
// Use explain() in a collection when running a query to see the Execution plan. This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

// The IXSCAN stage indicates the query is using an index and what index is being selected.
// The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
// The FETCH stage indicates documents are being read from the collection.
// The SORT stage indicates documents are being sorted in memory.
db.customers.explain().find({
  accounts: 627788,
});
