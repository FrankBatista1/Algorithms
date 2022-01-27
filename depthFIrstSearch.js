
// O(V + E) t | O(V) s
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
