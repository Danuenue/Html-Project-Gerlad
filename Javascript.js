function calculateVelocity(force, mass) {
    return force / mass;
}

function applyForce() {
    const obj1 = document.getElementById('object1');
    const obj2 = document.getElementById('object2');
    
    const mass1 = parseFloat(document.getElementById('mass1').value);
    const mass2 = parseFloat(document.getElementById('mass2').value);
    const force = parseFloat(document.getElementById('force').value);

    const velocityA = calculateVelocity(force, mass1);
    const velocityB = calculateVelocity(force, mass2);

    document.getElementById('velocityA').textContent = `Velocity of Object A: ${velocityA.toFixed(2)} m/s`;
    document.getElementById('velocityB').textContent = `Velocity of Object B: ${velocityB.toFixed(2)} m/s`;

    document.getElementById('message').textContent = "Forces applied! Objects are moving...";

    obj1.style.animation = `moveLeft 2s linear forwards`;
    obj2.style.animation = `moveRight 2s linear forwards`;

    setTimeout(() => {
        obj1.style.left = `20%`;
        obj2.style.right = `20%`;
        document.getElementById('message').textContent = "Simulation complete! Click the button to apply force again.";
    }, 2000);
}
