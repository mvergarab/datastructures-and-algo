// article that explains this on a deeper level
// all you need to know about tree traversals with animations https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846
// in order traversal example https://javascript.plainenglish.io/a-visual-guide-to-how-to-actually-invert-a-binary-tree-9e5df119218f


// definition of a tree node

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


// inorder traversal
// steps :
//  1) go to left-subtree
//  2) visit node
//  3) go to right-subtree

function invertTree(head) {
  if (head) {
    var temp = head.left;
    head.left = head.right;
    head.right = temp;

    invertTree(head.left);
    invertTree(head.right);
  }

  return head;
}

// preorder traversal https://www.tutorialspoint.com/Pre-order-traversal-in-a-Javascript-Tree
// steps :
//  1) visit node
//  2) go to left-subtree
//  3) go to right-subtree

var preorderTraversal = function(root) {
  var res = [];
  helper(root, res);
  return res;
};

var helper = function (root, res) {
  if (!root) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
};

// postorder traversal https://www.tutorialspoint.com/Post-order-traversal-in-a-Javascript-Tree
// steps :
// 1) go to left-subtree
// 2) go to right
// 3) visit node




// levelorder traversal
// steps:
// 1) go to left-subtree
// 2) go to right
// 3) visit node
