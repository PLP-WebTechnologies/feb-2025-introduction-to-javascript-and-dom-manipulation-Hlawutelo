// Text content manipulation
function changeText() {
    const title = document.getElementById('title');
    const texts = ['Amazing Html', 'JavaScript is Fun', 'Dynamic Content'];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    title.textContent = randomText;
}

// Style manipulation
function toggleStyle() {
    const text = document.getElementById('styleText');
    text.classList.toggle('highlight');
    if (text.classList.contains('highlight')) {
        text.style.color = '#2c3e50';
        text.style.fontWeight = 'bold';
    } else {
        text.style.color = '';
        text.style.fontWeight = '';
    }
}

// Add new element
function addElement() {
    const container = document.getElementById('container');
    const newElement = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString();
    newElement.innerHTML = `
        <p class="dynamic-element">
            Added at: ${timestamp}
            <span class="delete-btn" onclick="this.parentElement.remove()">❌</span>
        </p>
    `;
    newElement.querySelector('p').style.margin = '10px 0';
    container.appendChild(newElement);
}

// Remove last added element
function removeElement() {
    const container = document.getElementById('container');
    const elements = container.getElementsByClassName('dynamic-element');
    if (elements.length > 0) {
        elements[elements.length - 1].remove();
    }
}