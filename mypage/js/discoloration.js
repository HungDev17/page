const textElement = document.getElementById('discoloration-text');
const text = textElement.textContent;
const colors = ["rgb(255, 124, 0)"];
let currentIndex = 0;

function discoloration(){
    const currentColor = colors[currentIndex % colors.length];
    const coloredText = text.split('').map((char, index) => {
        return `<span style="color: ${index === currentIndex ? currentColor : '#081b29'}">${char}</span>`;
    }).join('');

    textElement.innerHTML = coloredText;
    
    currentIndex = (currentIndex + 1) % text.length;
}
setInterval(discoloration , 500);