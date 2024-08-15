function dump(square) {
    if (typeof square === 'number') {
        console.log(square);
    } else if (Array.isArray(square)) {
        for (let sq of square) {
            dump(sq);
        }
    }
}