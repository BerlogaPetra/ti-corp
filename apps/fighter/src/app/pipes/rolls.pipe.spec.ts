import { RollPipe } from './rolls.pipe';

describe('RollsPipe', () => {
  it('create an instance', () => {
    const pipe = new RollPipe();
    expect(pipe).toBeTruthy();
  });
});
