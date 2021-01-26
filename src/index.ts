import fetch from 'node-fetch';
import { Params, Result } from './types';

const URL = 'https://orthographe.reverso.net/api/v1/Spelling';

const defaultParams = (params: Params): Params => {
  return Object.assign(
    {},
    {
      autoReplace: true,
      generateSynonyms: false,
      getCorrectionDetails: true,
      interfaceLanguage: 'fr',
      language: 'fra',
      locale: 'Indifferent',
      origin: 'interactive',
    },
    params
  );
};

export const checkSpelling = async (params: Params): Promise<Result> => {
  return (
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(defaultParams(params)),
      headers: { 'Content-Type': 'application/json' },
    })
  ).json();
};
