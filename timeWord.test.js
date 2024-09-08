const timeWord = require('./timeWord');

describe('timeWord', () => {
  test('should handle midnight', () => {
    expect(timeWord("00:00")).toBe("midnight");
  });

  test('should handle noon', () => {
    expect(timeWord("12:00")).toBe("noon");
  });

  test('should handle morning times', () => {
    expect(timeWord("06:01")).toBe("six oh one am");
    expect(timeWord("06:10")).toBe("six ten am");
    expect(timeWord("10:34")).toBe("ten thirty four am");
  });

  test('should handle afternoon times', () => {
    expect(timeWord("12:09")).toBe("twelve oh nine pm");
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });

  test('should handle exact hour times', () => {
    expect(timeWord("01:00")).toBe("one o’clock am");
    expect(timeWord("06:00")).toBe("six o’clock am");
  });
});
