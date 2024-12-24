
document.getElementById('colorCount').addEventListener('change', function() {
    const colorCount = parseInt(this.value);
    let container = document.getElementById('colorInputsContainer');
    container.innerHTML = ''; 
    

    for (let i = 1; i <= colorCount; i++) {
        const input = document.createElement('input');
        input.type = 'color';
        input.id = `color${i}`;
        input.value = i === 1 ? '#ff0000' : (i === 2 ? '#000000' : (i === 3 ? '#0000ff' : (i === 4 ? '#00ff00' : '#ffff00')));
        container.appendChild(input);
    }
});
document.getElementById('generateGradient').addEventListener('click', function() {
    const colorCount = parseInt(document.getElementById('colorCount').value);
    const gradientColors = [];

    for (let i = 1; i <= colorCount; i++) {
        gradientColors.push(document.getElementById(`color${i}`).value);
    }

    const body = document.body;
    const cssCode = `background: linear-gradient(to right, ${gradientColors.join(', ')});`;
    body.style.background = `linear-gradient(to right, ${gradientColors.join(', ')})`;

    document.querySelector('h1').style.color = 'white';
    document.querySelector('h3').style.color = 'white'; 
    document.querySelector('label').style.color = 'white'; 

    document.getElementById('cssCode').value = cssCode;
});

