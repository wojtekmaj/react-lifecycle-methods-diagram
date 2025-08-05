import Arrow from '../../diagramElements/Arrow.js';
import Method from '../../diagramElements/Method.js';
import Section from '../../diagramElements/Section.js';

type MountingProps = {
  advanced: boolean;
};

export default function Mounting({ advanced }: MountingProps) {
  return advanced ? (
    <Section advanced name="Mounting" col={1}>
      <Arrow />
      <Method main name="constructor" key="constructor" type="render" row={1} />
      <Arrow />
      <Method
        name="static getDerivedStateFromProps"
        key="getderivedstatefromprops"
        type="render"
        row={2}
        colspan={2}
        endsInMiddle
      />
      <Arrow />
      <Method main name="render" key="render" type="render" row={4} colspan={4} />
      <Arrow />
      <Method
        secondary
        name="React updates DOM and refs"
        key="react-updates-dom-and-refs"
        doc={false}
        type="pre-commit"
        row={6}
        colspan={4}
      />
      <Arrow solid />
      <Method main name="componentDidMount" key="componentdidmount" type="commit" row={7} />
    </Section>
  ) : (
    <Section name="Mounting" col={1}>
      <Arrow />
      <Method main name="constructor" key="constructor" type="render" row={1} />
      <Arrow />
      <Method main name="render" key="render" type="render" row={2} colspan={4} />
      <Arrow />
      <Method
        secondary
        name="React updates DOM and refs"
        key="react-updates-dom-and-refs"
        doc={false}
        type="pre-commit"
        row={3}
        colspan={4}
      />
      <Arrow solid />
      <Method main name="componentDidMount" key="componentdidmount" type="commit" row={4} />
    </Section>
  );
}
