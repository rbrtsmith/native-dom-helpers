function removeClass(collection, cl) {
  function removeCl(el) {
    var regEx = new RegExp('(\\s|^)' + cl + '(\\s|$)');
    if (hasClass(el, cl)) {
      el.className=el.className.replace(regEx, ' ');
    }
  }
  if (collection.length) {
    [].forEach.call(collection, removeCl);
  } else {
    removeCl(collection);
  }
}
