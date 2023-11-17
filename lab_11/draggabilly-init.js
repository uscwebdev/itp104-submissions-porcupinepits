document.addEventListener('DOMContentLoaded', function() {
    // Initialize Draggabilly for each puzzle piece
    var puzzlePieces = document.querySelectorAll('.puzzle-piece');
    var draggies = [];

    puzzlePieces.forEach(function(piece) {
        var draggie = new Draggabilly(piece);
        draggies.push(draggie);

        // Store the initial position of each piece
        piece.setAttribute('data-initial-x', draggie.position.x);
        piece.setAttribute('data-initial-y', draggie.position.y);
    });

    // Reset button functionality
    var resetButton = document.getElementById('resetPuzzle');
    resetButton.addEventListener('click', function() {
        draggies.forEach(function(draggie) {
            // Reset position of each piece
            var initialX = draggie.element.getAttribute('data-initial-x');
            var initialY = draggie.element.getAttribute('data-initial-y');
            draggie.setPosition(initialX, initialY);
        });
    });
});
