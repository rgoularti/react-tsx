import React from 'react';

interface ButtonProps {
  readonly primary?: boolean;
}

export class Button extends React.Component<ButtonProps> {
  private get className(): string {
    const _className: string[] = ['button'];
    if (this.props.primary) {
      _className.push('is-primary');
    }

    return _className.join(' ');
  }

  render() {
    return <button className={this.className}>Submit</button>;
  }
}
