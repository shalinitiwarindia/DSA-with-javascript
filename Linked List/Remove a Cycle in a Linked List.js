function removeCycle(head) {
  let slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }

      fast.next = null; // Remove the cycle
      return;
    }
  }
}
