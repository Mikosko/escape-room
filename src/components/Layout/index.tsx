import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';
import './style.scss';

@withRouter
export class Layout extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

interface TypeValidate {
  name: any;
  age: any;
}

type validateFunc<T> = (value: T) => (error: Partial<T>) => Partial<T>;

const validate: validateFunc<TypeValidate> = (value) => (error) => {
  if (value.age) {
    error.age = 'ąsda';
  }
  return error;
};

validate({ name: '', age: '' });
