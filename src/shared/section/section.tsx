import React, { ReactElement } from 'react';

interface SectionProps {
  readonly children?: any;
}

export class Section extends React.Component<SectionProps> {
  render(): ReactElement {
    return (
      <section className="section">
        <div className="container">{this.props.children}</div>
      </section>
    );
  }
}
