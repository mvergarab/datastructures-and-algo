// depth-first search

// we follow the paths of the edges connected to our starting vertex, or search key, one at a time, until we reach the end,
// then we backtrack and search the alternate paths, until we find the vertex we are looking for or we arrive back where we started

// this algo is implemented in either graphs or binary trees so we have to declare it first

// Runs in O(n), where n is the number of nodes in the tree, or O(b^d), where b is the branching factor and d is the depth.


const dfs = function (start, target) {
  console.log("Visiting Node " + start.value);
  if (start.value === target) {
      // We have found the goal node we we're searching for
      console.log("Found the node we're looking for!");
      return start;
  }

  // Recurse with all children
  for (var i = 0; i < start.children.length; i++) {
      var result = dfs(start.children[i], target);
      if (result != null) {
          // We've found the goal node while going down that child
          return result;
      }
  }

  // We've gone through all children and not found the goal node
  console.log("Went through all children of " + start.value + ", returning to it's parent.");
  return null;
};
