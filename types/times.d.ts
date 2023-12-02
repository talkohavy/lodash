/** @param {{ howMany: number, funcToRun: (i:number) => void }} props */
export function times({ howMany, funcToRun }: {
    howMany: number;
    funcToRun: (i: number) => void;
}): void;
