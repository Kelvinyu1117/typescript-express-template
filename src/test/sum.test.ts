import sum from '../sum';

test('1 + 1 = 2', ()=> {
    let x: number = 1, y: number = 1;
    let expected:number = 2;

    let actual:number = sum(x, y);

    expect(actual).toBe(expected);
});