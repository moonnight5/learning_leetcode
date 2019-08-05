// function LinkedNode(val) {
//   this.val = val;
//   this.next = null;
// }
var listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

var reverseList = function(head) {
  // head 头结点
  var cur = head,
      pre = null;
  while (cur) {
    var t = cur.next;
    cur.next = pre;
    pre = cur;
    cur = t; // cur.next = null
  }
  return pre;
};
console.log(reverseList(listNode))