
// O(V + E) t | O(V) s
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  depthFirstSearch(array) {
    // We just add the items recursively starting from the left as a for loop normaly would
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
