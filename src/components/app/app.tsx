import React, { ReactElement } from 'react';

import { Button, Section, TextField } from '../../shared';
import styles from './app.module.css';

export class App extends React.Component {
  render(): ReactElement {
    return (
      <main>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">React with Typescript</h1>
              <h2 className="subtitle">Sample project for study purposes</h2>
            </div>
          </div>
        </section>

        <div className={`container ${styles.content}`}>
          <Section>
            <TextField id="name" labelText="Enter your name:"></TextField>
            <Button primary>Submit</Button>
          </Section>
        </div>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Created</strong> by <a href="https://www.linkedin.com/in/rgoularti">Rodrigo Goulart</a>.
            </p>
          </div>
        </footer>
      </main>
    );
  }
}
