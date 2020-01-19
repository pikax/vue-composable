import { useStorage } from '../../src';



describe('storage', () => {
  // const webStorageSpy = jest.spyOn(web, 'useWebStorage');

  // beforeEach(() => {
  //   webStorageSpy.mockClear();
  // });

  it('should get localStorage if supported', () => {
    const { storage } = useStorage('');

    expect(storage).not.toBeNull();
  })

})