const mainContainer = document.querySelector('.main-container');

// Generate a 16x16 grid of square divs
const noOfDivs = 16;
function generateGrid(noOfDivs) {
    mainContainer.innerHTML = '';
    for (i=0; i<(noOfDivs ** 2); i++) {
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('square');
        tempDiv.addEventListener('mouseover', (e) => {
            e.target.classList.add('filled')
        });
        mainContainer.appendChild(tempDiv);
    };
    mainContainer.style['grid-template-columns'] = `repeat(${noOfDivs}, 1fr)`;
    mainContainer.style['grid-template-rows'] = `repeat(${noOfDivs}, 1fr)`;
};
generateGrid(noOfDivs)

// Process the creating new grid button
const sizePromptBtn = document.querySelector('#size-prompt-btn');
sizePromptBtn.addEventListener('click', () => {
    const desiredSize = prompt("Enter your desired size of board.");
    if (desiredSize > 100 || desiredSize <= 0) {
        alert('Please enter a number between 1 and 100.')
    }
    else {
        generateGrid(desiredSize);
    };
});