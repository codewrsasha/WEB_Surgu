const shapes = [
    { width: 50, height: 40 },
    { width: 100, height: 100 },
    { width: 80, height: 20 },
    { width: 30, height: 150 },
    { width: 120, height: 60 },
    { width: 60, height: 60 },
    { width: 150, height: 80},
    { width: 90, height: 40},
    { width: 75, height: 150},
    { width: 35, height: 180},
];

const parentElement = document.getElementById('parent');

for (let i = 0; i < shapes.length; i++) {
    const item = shapes[i];

    const newDiv = document.createElement('div');

    newDiv.style.width = item.width + 'px';
    newDiv.style.height = item.height + 'px';

    parentElement.appendChild(newDiv);
}