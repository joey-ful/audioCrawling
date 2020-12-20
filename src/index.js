import DatepickerView from './view/datepicker_view.js';
import DatepickerController from './controller/datepicker_controller.js';

export default function EBSAudioCrawler() {
  document.body.style.fontFamily = 'Arial';

  this.getDateInput = () => {
    new DatepickerView();
    new DatepickerController();
  }

  this.getDateInput();
}

new EBSAudioCrawler();