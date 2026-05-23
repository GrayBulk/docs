"use strict";

var _docgenParser = require("./docgenParser");
describe('formatString', () => {
  it('removes single and double quotes', () => {
    expect((0, _docgenParser.formatString)(`"hello" 'world'`)).toBe('hello world');
  });
  it('replaces newlines with spaces', () => {
    expect((0, _docgenParser.formatString)('line1\nline2\nline3')).toBe('line1 line2 line3');
  });
  it('removes backticks', () => {
    expect((0, _docgenParser.formatString)('`code`')).toBe('code');
  });
  it('handles all transformations together', () => {
    expect((0, _docgenParser.formatString)(`"hello"\n'world' \`code\``)).toBe('hello world code');
  });
  it('returns empty string for empty input', () => {
    expect((0, _docgenParser.formatString)('')).toBe('');
  });
  it('leaves normal text unchanged', () => {
    expect((0, _docgenParser.formatString)('just plain text')).toBe('just plain text');
  });
});
describe('formatPropItemType', () => {
  it('simplifies ReactElement type', () => {
    expect((0, _docgenParser.formatPropItemType)('ReactElement<any, string | JSXElementConstructor<any>>')).toBe('ReactElement');
  });
  it('simplifies ReactNode union type', () => {
    expect((0, _docgenParser.formatPropItemType)('Iterable<ReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | false | null | number | string | true | {}')).toBe('ReactNode');
  });
  it('simplifies Animated ViewStyle type', () => {
    expect((0, _docgenParser.formatPropItemType)('false | RegisteredStyle<ViewStyle> | Value | AnimatedInterpolation | WithAnimatedObject<ViewStyle> | WithAnimatedArray<...> | null')).toBe('Animated<ViewStyle> | ViewStyle');
  });
  it('passes unrecognized types through formatString', () => {
    expect((0, _docgenParser.formatPropItemType)('string')).toBe('string');
    expect((0, _docgenParser.formatPropItemType)('number | undefined')).toBe('number | undefined');
  });
  it('cleans quotes and backticks from unrecognized types', () => {
    expect((0, _docgenParser.formatPropItemType)(`"primary" | "secondary"`)).toBe('primary | secondary');
  });
});
describe('getDocExample', () => {
  function docWithExample(example) {
    return {
      tags: example !== undefined ? {
        example
      } : undefined
    };
  }
  it('returns undefined when no tags exist', () => {
    expect((0, _docgenParser.getDocExample)({
      tags: undefined
    })).toBeUndefined();
  });
  it('returns undefined when no example tag exists', () => {
    expect((0, _docgenParser.getDocExample)(docWithExample(undefined))).toBeUndefined();
  });
  it('wraps plain code examples in tsx live fences', () => {
    const example = '<Button>Click</Button>';
    expect((0, _docgenParser.getDocExample)(docWithExample(example))).toBe('```tsx live\n<Button>Click</Button>\n```');
  });
  it('replaces tsx with tsx live in pre-fenced examples', () => {
    const example = '```tsx\n<Button>Click</Button>\n```';
    expect((0, _docgenParser.getDocExample)(docWithExample(example))).toBe('```tsx live\n<Button>Click</Button>\n```');
  });
});