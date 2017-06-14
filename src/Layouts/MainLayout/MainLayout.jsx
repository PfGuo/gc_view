import React, { Component, PropTypes } from 'react';
import LeftMenu from '../../components/LeftMenu';
import styles from './MainLayout.less'

const H = window.screen.height - 165;

const MainLayout = ({ children }) => {
  return (
    <div>
        <div className={styles.top}></div>
        <div style={{ height: H }}>
            <div className={styles.left}>
                <LeftMenu />
            </div>
            <div className={styles.right}>
                {children}
            </div>
        </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;