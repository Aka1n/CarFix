import React, {FC} from 'react';
import classes from './Title2.module.less'


const Title2: FC<{text: string}> = ({text}) => {
  return (
    <div className={classes.title}>
      <span/>
      <h2 className={classes.text}>{text}</h2>
      <span/>
    </div>
  )
}

export default Title2