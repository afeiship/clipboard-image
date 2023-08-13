import Clip from '../src';

describe('api.basic', () => {
  test('read image', async () => {
    await Clip.read();
  });
});
