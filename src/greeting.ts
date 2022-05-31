type GreetConfig = { vitest?: boolean };

export const greet = (config: GreetConfig = { vitest: false }): string => {
  const viteFamily = ["Vite", config.vitest && "Vitest"]
    .flatMap((value) => value || [])
    .join(" + ");

  return `Hello ${viteFamily} + React!`;
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("greet", () => {
    expect(greet()).toBe("Hello Vite + React!");
    expect(greet({})).toBe("Hello Vite + React!");
    expect(greet({ vitest: false })).toBe("Hello Vite + React!");
    expect(greet({ vitest: true })).toBe("Hello Vite + Vitest + React!");
  });
}
