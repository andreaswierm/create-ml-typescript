import { add, greet } from '../src';

describe('@create-ml-typescript/cli module', () => {
  it('should add', () => {
    expect(add(2, 3)).toEqual(5);
  });
  it('should greet', () => {
    expect(greet('world')).toEqual('@create-ml-typescript/cli says: hello to world');
  });
});
