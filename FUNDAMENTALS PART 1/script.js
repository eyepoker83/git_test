"use strict";

function Book(tittle, author, numberOfPages, didYouRead) {
  this.tittle = tittle;
  this.author = author;
  this.numberOfPages = null;
  this.didYouRead = didYouRead;
  this.tellInfo = function () {
    let info = `${tittle} by ${author}, ${numberOfPages}, ${didYouread}`;
    return info;
  };
}
