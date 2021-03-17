import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList } from './components';

type MyState = {
  answers: [];
  chats: [];
  currentId: string;
  dataset: {};
  open: boolean;
};

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
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers,
    });
  };

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}
