import makeFlatten from './../';

describe('Base test', () => {
  const n1 = [
    [1]
  ];
  const n3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const n5  = [
    [1, 2, 3, 10, 11],
    [4, 5, 6, 12, 13],
    [7, 8, 9, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  it('Check n = 1', () => {
    const actual = makeFlatten(n1);
    const expected = [1];
    expect(actual).toEqual(expected);
  });

  it('Check n = 3', () => {
    const actual = makeFlatten(n3);
    const expected = [5, 4, 7, 8, 9, 6, 3, 2, 1];
    expect(actual).toEqual(expected);
  });

  it('Check n = 5', () => {
    const actual = makeFlatten(n5);
    const expected = [9, 8, 17, 18, 19, 14, 12, 6, 5, 4, 7, 16, 21, 22, 23, 24, 25, 20, 15, 13, 11, 10, 3, 2, 1];
    expect(actual).toEqual(expected);
  });

});