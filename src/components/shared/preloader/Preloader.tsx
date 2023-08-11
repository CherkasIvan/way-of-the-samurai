import { FC } from 'react'
import styles from './Preloader.module.scss'
import Spinner from '../../../assets/spinner/Spinner-1s-200px.svg'

interface IPreloaderProps {
 isFetching: boolean
}

const Preloader: FC<IPreloaderProps> = ({isFetching}) => {
  return (
    <div>{isFetching ? <img className={styles.Preloader} src={Spinner} alt={Spinner}/> : null}</div>
  )
}

export default Preloader