// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners to all heart elements
  const likeGlyphs = document.querySelectorAll(".like-glyph");

  likeGlyphs.forEach(glyph => {
    glyph.addEventListener("click", () => {
      if (glyph.innerText === EMPTY_HEART) {
        mimicServerCall()
          .then(() => {
            glyph.innerText = FULL_HEART;
            glyph.classList.add("activated-heart");
          })
          .catch(error => {
            displayError(error);
          });
      } else {
        glyph.innerText = EMPTY_HEART;
        glyph.classList.remove("activated-heart");
      }
    });
  });
});
function displayError(errorMessage) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  modalMessage.innerText = errorMessage;
  modal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
