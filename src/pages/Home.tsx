import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import BadgeIcon from '@mui/icons-material/Badge'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import { Card, CardContent, Typography } from '@mui/material'

import { Page } from 'src/components'
import routes from 'src/routes'

import styles from './styles.module.scss'

const iconStyles = {
  width: 150,
  height: 150,
}

export const Home: React.FC = () => {
  return (
    <Page>
      <div className={styles.flex}>
        <h2 className={styles.header}>Pick the role</h2>
        <CustomCard
          title="Advisor"
          text="Login as advisor"
          icon={<BadgeIcon sx={iconStyles} />}
        />
        <CustomCard
          title="Investor"
          text="Login as investor"
          icon={<LocalAtmIcon sx={iconStyles} />}
        />
        <CustomCard
          title="Operator"
          text="Login as operator"
          icon={<ManageAccountsIcon sx={iconStyles} />}
        />
      </div>
    </Page>
  )
}

interface CustomCardProps {
  title: string
  text: string
  icon: ReactNode
}
function CustomCard(props: CustomCardProps) {
  const { title, text, icon } = props
  return (
    <Link to={routes.login}>
      <Card className={styles.card}>
        <CardContent>
          {icon}
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
