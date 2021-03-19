import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components';

// type MyState = {
//   answers: [];
//   chats: [];
//   currentId: string;
//   dataset: {};
//   open: boolean;
// };

export default class App extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false,
    };
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestion = (nextQuestionId: any) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question',
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };

  selectAnswer = (selectedAnswer: any, nextQuestionId: any) => {
    switch (true) {
      case nextQuestionId === 'init':
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      case /^https:*/.test(nextQuestionId):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = 'blank';
        a.click();
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer',
        });

        this.setState({
          chats: chats,
        });

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

  componentDidMount() {
    const initAnswer = '';
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
        </div>
      </section>
    );
  }
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}
