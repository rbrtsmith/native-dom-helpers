function hasClass(el, cl) {
  return !!el.className.match(new RegExp('(\\s|^)' + cl + '(\\s|$)'));
}
