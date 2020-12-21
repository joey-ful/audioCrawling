import CommonUtils from '../view/common_utils.js';

export default function DatepickerController() {
  const commonUtils = new CommonUtils();

  this.addEventToButton = () => {
    const button = commonUtils.getById('date-button');

    button.addEventListener('click', () => {
      const result = getDatepickerInputValues();

      if (isValidInput(result)) {
        console.log(result);
      }

    })
  }

  const isValidInput = (result) => {
    if (result[0] >= result[1]) {
      alert('시작날짜와 종료날짜 순서가 바뀌었습니다.');
      return false;
    }

    return true;
  }

  const getDatepickerInputValues = () => {
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

  this.addEventToButton();
}