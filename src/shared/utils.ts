import Arrow from '../diagramElements/Arrow.js';
import Initiator from '../diagramElements/Initiator.js';
import Method from '../diagramElements/Method.js';
import Subsection from '../diagramElements/Subsection.js';

export function isArrow(
  child: React.ReactElement,
): child is React.ReactElement<{ from?: number; to?: number }> {
  return child.type === Arrow;
}

export function isInitiator(
  child: React.ReactElement,
): child is React.ReactElement<{ row?: number }> {
  return child.type === Initiator;
}

export function isMethod(
  child: React.ReactElement,
): child is React.ReactElement<{ col?: number; colspan?: number; row?: number }> {
  return child.type === Method;
}

export function isSubsection(
  child: React.ReactElement,
): child is React.ReactElement<{ col?: number; colspan?: number; sectionCol?: number }> {
  return child.type === Subsection;
}

function isUppercase(letter: string): boolean {
  return /[A-Z]/.test(letter);
}

// Splits camelCase with ZWJ characters to help with line breaking
export function splitUpperCase(str: string): string {
  if (!str) {
    return str;
  }

  return str
    .split('')
    .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '');
}
