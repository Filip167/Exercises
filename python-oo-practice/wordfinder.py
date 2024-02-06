import random

"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """Word Finder: finds random words from a dictionary.
    
    Machine for finding random words from dictionary.
    
    >>> wf = WordFinder("simple.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """

    def __init__(self, file_path):
        """Initialize WordFinder with a file path."""
        self.words = self.read_words(file_path)
        print(f"{len(self.words)} words read")

    def read_words(self, file_path):
        """Read words from the given file and return a list of words."""
        with open(file_path, 'r') as file:
            return [line.strip() for line in file]

    def random(self):
        """Return a random word from the list of words."""
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """SpecialWordFinder: a subclass that filters out blank lines and comments.
    
    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    """

    def read_words(self, file_path):
        """Read words, filtering out blank lines and comments."""
        with open(file_path, 'r') as file:
            return [line.strip() for line in file if line.strip() and not line.startswith('#')]


