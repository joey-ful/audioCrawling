import DatepickerView from './view/datepicker_view.js';

export default function EBSAudioCrawler() {
  document.body.style.fontFamily = 'Arial';

  this.getDateInput = () => {
    new DatepickerView();
  }

  this.getDateInput();
}

new EBSAudioCrawler();