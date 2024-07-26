import { act, renderHook } from "@testing-library/react";

import { useLocalStorage } from "./use-local-storage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("should initialize with the given initial value", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "initialValue")
    );

    expect(result.current[0]).toBe("initialValue");
  });

  test("should save and retrieve the value from localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "initialValue")
    );

    // Update the value
    act(() => {
      result.current[1]("newValue");
    });

    // Re-render to check updated value
    const { result: updatedResult } = renderHook(() =>
      useLocalStorage("testKey", "initialValue")
    );

    expect(updatedResult.current[0]).toBe("newValue");
  });
});
