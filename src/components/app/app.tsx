import React, { ReactElement } from 'react';

import { Button, Section, TextField } from '../../shared';

export class App extends React.Component {
  render(): ReactElement {
    return (
      <Section>
        <TextField id="name" labelText="Enter your name:"></TextField>
        <Button primary>Submit</Button>
      </Section>
    );
  }
}
