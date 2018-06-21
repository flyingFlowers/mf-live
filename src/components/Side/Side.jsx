import React from 'react';
import IconBug from 'material-ui/svg-icons/action/bug-report';
import IconCopyright from 'material-ui/svg-icons/action/copyright';
import Favorite from 'components/Favorite';
import Header from 'components/Header';
import styles from './Side.css';
import { IconLogo, IconGithub } from '../Icons';

export default () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <h1><IconLogo /></h1>
      <h2>欢迎花农回家！</h2>
      <p>种花家直播平台<br/>网罗全球热门主播于一身，支持一屏多看<br />making flower, creating love! </p>
      <div className={styles.icon}>
        <a data-tip="Github" href="https://github.com/flyingFlowers/mf-live" target="_blank"><IconGithub /></a>
        <a data-tip="Bug反馈" href="https://github.com/flyingFlowers/mf-live/issues/new" target="_blank"><IconBug className={styles.size} /></a>
        <IconCopyright data-tip="本站内容均为各大平台采集获得，若出现违规内容请及时邮件告知1427302352@qq.com，谢谢监督" className={styles.size} />
      </div>
    </div>
    <div className={styles.layout}>
      <div className={styles.layoutInner}>
        <Favorite />
      </div>
    </div>
    <Header />
  </div>
);
