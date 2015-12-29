function Scrum (user) {
  this.user = user;
  this.contents = [];
}

Scrum.prototype.setUser = function (user) {
  this.user = user;
}

/*
  parameters:
    content: Content
  description: addContent will only add "content" if "content" doesn't exist in the 'contents' property
  returns: undefined
*/
Scrum.prototype.addContent = function (content) {
  if (this.indexOfContent(content) < 0) {
    this.contents.push(content);
  }
}


/*
  parameters:
    content: Content
  description: indexOfContent returns the first index that equals the "content" in the 'contents' property
  returns: if "content" exist in 'contents' property first index is returned, else -1 is returned
*/
Scrum.prototype.indexOfContent = function(content) {
  this.contents.forEach(function(element, index) {
    if (element.equals(content)) {
      return index;
    }
  });
  return -1;
}


Scrum.prototype.removeContents = function (content, all) {
  var index = this.indexOfContent(content);
  if (index < 0) {
    return 0;
  }
  this.contents.splice(index, 1);
  if (all) {
    return 1 + this.removeContents(content, all);
  }
  return 1;
}

module.export = Scrum;