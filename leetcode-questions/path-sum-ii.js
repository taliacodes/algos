var pathSum = function(root, sum) {
  let paths = []
  findPaths(root, sum, [], paths)
  
  return paths;
  
  function findPaths = (root, sum, current, paths) {
      if (root === null) return;
      
      current.push(root)
      
      if (root.left === null && root.right === null && root.val === sum) {
          paths.push(current)
          return;
      }
      
      let newCurrent = []
      
      findPaths(root.left, sum - root.val, newCurrent, paths)
      findPaths(root.right, sum - root.val, newCurrent, paths)
  }
};