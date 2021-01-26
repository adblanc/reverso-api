# reverso-api

A node.js module to use reverso spell checking API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```sh
npm install @ablanc/reverso-api

# or with yarn
yarn add @ablanc/reverso-api
```

## Usage

```ts
import { checkSpelling } from '@ablanc/reverso-api';

async function test() {
  const res = await checkSpelling({ text: 'salut les amis' });

  console.log(res);
}

test();
```

Here are the properties you can override when calling `checkSpelling` :

```ts
interface Params {
  autoReplace?: boolean;
  generateSynonyms?: boolean;
  getCorrectionDetails?: boolean;
  interfaceLanguage?: string;
  language?: 'fra' | 'eng';
  locale?: string;
  origin?: string;
  text: string;
}
```

The result object should look like this :

```ts
interface Result {
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

interface Correction {
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

interface Suggestion {
  text: string;
}
```
