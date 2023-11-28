// View the Indexes used in a Collection
// Use getIndexes() to see all the indexes created in a collection. There is always a default index in every collection on _id field. This index is used by MongoDB internally and cannot be deleted.

db.customers.getIndexes();

// Delete an Index
// Use dropIndex() to delete an existing index from a collection. Within the parentheses of dropIndex(), include an object representing the index key or provide the index name as a string.

// Delete index by name:

db.customers.dropIndex("active_1_birthdate_-1_name_1");
// Delete index by key:

db.customers.dropIndex({
  active: 1,
  birthdate: -1,
  name: 1,
});

// Delete Indexes
// Use dropIndexes() to delete all the indexes from a collection, with the exception of the default index on _id.

db.customers.dropIndexes();
// The dropIndexes() command also can accept an array of index names as a parameter to delete a specific list of indexes.

db.collection.dropIndexes(["index1name", "index2name", "index3name"]);
