# Native DOM helpers
A collection of helper functions for interacting with the native DOM

##hasClass##
 Takes a DOM element node and a string.  It returns true if the string was found on the className attribute, otherwise returns false.  
`hasClass(document.querySelector('#id), 'foo');`

##addClass##
 Takes a single DOM element, or a collection and a string.  It appends the supplied string to the className attribute if not already present on each node in the collection.  
`addClass(document.querySelector('#id), 'foo');`  
**Dependencies**  
  * hasClass

##removeClass##
Takes a single DOM element or a collection and a string.  It removes the supplied string from the className attribute if it exists for each node in the collection.  
`removeClass(document.querySelector('#id), 'foo');`  
**Dependencies**  
  * hasClass
