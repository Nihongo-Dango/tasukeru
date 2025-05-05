import { expect, test } from "vitest";
import { isHiragana, isKatakana, isKana } from ".";

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
