import popupHTML from './popup.html'

window.addEventListener('load', () => {
  window.setTimeout(() => {
    console.log('hello');
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Start
    const S = document.querySelector.bind(document);
    const popup = S('.popup-wrapper');
    const button = S('.popup button');
    const iframe = S('iframe');
    const src = (`https://try.raisedreal.com/quiz`);

    setTimeout(() => popup.classList.toggle('active'), 500);

    button.onclick = function() {
      popup.classList.toggle('active');
      iframe.src = src; 
      setTimeout(() => iframe.classList.toggle('active'), 500); 
    }
  }, 500)
})