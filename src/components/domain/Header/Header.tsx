import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from 'src/logo.svg'
import routes from 'src/routes'

import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={routes.home}>
        <Logo width={25} />
      </Link>
    </header>
  )
}
