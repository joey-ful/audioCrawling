import DatepickerView from './view/datepicker_view.js';
import DatepickerController from './controller/datepicker_controller.js';

export default function EBSAudioCrawler() {
  document.body.style.fontFamily = 'Arial';

  this.getDateInput = () => {
    new DatepickerView();
    const datepicker = new DatepickerController();
    const dateInput = datepicker.getDatepickerInputValues();
  }

  this.getDateInput();
}

new EBSAudioCrawler();