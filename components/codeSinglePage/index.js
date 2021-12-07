import Background from "./background";
import Card from "./card";
import Code from "./code";

export default function CodeSingle({
  from,
  to,
  cardContent,
  background,
  count,
  code,
}) {
  return (
    <div className="grid Grid_codeLayout lg:Grid_codeLayout-lg">
      <Background from={from} to={to} />
      <Card>{cardContent}</Card>
      <Code background={background} count={count} code={code} />
    </div>
  );
}
