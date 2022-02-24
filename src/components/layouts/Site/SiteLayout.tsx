import React from 'react'

import { Header } from 'src/components/domain'

import styles from './styles.module.scss'

export const SiteLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.main_layout}>
      <Header />
      {children}
    </div>
  )
}
