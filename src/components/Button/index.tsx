import style from './Button.module.scss';

interface Props {
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
  style?: React.HTMLAttributes<HTMLButtonElement>
}

export default function Button({ onClick, children, disabled }: Props) {
  return (
    <button disabled={disabled} onClick={onClick} className={style.button} style={style}>{children}</button>
  );
}
