树是数据结构
结点构成
value
单链表 每个结点只有一个指针 next
树 每个结点有两个指针 left right
- 根结点
- 叶子结点
- 边
- 结点 left right 指针
- 满二叉树   在一棵二叉树中。如果所有分支结点都存在左子树和右子树，并且所有叶子都在同一层上，这样的二叉树称为满二叉树。
- 完全二叉树  

给出的二叉树
    3
   / \
  9  20
    /  \
   15   7
希望得出结果
[
  [3],
  [9,20],
  [15,7]
]

遍历
- 一次一层   队列