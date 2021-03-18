import React from 'react';
import { Answer } from './index';

const AnswersList = (props: any) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map(
        (
          value: { content: {}; nextId: string },
          index: { toString: () => any }
        ) => {
          return (
            <Answer
              content={value.content}
              nextId={value.nextId}
              key={index.toString()}
              select={props.select}
            />
          );
        }
      )}
    </div>
  );
};

export default AnswersList;
