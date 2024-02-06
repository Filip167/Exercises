"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

def __init__(self, start):
        """Initialize with a start number."""
        self.start = start
        self.current = start

    def generate(self):
        """Generate the next sequential number."""
        result = self.current
        self.current += 1
        return result

    def reset(self):
        """Reset the number back to the original start number."""
        self.current = self.start