import Background from "./background";
import Card from "./card";
import Code from "./code";

export default function CodeBlock({
  from,
  to,
  cardContent,
  background,
  pageOne,
  pageTwo,
  countOne,
  codeOne,
  countTwo,
  codeTwo,
}) {
  return (
    <div className="grid Grid_codeLayout lg:Grid_codeLayout-lg">
      <Background from={from} to={to} />
      <Card>{cardContent}</Card>
      <Code
        background={background}
        pageOne={pageOne}
        pageTwo={pageTwo}
        countOne={countOne}
        codeOne={codeOne}
        countTwo={countTwo}
        codeTwo={codeTwo}
      />
    </div>
  );
}
