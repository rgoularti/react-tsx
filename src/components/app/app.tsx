import React from 'react';

import { Button } from '../../shared';

export class App extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="field">
            <label className="label" htmlFor="name">
              Enter your name:
            </label>
            <div className="control">
              <input id="name" type="text" className="input is-primary" />
            </div>
          </div>

          <Button primary>Submit</Button>
        </div>
      </section>
    );
  }
}
