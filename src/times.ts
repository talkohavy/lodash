type TimesProps = {
  howMany: number;
  funcToRun: (iterationNumber: number) => void;
};

function times(props: TimesProps) {
  const { howMany, funcToRun } = props;

  for (let i = 0; i < howMany; i++) funcToRun(i);
}

export { times };
