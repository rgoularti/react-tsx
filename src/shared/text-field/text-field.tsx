import React, { ReactElement } from 'react';

interface TextFieldProps {
  readonly id: string;
  readonly labelText: string;
}

export class TextField extends React.Component<TextFieldProps> {
  render(): ReactElement {
    return (
      <div className="field">
        <label className="label" htmlFor={this.props.id}>
          {this.props.labelText}
        </label>
        <div className="control">
          <input id={this.props.id} type="text" className="input is-primary" />
        </div>
      </div>
    );
  }
}
