import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>Newsapp- Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mysec" imageurl="https://www.nhttps://ichef.bbci.co.uk/liveexhttps://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A212/production/_120409414_whatsubject.jpgperience/cps/624/cpsprodpb/A212/production/_120409414_whatsubject.jpgewsbtc.com/wpcontent/uploads/2021/01/ethereumbuysellsetupDepositphotos_10448693_xl2015860x717.jpg"/>
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mysec" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mysec"/>
                    </div>

                </div>
            </div>
        )
    }
}
