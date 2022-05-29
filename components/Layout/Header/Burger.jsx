import MenuIcon from '../../icons/MenuIcon'
import CloseIcon from '../../icons/CloseIcon'

export default function Burger({ active, onClick }) {
  return (
    <button
      type="button"
      className="md:hidden"
      onClick={onClick}
    >
      {active ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
