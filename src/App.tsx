import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';

type MyState = {
  answers: [];
  chats: [];
  currentId: string;
  dataset: {};
  open: boolean;
};

export default class App extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false,
    };
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">{this.state.currentId}</div>
      </section>
    );
  }
}
