import './button.css';

type ButtonProps = {
  className?: string,
  children?: React.ReactNode,
  disabled?: boolean,
  onClick: () => void,
  dataTestId?: string,
};

function Button(props: ButtonProps) {
  const { 
    className = '',
    children = null,
    disabled = false,
    onClick,
    dataTestId = ''
  } = props;

  return (
    <button
      onClick={ onClick }
      className={ `button-text ${className}` }
      disabled={ disabled }
      data-testid={ dataTestId }
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
