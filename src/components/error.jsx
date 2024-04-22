import PropTypes from 'prop-types';

export const FallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>잘못된 접근 방식</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
};

export const ThrowErrorComponent = ({ name }) => {
  if (name === '') throw Error('[ThrowErrorComponent] : Invalid name');
  return <h1>Hello, {name}!</h1>;
};

FallbackComponent.propTypes = {
  error: PropTypes.instanceOf(Error),
  resetErrorBoundary: PropTypes.func,
};

ThrowErrorComponent.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string,
  resetErrorBoundary: PropTypes.string,
};
