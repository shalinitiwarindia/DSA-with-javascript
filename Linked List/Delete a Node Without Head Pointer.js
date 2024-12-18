function deleteNode(node) {
  if (node && node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
}
