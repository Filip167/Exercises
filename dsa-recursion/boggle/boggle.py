def make_board(board_string):
    """Make a board from a string."""

    letters = board_string.split()

    board = [
        letters[0:5],
        letters[5:10],
        letters[10:15],
        letters[15:20],
        letters[20:25],
    ]

    return board


def find_from(board, word, y, x, seen):
    """Can we find a word on board, starting at x, y?"""

    # Base case: this isn't the letter we're looking for.
    if board[y][x] != word[0]:
        return False

    # Base case: we've used this letter before in this current path
    if (y, x) in seen:
        return False

    # Base case: we are down to the last letter --- so we win!
    if len(word) == 1:
        return True

    # Mark the current letter as seen and continue searching
    seen = seen | {(y, x)}

    # Check all possible directions (N, E, W, S)
    if y > 0 and find_from(board, word[1:], y - 1, x, seen):
        return True
    if y < 4 and find_from(board, word[1:], y + 1, x, seen):
        return True
    if x > 0 and find_from(board, word[1:], y, x - 1, seen):
        return True
    if x < 4 and find_from(board, word[1:], y, x + 1, seen):
        return True

    return False


def find(board, word):
    """Can word be found in board?"""

    # Try starting from every position on the board
    for y in range(0, 5):
        for x in range(0, 5):
            if find_from(board, word, y, x, seen=set()):
                return True

    return False


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED; YOU FOUND SUCCESS! ***\n")
