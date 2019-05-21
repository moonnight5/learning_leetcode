二分查找 binary_search_issue
  加速查找
  前提条件是什么？
    有序数组，折半排序，查找的时间复杂度从n => log2N
    [1,2,10,3,5,7,9].sort()

    JavaScript heap out of memory 超出内存
    什么出的问题？
    一亿左右的大数相加 CPU
    主要是数组 arr[] 占据物理空间
    下标的引用
    0-1亿  for循环没有问题
    mid = (max + min)  / 2;
    
