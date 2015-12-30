function Scrum (user, id) {
  this._id = id;
  this._user = user;
  this._contents = [];
}

/*
  parameters: 
    user: User
  description: setUser is the mutator function for '_user' property
  returns: undefined
 */

Scrum.prototype.setUser = function (user) {
  this._user = user;
}

/*
  parameters:
    content: Content
  description: addContent will only add "content" if "content" doesn't exist in the '_contents' property
  returns: undefined
*/
Scrum.prototype.addContent = function (content) {
  if (this.indexOfContent(content) < 0) {
    this._contents.push(content);
  }
}


/*
  parameters:
    content: Content
  description: indexOfContent returns the first index that equals the "content" in the '_contents' property
  returns: if "content" exist in 'contents' property first index is returned, else -1 is returned
*/
Scrum.prototype.indexOfContent = function(content) {
  var contents = this._contents;
  for (var index in contents) {
    if (contents[index].equals(content)) {
      return index;
    }
  }
  return -1;
}

/*
  parameters:
    content: Content
    all: Boolean
  description: removeContents removes the first "content" in the '_contents' property, if "all" is set to true, then all "content" in ‘_contents’ property are removed
  returns: the number of "content" removed in '_contents' property
*/
Scrum.prototype.removeContents = function (content, all) {
  var index = this.indexOfContent(content);
  if (index < 0) {
    return 0;
  }
  this._contents.splice(index, 1);
  if (all) {
    return 1 + this.removeContents(content, all);
  }
  return 1;
}

module.export = Scrum;