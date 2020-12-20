import CommonUtils from '../view/common_utils.js';

export default function DatepickerController() {
  const commonUtils = new CommonUtils();

  this.getDatepickerInputValues = () => {
    const inputType = ['start', 'end'];
    const values = [];

    inputType.forEach(type => {
      values.push(parseDOM(type));
    })

    return values;
  }

  function parseDOM(type) {
    const raw = getDOM(type);
    const parsed = raw.split('.').join('');

    return parsed;
  }

  function getDOM(idName) {
    return commonUtils.getById(idName).value;
  }

  this.getDatepickerInputValues();
}