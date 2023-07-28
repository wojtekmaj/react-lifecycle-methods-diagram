import Section from '../../diagramElements/Section.js';
import Method from '../../diagramElements/Method.js';
import Arrow from '../../diagramElements/Arrow.js';

type UnmountingProps = {
  advanced: boolean;
};

export default function Unmounting({ advanced }: UnmountingProps) {
  return (
    <Section advanced={advanced} name="Unmounting" col={5}>
      <Arrow />
      <Method
        main
        name="componentWillUnmount"
        key="componentwillunmount"
        type="commit"
        row={advanced ? 7 : 4}
      />
    </Section>
  );
}
