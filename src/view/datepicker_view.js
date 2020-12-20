// import MainController from './controller/main_controller.js';
// https://www.cssscript.com/developer-date-picker/
import CommonView from './common_view.js';

export default function DatepickerView() {
  const commonView = new CommonView();

  const createDatepickerArea = () => {
    const inputType = {start: 'yesterday', end: 'today'};

    for (const type in inputType) {
      createDatepicker(type, inputType[type]);
    }
  }

  const createDatepicker = (type, date) => {
    const input = commonView.createInput(type, 'app');
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
  }

  function relocateEndDatepicker(e) {
    document.querySelector("div:nth-child(7)").style.transform = 'translateX(155px)';
  }

  createDatepickerArea();
}