document.getElementById('quadraticForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('loadingBar').style.display = 'block';
    document.getElementById('loadingBar').style.backgroundSize = '100% 100%';

    setTimeout(function() {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = document.getElementById('c').value;

        var result = solveQuadratic(a, b, c);
        document.getElementById('result').innerText = result;

        document.getElementById('loadingBar').style.display = 'none';
        document.getElementById('loadingBar').style.backgroundSize = '0 100%';
    }, 1500);  // Adjust this value to change how long the loading bar is displayed.
});

function solveQuadratic(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (a === 0) {
        return 'Cannot solve: a cannot be 0';
    }

    var discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return 'Cannot solve: discriminant is less than zero, no real roots.';
    }

    var sqrtDiscriminant = Math.sqrt(discriminant);
    var x1 = (-b + sqrtDiscriminant) / (2 * a);
    var x2 = (-b - sqrtDiscriminant) / (2 * a);

    return 'The first solution is X1=' + x1 + ' and the second solution is X2= ' + x2 + '.';
}