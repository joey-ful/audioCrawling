import CommonUtils from './common_utils.js';

export default class CommonView {
  constructor() {
    this._commonUtils = new CommonUtils();
  }

  createDOM(tag) {
    return document.createElement(tag);
  }

  insertEmptyLine(parentIdName) {
    const br = this.createElement("br");

    this._commonUtils.appendToIdName(br, parentIdName);
  }

  createTitle(tag, titleText, titleIdName, parentIdName, margin) {
    const title = this.createElement(tag);

    title.innerHTML = titleText;
    this._commonUtils.setAttribute(title, "id", titleIdName);
    this._commonUtils.appendToIdName(title, parentIdName);

    if (margin) {
      this._commonUtils.setMargin(title, margin)
    }
  }

  createInput(inputIdName, parentIdName) {
    const input = this.createElement("input");

    this._commonUtils.setAttribute(input, "id", inputIdName);
    this._commonUtils.appendToIdName(input, parentIdName);
    this._commonUtils.setMargin(input, '0 2px 0 2px');

    return input;
  }

  createButton(buttonAttributeName, buttonText, parentIdName) {
    const button = this.createElement("button");

    this._commonUtils.setAttribute(button, "id", buttonAttributeName);
    button.innerHTML = buttonText;
    this._commonUtils.appendToIdName(button, parentIdName);
    this._commonUtils.setMargin(button, '0 2px 0 2px');

    return button;
  }

  createElement(tag) {
    return document.createElement(tag);
  }

  createDiv(attributeName, parentIdname) {
    const div = this.createElement('div');

    this._commonUtils.setAttribute(div, 'id', attributeName);
    this._commonUtils.appendToIdName(div, parentIdname);
  }

  alertError = (errorMessage) => {
    alert(errorMessage);
  };

  createImage(src, width, height, alt, parent) {
    const img = this.createElement('IMG');

    img.src = src;
    this._commonUtils.setAttribute(img, 'width', width);
    this._commonUtils.setAttribute(img, 'height', height);
    this._commonUtils.setAttribute(img, 'alt', alt);
    this._commonUtils.appendToVarName(img, parent);
    img.style.transform = 'translateY(4px)';
    img.style.paddingLeft = '3px';
  }
}