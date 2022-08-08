/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    return getDiameter(root);
};

const getDepth = (root:TreeNode | null):number =>{
    if(root === null) return 0;
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);
    return Math.max(leftDepth,rightDepth) + 1;
}

const getDiameter = (root: TreeNode | null):number => {
    if(root === null) return 0;
    let ld = getDiameter(root.left);
    let rd = getDiameter(root.right);
    let diameter = getDepth(root.left) + getDepth(root.right);
    diameter = Math.max(diameter, Math.max(ld,rd));
    return diameter;
}