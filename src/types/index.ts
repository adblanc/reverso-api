export interface Params {
  autoReplace?: boolean;
  generateSynonyms?: boolean;
  getCorrectionDetails?: boolean;
  interfaceLanguage?: string;
  language?: 'fra' | 'eng';
  locale?: string;
  origin?: string;
  text: string;
}

export interface Result {
  id: string;
  language: string;
  text: string;
  engine: 'Cordial' | 'Ginger';
  truncated: boolean;
  timeTaken: number;
  corrections: Correction[];
  sentences: any[];
  autoReplacements: any[];
}

export interface Correction {
  group: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  startIndex: number;
  endIndex: number;
  mistakeText: string;
  correctionText: string;
  suggestions: Suggestion[];
}

export interface Suggestion {
  text: string;
}
