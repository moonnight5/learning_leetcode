[26] 链表概念 LinkedList 指针

- 算法
- 数据结构   链表
- webapck 跑起来

给定一个链表（实现一个），和一个特定值x,对链表进行分隔，使所有小于x的节点都在大于或等于X的节点之前,保证原来的顺序
LinkedList (n)LinkedListNode 存储数据可以不连续
head -> next ->
node1 ->..node -> tail ->next=null

head = 1 -> 4 -> 3 -> 2 -> 5 -> 2      x = 3
1 -> 2 -> 2 -> 4 -> 3 -> 5

解题思路
1. 一分为二 节点 val next
  两个链表 next属性 小的链表 next -> 大链表头节点
  怎么在组成链表的过程中，
  lowerHeader
  lowerTail
  highHeader
  highTail
  lowerHeader = head
  4? 跳过 1->next 放开 1->4 将1节点的next属性设为空
  1-> lowerHeader->next 2 ->2
  4-> highHeader->...->5
  1-> lowerHeader->next 2 ->2->  4-> highHeader->...->5
  while 一下就可以

  yarn add babel-cli babel-core babel-preset-env -D
  yarn add webpack-cli webpack-core webpack-dev-server -D
  yarn add html-webpack-plugin -D