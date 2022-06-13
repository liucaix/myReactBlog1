import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css'

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="刘菜的个人网站">
            {/*write your code here to show your website... */}
            <div className='middleBox'>
                <div className='middleTextBox'>
                    <p className='middleText helloText'>你好!我是刘菜.</p>
                    <p className='middleText'>一位菜鸟前端程序员</p>
                    <p className='middleText'>HFUT计科大一在读</p>
                    <p className='middleText'>请多指教!</p>
                </div>
                <div className='circle'>
                    <div className="avatar">
                        <img src="/img/avatar.png" alt="loading..." className="avatarImg"/>
                    </div>
                    <div className="circle-info-box">
                        <img className="circle-info-icon githubIcon" src='/svg/icon_github-circle.svg' />
                        <img className="circle-info-icon bilibiliIcon" src='/svg/icon_bilibili-circle.svg'/>
                        <img className="circle-info-icon wechatIcon" src='/svg/icon_wechat-circle.svg'/>
                        <img className="circle-info-icon QQIcon" src='/svg/icon_qq-circle.svg'/>
                    </div>
                </div>
                <div className='triangle'/>
                <div className="rectangle"/>
                <div className="rectangle1"/>
            </div>
        </Layout>
    );
}
