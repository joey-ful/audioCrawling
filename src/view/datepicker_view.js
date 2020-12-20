// https://www.cssscript.com/developer-date-picker/
import CommonView from './common_view.js';

export default function DatepickerView() {
  const commonView = new CommonView();

  const createDatepickerArea = () => {
    const datepickerArea = commonView.createDiv('datepicker-area', 'app');
    const inputType = {start: 'yesterday', end: 'today'};

    for (const type in inputType) {
      createDatepicker(type, inputType[type]);
    }

    createButton();
  }

  const createDatepicker = (type, date) => {
    const input = commonView.createInput(type, 'datepicker-area');
    const datepicker = new TheDatepicker.Datepicker(input);

    styleDatepicker(input);
    datepicker.options.setInitialDate(date);
    datepicker.render();

    if (type === 'end') {
      relocateEndDatepicker(input);
    }
  }

  const styleDatepicker = (input) => {
    input.setAttribute('type', 'text');
    input.style.color = '#616D80';
    input.style.border = 'solid 1px #B3B5B9';
    input.style.height = '30px';
    input.style.paddingLeft = '13px';
    input.style.width = '100px';
  }

  function relocateEndDatepicker(e) {
    document.querySelector("#datepicker-area div:nth-child(6)").style.transform = 'translateX(122px)';
  }

  function createButton() {
    const button = commonView.createButton('date-button', `조회`, 'datepicker-area');
    const searchIcon = commonView.createImage('./src/image/search_icon.svg', '19px', '19px', '', button);

    styleButton(button);
  }

  function styleButton(button) {
    button.style.textAlign = 'center';
    button.style.backgroundColor = '#4B5D78';
    button.style.color = '#fff';
    button.style.height = '33px';
    button.style.border = 'none';
    button.style.padding = '0 10px 5px 13px';
    button.style.cursor = 'pointer';
  }

  createDatepickerArea();
}