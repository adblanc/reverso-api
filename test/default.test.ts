import { checkSpelling } from '../src/index';

const BASIC_TEXT_FR = 'salut les amis';
const BASIC_TEXT_EN = 'hey friends';

describe('default values', () => {
  it('should work with default values', async () => {
    const res = await checkSpelling({ text: BASIC_TEXT_FR });

    expect(res.language).toBe('fra');
    expect(res.text).toBe(BASIC_TEXT_FR);
    expect(res.engine).toBe('Cordial');
    expect(res.truncated).toBe(false);
    expect(res.corrections.length).toEqual(0);
    expect(res.sentences.length).toEqual(0);
    expect(res.autoReplacements.length).toEqual(0);
  });

  it('should work with overrided values', async () => {
    const res = await checkSpelling({ text: BASIC_TEXT_EN, language: 'eng' });

    expect(res.language).toBe('eng');
    expect(res.text).toBe(BASIC_TEXT_EN);
    expect(res.engine).toBe('Ginger');
    expect(res.truncated).toBe(false);
    expect(res.corrections.length).toEqual(0);
    expect(res.autoReplacements.length).toEqual(0);
  });
});
