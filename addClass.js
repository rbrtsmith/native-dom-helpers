function addClass(collection, cl) {
  function addCl(el) {
    if (!hasClass(el, cl)) {
      el.className += ' ' +cl;
    }
  }
  if (collection.length) {
    [].forEach.call(collection, addCl);
  } else {
    addCl(collection);
  }
}
