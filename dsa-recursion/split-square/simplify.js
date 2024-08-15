function simplify(square) {
    if (typeof square === 'number') {
        return square;
    } else if (Array.isArray(square)) {
        let simplified = square.map(simplify);
        if (simplified.every(s => s === simplified[0])) {
            return simplified[0];
        }
        return simplified;
    }
    return square;
}
