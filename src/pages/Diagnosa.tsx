import { ComponentPropsWithoutRef, useState } from "react";
import { symptoms } from "../lib/gejala";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { Button, Label, Radio } from "flowbite-react";
import { isDengue } from "../lib/logika";

interface QuestionProps extends ComponentPropsWithoutRef<"fieldset"> {
  index: number;
  answer: boolean;
  handleAnswer: (index: number, isYes: boolean) => void;
}

function Question({
  children,
  index,
  answer,
  handleAnswer,
  ...props
}: QuestionProps) {
  return (
    <fieldset
      className="flex w-[50vw] flex-col items-center gap-4 rounded-md border p-4 shadow-sm"
      {...props}
    >
      <legend className="mb-4 w-full text-center text-xl">{children}</legend>
      <div className="flex w-full justify-center gap-8">
        <div className="flex items-center justify-center">
          <Radio
            id={`pertanyaan-${index}-iya`}
            name={`jawaban-${index}`}
            value="iya"
            checked={answer === true}
            onChange={() => handleAnswer(index, true)}
            className="h-6 w-6"
          />
          <Label
            htmlFor={`pertanyaan-${index}-iya`}
            className="ml-2 cursor-pointer text-lg"
          >
            Iya
          </Label>
        </div>
        <div className="flex items-center justify-center">
          <Radio
            id={`pertanyaan-${index}-tidak`}
            name={`jawaban-${index}`}
            value="tidak"
            checked={answer === false}
            onChange={() => handleAnswer(index, false)}
            className="h-6 w-6"
          />
          <Label
            htmlFor={`pertanyaan-${index}-tidak`}
            className="ml-2 cursor-pointer text-lg"
          >
            Tidak
          </Label>
        </div>
      </div>
    </fieldset>
  );
}

function Diagnosa() {
  const [cookies] = useCookies(["username"]);
  const [answer, setAnswer] = useState<boolean[]>(
    new Array(symptoms.length).fill(false),
  );
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);

  function handleAnswer(index: number, isYes: boolean) {
    const newAnswer = [...answer];
    newAnswer[index] = isYes;
    setAnswer(newAnswer);
  }

  function handleDiagnose() {
    setIsAnswered(true);
    setResult(isDengue(answer));
  }

  if (!cookies.username) {
    return <Navigate replace to="/masuk" />;
  }

  return (
    <>
      <section className="flex h-[50vh] w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Halo, {cookies.username}</h1>
        <p>Mulai diagnosa dengan menjawab pertanyaan pertanyaan di bawah ini</p>
      </section>
      <section className="mb-10 flex flex-col items-center justify-center gap-4">
        <fieldset className="flex w-full flex-col items-center gap-4">
          {symptoms.map((symptom, index) => (
            <Question
              key={`pertanyaan ${index}`}
              index={index}
              answer={answer[index]}
              handleAnswer={handleAnswer}
            >
              {symptom.question}
            </Question>
          ))}
        </fieldset>
        <Button onClick={handleDiagnose}>Diagnosa</Button>
      </section>
      {isAnswered && (
        <section>
          <h1 className="text-center text-3xl font-bold">
            {result ? "Anda terdiagnosa DBD" : "Anda tidak terdiagnosa DBD"}
          </h1>
        </section>
      )}
    </>
  );
}

export default Diagnosa;
