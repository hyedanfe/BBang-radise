import Button from '@components/ui/Button';
import PropTypes from 'prop-types';

Submit.propTypes = {
  children: PropTypes.string.isRequired,
};

function Submit({ children, ...rest }) {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
}

export default Submit;
