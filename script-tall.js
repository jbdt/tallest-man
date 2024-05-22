var thirdOfAMeter = 2;
var tall = 3;

function addMoreContent() {
  const tallCounter = document.getElementById('tall-counter');
  const preElement = document.getElementById('tall-content');
  let moreText = '';
  for (let i = 0; i < 10; i++) {
    if (i % 30 == 0) {
      if (thirdOfAMeter == 2) {
        if (tall == 9999) {
          var howTall = 'OMG!';
          document.title = 'OMG! Too tall!!';
        } else {
          var howTall = tall.toString().padStart(4, '0') + 'm';
          document.title = '👨🏻 Taller than ' + tall + 'm!';
          tall += 1;
        }
        moreText += '\n    <span class="color-white">|</span> ' + '<span class="color-white">' + howTall + '</span>' + ' <span class="color-white">|</span><span class="color-white">.</span>                      <span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span>  <span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span>                    ';
        thirdOfAMeter = 0;
      } else {
        thirdOfAMeter += 1;
      }
    } else {
      moreText += '\n    <span class="color-white">|</span>       <span class="color-white">|</span><span class="color-white">.</span>                      <span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span>  <span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span><span class="no-color">▒▒</span>                    ';
    }
  }
  preElement.innerHTML += moreText;
  tallCounter.innerHTML = tall;
}

function checkScroll() {
  const content = document.getElementById('content');
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  const contentVisible = content.getBoundingClientRect().top <= window.innerHeight;
  if (atBottom || contentVisible) {
    addMoreContent();
  }
}
window.addEventListener('scroll', checkScroll);
addMoreContent();