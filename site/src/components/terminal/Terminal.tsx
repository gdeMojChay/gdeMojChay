import React from 'react';
import styles from './Terminal.module.scss';
import Simulator from './Simulator';
const Terminal: React.FC<{
  user?: string;
  name?: string;
  startMessage?: string;
}> = ({ user = 'user', name = 'computer', startMessage }) => {
  return (
    <div className={styles.terminal}>
      <div className={styles.terminal__top}>
        <div>
          <svg width="60" height="15">
            <circle cx="15" cy="7" r="6" style={{ fill: 'rgb(230,106,103)' }} />
            <circle cx="30" cy="7" r="6" style={{ fill: 'rgb(233,214,137)' }} />
            <circle cx="45" cy="7" r="6" style={{ fill: 'rgb(184,227,139)' }} />
          </svg>
        </div>
        <div className={styles.terminal__header}>
          {user}@{name}
        </div>
      </div>
      <Simulator
        name={name}
        user={user}
        borderRadius={{ bottomLeft: '0.5rem', bottomRight: '0.5rem' }}
        startMessage={startMessage}
      />
    </div>
  );
};

export default Terminal;
