/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    return getDiameter(root);
};

const getDepth = (root) => {
    if(root === null) {
        return 0;
    }
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    return Math.max(left,right) + 1;
}

const getDiameter = (root) => {
    if(root === null) {
        return 0;
    }
    let left = getDiameter(root.left);
    let right = getDiameter(root.right);
    let diameter = getDepth(root.left) + getDepth(root.right);
    diameter = Math.max(diameter,Math.max(left,right))
    return diameter;
}