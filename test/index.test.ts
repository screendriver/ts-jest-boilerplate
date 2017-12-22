import { calculate } from '../src/index';

describe('index', () => {
  it('should return 123', () => {
    expect(calculate()).toEqual(123);
  });
});
