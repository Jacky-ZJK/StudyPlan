class VNode {
  constructor( tag, attrs, nodeValue, nodeType ) {
    this._tag = tag && tag.toLowerCase();
    this._attrs = attrs;
    this._nodeValue = nodeValue;
    this._nodeType = nodeType;
    this._children = [];
  }

  appendChild ( vnode ) {
    this._children.push( vnode );
  }
}
