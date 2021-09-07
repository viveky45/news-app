import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

        articles= [
          {
            "source": { "id": "engadget", "name": "Engadget" },
            "author": "Jon Fingas",
            "title": "Cricket customers will get free HBO Max, if they don't mind ads",
            "description": "You won't have to spring for AT&T's regular phone service if you want HBO Max tacked on to your plan — provided you're wiling to make some sacrifices. The carrier's Cricket Wireless brand has revealed that it will provide free HBO Max service to customers usi…",
            "url": "https://www.engadget.com/cricket-wireless-free-hbo-max-130029149.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-03/9cb806d0-83fe-11eb-9f8f-49bab7cbf77e",
            "publishedAt": "2021-08-19T13:00:29Z",
            "content": "You won't have to spring for AT&amp;T's regular phone service if you want HBO Max tacked on to your plan provided you're wiling to make some sacrifices. The carrier's Cricket Wireless brand has revea… [+1020 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "Former UAE keeper Shabbir banned for four years - Reuters",
            "description": "Former United Arab Emirates (UAE) wicketkeeper Gulam Shabbir has been banned from all forms of cricket for four years after admitting breaching six counts of the International Cricket Council's (ICC) anti-corruption code, world cricket's governing body said o…",
            "url": "https://www.reuters.com/lifestyle/sports/former-uae-keeper-shabbir-banned-four-years-2021-09-06/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50",
            "publishedAt": "2021-09-06T12:20:00Z",
            "content": "Sept 6 (Reuters) - Former United Arab Emirates (UAE) wicketkeeper Gulam Shabbir has been banned from all forms of cricket for four years after admitting breaching six counts of the International Cric… [+1190 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Iain Axon",
            "title": "Taliban to allow men's cricket; status of smaller women's programmes unclear - Reuters",
            "description": "The Taliban have said they will not interfere with the Afghan men's national cricket team, the country's biggest sporting success of recent years, or stop the expansion of the flagship Twenty20 league, an Afghan cricket official said.",
            "url": "https://www.reuters.com/lifestyle/sports/taliban-allow-mens-cricket-status-smaller-womens-programmes-unclear-2021-08-19/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50",
            "publishedAt": "2021-08-19T17:20:00Z",
            "content": "Aug 19 (Reuters) - The Taliban have said they will not interfere with the Afghan men's national cricket team, the country's biggest sporting success of recent years, or stop the expansion of the flag… [+2903 chars]"
          },
          {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": null,
            "title": "England recall Moeen for second Test against India",
            "description": "Worcestershire all-rounder Moeen Ali is added to the England squad for the second Test against India at Lord's.",
            "url": "https://www.bbc.co.uk/sport/cricket/58142837",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/175B3/production/_119876659_tv069307074.jpg",
            "publishedAt": "2021-08-10T09:53:07Z",
            "content": "Moeen Ali has played Twenty20 cricket for England this summer\r\nWorcestershire all-rounder Moeen Ali has been added to the England squad for the second Test against India.\r\nMoeen last played Test cric… [+345 chars]"
          },
          {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": null,
            "title": "Former England and Sussex captain Dexter dies aged 86",
            "description": "Former England captain and attacking batter Ted Dexter dies aged 86.",
            "url": "https://www.bbc.co.uk/sport/cricket/58337771",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
            "publishedAt": "2021-08-26T07:00:33Z",
            "content": "Former England and Sussex captain Ted Dexter has died aged 86.\r\nNicknamed 'Lord Ted', Dexter was an aggressive batsman and useful seam bowler who played 62 Tests for England and was captain between 1… [+1520 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters Staff",
            "title": "Cricket-England 'confident' of Ashes tour amid travel negotiations - Reuters",
            "description": "The England and Wales Cricket Board (ECB) is \"very confident\" the end of year Ashes tour will go ahead as planned even though negotiations are continuing over travel and quarantine restrictions in Australia.",
            "url": "https://www.reuters.com/article/uk-cricket-ashes-england-idUSKBN2FE0HA",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20210813&t=2&i=1571804032&r=LYNXMPEH7C09L&w=800",
            "publishedAt": "2021-08-13T06:30:00Z",
            "content": "By Reuters Staff\r\nLONDON (Reuters) - The England and Wales Cricket Board (ECB) is very confident the end of year Ashes tour will go ahead as planned even though negotiations are continuing over trave… [+1929 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "Former England captain Dexter dies aged 86 - Reuters",
            "description": "Former England captain Ted Dexter has died aged 86 after a recent illness, Marylebone Cricket Club (MCC) said on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/former-england-captain-dexter-dies-aged-86-2021-08-26/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50",
            "publishedAt": "2021-08-26T08:00:00Z",
            "content": "Aug 26 (Reuters) - Former England captain Ted Dexter has died aged 86 after a recent illness, Marylebone Cricket Club (MCC) said on Thursday.\r\nDexter, nicknamed \"Lord Ted\", was an aggressive batsman … [+1572 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters Staff",
            "title": "Olympics-ICC prepares bid for cricket's inclusion in 2028 LA Games - Reuters",
            "description": "The International Cricket Council (ICC) is preparing a bid for the game's inclusion in the 2028 Olympic Games in Los Angeles, the governing body said on Tuesday.",
            "url": "https://www.reuters.com/article/us-olympics-cricket-icc-idUSKBN2FB0I1",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20210810&t=2&i=1571487848&r=LYNXMPEH7907C&w=800",
            "publishedAt": "2021-08-10T06:53:00Z",
            "content": "By Reuters Staff\r\nNEW DELHI (Reuters) - The International Cricket Council (ICC) is preparing a bid for the games inclusion in the 2028 Olympic Games in Los Angeles, the governing body said on Tuesday… [+1621 chars]"
          },
          {
            "source": { "id": null, "name": "The Guardian" },
            "author": "Arnel Hecimovic",
            "title": "Melting ice and the Taliban watching cricket: Friday’s best photos",
            "description": "The Guardian’s picture editors select photo highlights from around the world Continue reading...",
            "url": "https://www.theguardian.com/news/gallery/2021/sep/03/melting-ice-and-the-taliban-watching-cricket-fridays-best-photos",
            "urlToImage": "https://i.guim.co.uk/img/media/25145bbbae231d66f7f43d1cd4472a936e721ed6/993_623_4262_2557/master/4262.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a66c9ce693b78031cc30a37e72a8a54e",
            "publishedAt": "2021-09-03T14:01:26Z",
            "content": "The Guardians picture editors select photo highlights from around the world"
          },
          {
            "source": { "id": null, "name": "The Guardian" },
            "author": "PA Media",
            "title": "South Africa legend Dale Steyn announces retirement from cricket",
            "description": "<ul><li>Fast bowler took 439 wickets in 93 Test matches</li><li>‘It’s been an incredible journey,’ says Steyn of 18-year career</li></ul>The South Africa fast bowler Dale Steyn has announced his retirement. The 38-year-old, considered one of the finest bowler…",
            "url": "https://amp.theguardian.com/sport/2021/aug/31/south-africa-legend-dale-steyn-announces-retirement-from-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/21b462eee9d72263656be19f47d619a03ded3189/0_57_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7a19bfc49026eda1148dd4860f3da44f",
            "publishedAt": "2021-08-31T11:15:51Z",
            "content": "The South Africa fast bowler Dale Steyn has announced his retirement. The 38-year-old, considered one of the finest bowlers of his generation, made the announcement on social media, calling time on h… [+1082 chars]"
          },
          {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": null,
            "title": "'I play carrom with my feet'",
            "description": "Twenty-three-year-old Harshad Gothankar was born without arms, but he is now a state carrom champion.",
            "url": "https://www.bbc.co.uk/news/av/world-asia-india-58265853",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EA26/production/_120024995_p09sjdrw.jpg",
            "publishedAt": "2021-08-20T23:41:43Z",
            "content": "Harshad Gothankar shot to social media fame recently when cricket superstar Sachin Tendulkar tweeted a video of the young man playing carrom with his feet, calling it inspirational. \r\nCarrom is a hug… [+418 chars]"
          },
          {
            "source": { "id": null, "name": "The Guardian" },
            "author": "PA Media",
            "title": "Former England cricket captain Ted Dexter dies aged 86",
            "description": "<ul><li>Dexter captained England 30 times in the 1960s</li><li>Sussex captain was president of MCC after playing retirement</li></ul>The former England cricket captain Ted Dexter has died aged 86. The MCC announced the death of its former president, who capta…",
            "url": "https://amp.theguardian.com/sport/2021/aug/26/former-england-cricket-captain-ted-dexter-dies-aged-86",
            "urlToImage": "https://i.guim.co.uk/img/media/20a66e5201cce1c4f0b38cb3f2cd7c4a825243fa/153_178_2148_1288/master/2148.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9c1a2c17e930d9efb994335d7d60173e",
            "publishedAt": "2021-08-26T07:29:10Z",
            "content": "The former England cricket captain Ted Dexter has died aged 86. The MCC announced the death of its former president, who captained his country 30 times, on Thursday morning.\r\nAfter a recent illness h… [+777 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "Cairns on life support after collapsing in Australia - report - Reuters",
            "description": "Former New Zealand cricket all-rounder Chris Cairns is on life support at a Canberra hospital after recently collapsing with a health problem in Australia, New Zealand media reported on Tuesday.",
            "url": "https://www.reuters.com/lifestyle/sports/cairns-life-support-after-collapsing-australia-report-2021-08-10/",
            "urlToImage": "https://www.reuters.com/resizer/3UhIZPxg6DH9mszlveoK4VeUFD4=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UGM45GGAZVJW7PNSAWN4XOL3LQ.jpg",
            "publishedAt": "2021-08-10T08:50:00Z",
            "content": "Former New Zealand cricketer Chris Cairns gives a news conference on day four of the first international test cricket match against New Zealand, at Eden Park in Auckland, February 9, 2014. REUTERS/Ni… [+1356 chars]"
          },
          {
            "source": { "id": null, "name": "The Guardian" },
            "author": "Agencies",
            "title": "ICC prepares bid for cricket’s inclusion in 2028 Los Angeles Olympics",
            "description": "<ul><li>Olympics ‘part of cricket’s long-term future,’ says ICC</li><li>Working group to be chaired by ECB chief Ian Watmore</li></ul>The International Cricket Council is preparing a bid for the game’s inclusion in the 2028 Olympic Games in Los Angeles, the g…",
            "url": "https://amp.theguardian.com/sport/2021/aug/10/icc-prepares-bid-for-crickets-inclusion-in-2028-los-angeles-olympics",
            "urlToImage": "https://i.guim.co.uk/img/media/34bb807b6eedfd491cdacc360500adc8999d90f1/0_195_3822_2293/master/3822.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7a927669b8717c7b1f9c8f1621a9098e",
            "publishedAt": "2021-08-10T08:30:14Z",
            "content": "The International Cricket Council is preparing a bid for the games inclusion in the 2028 Olympic Games in Los Angeles, the governing body said on Tuesday.\r\nCricket last featured in the 1900 Olympics … [+2265 chars]"
          },
          {
            "source": { "id": null, "name": "New York Times" },
            "author": "Victor Mather",
            "title": "Afghan Paralympic Athlete Pleads for Help to Leave the Country",
            "description": "“My intention is to participate in the Tokyo 2020 Paralympic Games. Please hold my hand and help me,” Zakia Khudadadi, a taekwondo athlete pleaded in a video from Kabul.",
            "url": "https://www.nytimes.com/2021/08/18/sports/olympics/afghan-paralympic-athlete-video-khudadadi.html",
            "urlToImage": "https://static01.nyt.com/images/2021/08/18/world/18paralympics-afghan/18afghanistan-briefing-paralympic-facebookJumbo.jpg",
            "publishedAt": "2021-08-18T14:58:11Z",
            "content": "The future of sports in the country is unclear under the Taliban, which banned womens sports when it led the country from 1996 to 2001. Many of Afghanistans most promising athletes still dont live in… [+563 chars]"
          },
          {
            "source": { "id": null, "name": "The Guardian" },
            "author": "Guardian sport with Reuters",
            "title": "New Zealand cricket great Chris Cairns in intensive care in Sydney",
            "description": "Former star cricketer transferred to St Vincent’s hospital after surgery in CanberraThe former New Zealand cricket great Chris Cairns is in intensive care at a Sydney hospital after suffering a life-threatening health problem.Cairns, 51, had undergone surgery…",
            "url": "https://amp.theguardian.com/sport/2021/aug/11/new-zealand-cricket-great-chris-cairns-in-intensive-care-in-sydney",
            "urlToImage": "https://i.guim.co.uk/img/media/f03fb6bd6b484697b8236555c4b0deb22207974c/0_178_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5e29e50d420dc8bb5a7adfd8d374db58",
            "publishedAt": "2021-08-11T02:33:02Z",
            "content": "The former New Zealand cricket great Chris Cairns is in intensive care at a Sydney hospital after suffering a life-threatening health problem.\r\nCairns, 51, had undergone surgery in Canberra for a rep… [+2349 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "Perera returns to Sri Lanka squad for South Africa series - Reuters",
            "description": "Batsman Kusal Perera has been named in the Sri Lanka squad for next month's limited-overs home series against South Africa after recovering from COVID-19, the country's cricket board said on Monday.",
            "url": "https://www.reuters.com/lifestyle/sports/perera-returns-sri-lanka-squad-south-africa-series-2021-08-30/",
            "urlToImage": "https://www.reuters.com/resizer/QHhVzuKhvuqhw-hzzoSOq1Ghbrg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XR3NMBTURFOUXMHVRRH3C732QY.jpg",
            "publishedAt": "2021-08-30T13:55:00Z",
            "content": "Cricket - ICC Cricket World Cup - Sri Lanka v West Indies - Emirates Riverside, Chester-Le-Street, Britain - July 1, 2019 Sri Lanka's Kusal Perera in action Action Images via Reuters/Lee SmithAug 30 … [+1395 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters Staff",
            "title": "UK sends cricket star Botham to bat for British exports - Reuters",
            "description": "Britain appointed former England cricket star Ian Botham as a trade ambassador to seek new deals for exporters in the country he most famously tangled with on the pitch - Australia.",
            "url": "https://www.reuters.com/article/britain-trade-botham-idUSL8N2PU13O",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-08-23T07:27:00Z",
            "content": "By Reuters Staff\r\nLONDON, Aug 23 (Reuters) - Britain appointed former England cricket star Ian Botham as a trade ambassador to seek new deals for exporters in the country he most famously tangled wit… [+731 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "ICC prefers T20 for Olympics but open to other formats - Marathe - Reuters",
            "description": "Cricket's short Twenty20 format is tailor-made for Olympics but the sport's administrators will consider any format which would ensure the game's inclusion in the 2028 Los Angeles Games, USA Cricket chief Paraag Marathe has said.",
            "url": "https://www.reuters.com/lifestyle/sports/icc-prefers-t20-olympics-open-other-formats-marathe-2021-08-23/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50",
            "publishedAt": "2021-08-23T08:01:00Z",
            "content": "LONDON, Aug 23 (Reuters) - Cricket's short Twenty20 format is tailor-made for Olympics but the sport's administrators will consider any format which would ensure the game's inclusion in the 2028 Los … [+1827 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "Paceman Steyn calls time on distinguished career - Reuters",
            "description": "Dale Steyn has announced his retirement from all forms of cricket, closing the curtain on a 20-year career in which he became South Africa’s highest wicket-taker in tests and arguably the country’s greatest ever fast bowler.",
            "url": "https://www.reuters.com/lifestyle/sports/paceman-steyn-calls-time-distinguished-career-2021-08-31/",
            "urlToImage": "https://www.reuters.com/resizer/sSHrQGPuxGDydSzwSCI5nZz7RrI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JX5GMEYCE5JPJCTEGOCA2PNELQ.jpg",
            "publishedAt": "2021-08-31T10:58:00Z",
            "content": "Cricket - ICC Cricket World Cup - South Africa v India - The Ageas Bowl, Southampton, Britain - June 5, 2019 South Africa's Dale Steyn before the match Action Images via Reuters/Paul ChildsCAPE TOWN,… [+1393 chars]"
          }
        ]
      
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    render() {
        return (
            <div className="container my-3" >
                <h2>Newsapp- Top Headlines</h2>
                 <div className="row" >
                {this.state.articles.map((element)=>{
                    
               return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                </div>

                    
                      

            </div>
        )
    }
}
