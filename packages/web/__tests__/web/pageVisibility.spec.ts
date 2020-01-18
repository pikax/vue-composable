import { usePageVisibility } from "../../src";

describe("pageVisibility", () => {
  const documentEventSpy = jest.fn();
  const documentEvent = document.addEventListener;

  const raiseVisibilityChange = () => documentEventSpy.mock.calls[0][1]();

  const visibilityGetter = jest.spyOn(document, 'visibilityState', 'get');
  const hiddenGetter = jest.spyOn(document, 'hidden', 'get');

  const updateVisibility = (v: VisibilityState, hidden: boolean) => {
    visibilityGetter.mockImplementation(() => v);
    hiddenGetter.mockImplementation(() => hidden);

    raiseVisibilityChange();
  }

  beforeAll(() => {
    document.addEventListener = documentEventSpy;
  })
  afterAll(() => {
    document.addEventListener = documentEvent;
  })

  it('should only add event listener once', () => {
    expect(documentEventSpy).not.toHaveBeenCalled();

    usePageVisibility();
    usePageVisibility();

    expect(documentEventSpy).toHaveBeenCalled();
    expect(documentEventSpy).toHaveBeenCalledTimes(1);

    expect(documentEventSpy).toHaveBeenCalledWith('visibilitychange', expect.anything(), expect.objectContaining({ passive: true }))
  })

  it('should update visibilityState and hidden', () => {
    const { visibility, hidden } = usePageVisibility();

    expect(visibility.value).toBe(document.visibilityState);
    expect(hidden.value).toBe(document.hidden);

    updateVisibility('hidden', true);
    expect(visibility.value).toBe('hidden');
    expect(hidden.value).toBe(true);

    updateVisibility('visible', false);
    expect(visibility.value).toBe('visible');
    expect(hidden.value).toBe(false);
  })
})