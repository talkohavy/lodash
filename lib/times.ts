function times({ howMany, funcToRun }: { howMany: number; funcToRun: (i: number) => void }) {
  for (let i = 0; i < howMany; i++) funcToRun(i);
}

export { times };
