import { useState } from "react";

import { questions } from "./questions";
import Question from "./components/Question";

function App() {
  return (
    <main>
      <div className="questions-container">
        <h2>Frequently Asked Questions</h2>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;
