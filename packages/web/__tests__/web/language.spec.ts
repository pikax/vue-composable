import { useLanguage } from "../../src";

describe('language', () => {
  const windowEventSpy = jest.fn();
  const windowEvent = window.addEventListener;

  const raiseLanguageChange = () => windowEventSpy.mock.calls[0][1]();

  const languageGetter = jest.spyOn(navigator, 'language', 'get');
  const languagesGetter = jest.spyOn(navigator, 'languages', 'get');

  const updateLanguage = (language: string, languages: string[]) => {
    languageGetter.mockImplementation(() => language);
    languagesGetter.mockImplementation(() => languages);

    raiseLanguageChange();
  }

  beforeAll(() => {
    window.addEventListener = windowEventSpy;
  })
  afterAll(() => {
    window.addEventListener = windowEvent;
  })


  it('should only add event listener once', () => {
    expect(windowEventSpy).not.toHaveBeenCalled();

    useLanguage();
    useLanguage();

    expect(windowEventSpy).toHaveBeenCalled();
    expect(windowEventSpy).toHaveBeenCalledTimes(1);

    expect(windowEventSpy).toHaveBeenCalledWith('languagechange', expect.anything(), expect.objectContaining({ passive: true }))
  })


  it('should update languages', () => {
    const { language, preferred } = useLanguage();

    expect(language.value).toBe(navigator.language);
    expect(preferred.value).toBe(navigator.languages);

    let lang = 'en-GB';
    let pref = ['en-GB', 'en-EN', 'en'];

    updateLanguage(lang, pref);
    expect(language.value).toBe(lang);
    expect(preferred.value).toBe(pref);


    lang = 'en-EN';
    pref = ['pt-PT', 'en-EN', 'en'];

    updateLanguage(lang, pref);
    expect(language.value).toBe(lang);
    expect(preferred.value).toBe(pref);
  })

})