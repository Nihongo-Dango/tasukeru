import { expect, test } from "vitest";
import {
  isHiragana,
  isKatakana,
  isKana,
  hasHiragana,
  hasKatakana,
  hasKana,
} from ".";

// isHiragana
test("Receives hiragana, returns true", () => {
  expect(isHiragana("あ")).toBe(true);
});

test("Receives katakana, returns false", () => {
  expect(isHiragana("ア")).toBe(false);
});

test("Receives english, returns false", () => {
  expect(isHiragana("a")).toBe(false);
});

test("Receives multiple characters, only checks the first", () => {
  expect(isHiragana("あアabc")).toBe(true);
});

// isKatakana
test("Receives katakana, returns true", () => {
  expect(isKatakana("ア")).toBe(true);
});

test("Receives katakana, returns false", () => {
  expect(isKatakana("あ")).toBe(false);
});

test("Receives english, returns false", () => {
  expect(isKatakana("a")).toBe(false);
});

test("Receives multiple characters, only checks the first", () => {
  expect(isKatakana("アあabc")).toBe(true);
});

// isKana
test("Receives katakana, returns true", () => {
  expect(isKana("ア")).toBe(true);
});

test("Receives hiragana, returns true", () => {
  expect(isKana("あ")).toBe(true);
});

test("Receives english, returns false", () => {
  expect(isKana("a")).toBe(false);
});

// hasHiragana
test("Receives all hiragana, returns true", () => {
  expect(hasHiragana("あいえうお")).toBe(true);
});

test("Receives all katakana, returns false", () => {
  expect(hasHiragana("アイエウオ")).toBe(false);
});

test("Receives all english, returns false", () => {
  expect(hasHiragana("aieuo")).toBe(false);
});

test("Receives hiragana, katakana, english, returns true", () => {
  expect(hasHiragana("あいえうおアイエウオaieuo")).toBe(true);
});

// hasKatakana
test("Receives all katakana, returns true", () => {
  expect(hasKatakana("アイエウオ")).toBe(true);
});

test("Receives all hiragana, returns false", () => {
  expect(hasKatakana("あいえうお")).toBe(false);
});

test("Receives all english, returns false", () => {
  expect(hasKatakana("aieuo")).toBe(false);
});

test("Receives katakana, hiragana, english, returns true", () => {
  expect(hasKatakana("あいえうおアイエウオaieuo")).toBe(true);
});

// hasKana
test("Receives all katakana, returns true", () => {
  expect(hasKana("アイエウオ")).toBe(true);
});

test("Receives all hiragana, returns true", () => {
  expect(hasKana("あいえうお")).toBe(true);
});

test("Receives all english, returns false", () => {
  expect(hasKana("aieuo")).toBe(false);
});

test("Receives katakana, hiragana, english, returns true", () => {
  expect(hasKana("あいえうおアイエウオaieuo")).toBe(true);
});
