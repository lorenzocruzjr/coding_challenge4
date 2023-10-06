const shareButton = document.getElementById('shareBtn');
const shareItem = document.getElementById('shareItem');
const shareInner02 = document.getElementById('shareBtn');

shareButton.addEventListener('click', () => {
  if (shareItem.style.display === 'none' || shareItem.style.display === '') {
    shareItem.style.display = 'inline-flex';
  } else {
    shareItem.style.display = 'none';
  }
});

// Function to add the background color class when shareInner02 is clicked
function addBackgroundColor() {
  shareInner02.classList.add('bgColor');
}

// Function to remove the background color class when shareInner02 is clicked
function removeBackgroundColor() {
  shareInner02.classList.remove('bgColor');
}

// Event listener for clicking on shareInner02
shareInner02.addEventListener('click', () => {
  if (shareInner02.classList.contains('bgColor')) {
    removeBackgroundColor();
  } else {
    addBackgroundColor();
  }
});

// Closed when clicked outside
document.addEventListener('click', (event) => {
  if (!shareButton.contains(event.target) && !shareItem.contains(event.target)) {
    shareItem.style.display = 'none';
    removeBackgroundColor(); // Remove background color when closing
  }
});