import React from 'react';
import { Answer } from './index';

const AnswersList = (props: any) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value: { content: string }, index: number) => {
        return <Answer content={value.content} key={index.toString()} />;
      })}
    </div>
  );
};

export default AnswersList;
