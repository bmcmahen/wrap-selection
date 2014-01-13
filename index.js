var selection = window.getSelection();

/**
 * wrap the current selection with an element.
 * 
 * @param  {Element} el 
 */

module.exports = function(el){
  if (selection.rangeCount) {
    var range = selection.getRangeAt(0).cloneRange();
    element.appendChild(range.extractContents());
    range.insertNode(element);
    range.selectNode(element);
   
    // Restore ranges
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
