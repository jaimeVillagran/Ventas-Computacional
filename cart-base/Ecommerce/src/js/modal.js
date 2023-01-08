const modalContainer = document.getElementById('modal-container');

function showModal(nodes) {
    // create the modal element
    console.log(nodes[3].innerText);
    const myfigure = nodes[1].childNodes[1].currentSrc
    const modal = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const txt = nodes[3].innerText;
    p.innerText = txt;
    modal.classList.add('modal');
    const img = document.createElement('img');
    img.setAttribute('src', myfigure);
    img.classList.add('modal-image');
    modal.appendChild(img);
    modal.appendChild(p);
  
    // add a close button to the modal
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
      modalContainer.removeChild(modal);
    });
    modal.appendChild(closeButton);
  
    // add the modal to the page
    modalContainer.appendChild(modal);
  }

  export default showModal;