# Translation module

## Usage of translation module

1. Define translatable string in the code using `<T>` tag:
    ```js
    <T>Original phrase</T>
    ```
    or using `useTranslation` hook if needed:
    ```js
    const translatedPhrase = useTranslation('Original phrase');
    ```
    If necessary, you may use variables like so:
     ```js
    <T name={name}>{'Hello, {name}'}</T>
    ```
    ```js
    const translatedPhrase = useTranslation('Hello, {name}', { name });
    ```
2. If you're a translator, add a corresponding entry in language JSON files, for example:
    ```json
    {
      "Original phrase": "Przetłumaczona fraza"
    }
    ```
    You don't need to add anything for a new en-US string.

## How to add new language

1. Add a new JSON file named with by languages's [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), e.g. `pt-BR.json`. [A list of common codes](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers#0x0400---0x04ff) may come in handy.
2. Take one of the previously set up JSONs to copy all the keys of the strings that need translations and fill in your JSON with translated phrases.
3. In `i18n.js`, add JSON file to the list of imports in `languageFiles`, e.g. `'pt-BR': import('./pt-BR.json'),`.
4. Verify that strings are loaded correctly by running the project locally.

## How it works

`getMatchingLocale` function returns a locale that is a preferred one for current user based on browser settings. Matching JSON language file is dynamically imported. Once it's loaded, original phrase is replaced by T component with translated one, provided that it was defined in proper JSON file.
