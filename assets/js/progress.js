let last = 0;

const getProgress = () => {
  let pct = Math.ceil((window.visualViewport.pageTop / (document.getElementById('main').offsetHeight - window.visualViewport.height)) * 100);
  return pct - (pct % 5); 
}

const createProgress = () => {
  let p = document.createElement('div');
  p.setAttribute('id', 'post-progress');
  p.style.width = getProgress() + '%';
  return p;
}

const viewportHandler = () => {
  let curr = getProgress();
  if (curr % 5 == 0 && curr != last) {
    progress.style.width = getProgress() + '%';
    last = curr;
  }
}

let nav = document.getElementById('header');
let progress = createProgress();
nav.appendChild(progress);

window.addEventListener('scroll', viewportHandler);
