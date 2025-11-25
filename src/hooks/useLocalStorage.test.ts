import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the initial value if nothing is stored", () => {
    const { result } = renderHook(() => useLocalStorage("key", "default"));

    const [value] = result.current;

    expect(value).toBe("default");
  });

  it("reads an existing value from localStorage", () => {
    localStorage.setItem("key", JSON.stringify("saved"));

    const { result } = renderHook(() => useLocalStorage("key", "default"));

    const [value] = result.current;

    expect(value).toBe("saved");
  });

  it("writes updates to localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("key", "default"));

    act(() => {
      const [, setValue] = result.current;
      setValue("updated");
    });

    const [value] = result.current;

    expect(value).toBe("updated");
    expect(localStorage.getItem("key")).toBe(JSON.stringify("updated"));
  });
});
