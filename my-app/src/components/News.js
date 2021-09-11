import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles= [
     {
     "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Hannah Miao",
    "title": "Stocks making the biggest moves premarket: Coinbase, Tesla, Citrix PayPal and more",
    "description": "These are the stocks posting the largest moves in premarket trading.",
    "url": "https://www.cnbc.com/2021/09/08/stocks making the biggest moves premarket coinbase tesla citrix paypal and more.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106868521 1618440974351 gettyimages 1312540547 _dsc9089.jpeg?v=1629798449",
    "publishedAt": "2021 09 08T11:44:19Z",
    "content": "Check out the companies making headlines before the bell.\r\nCoinbase Shares of Coinbase fell 3.2% in early morning trading after the cryptocurrency exchange revealed it received a notice of possible e… [+1815 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Phys.Org"
    },
    "author": "David Chandler",
    "title": "New superconducting magnet breaks magnetic field strength records, paving the way for fusion energy",
    "description": "It was a moment three years in the making, based on intensive research and design work: On Sept. 5, for the first time, a large high temperature superconducting electromagnet was ramped up to a field strength of 20 tesla, the most powerful magnetic field of i…",
    "url": "https://phys.org/news/2021 09 superconducting magnet magnetic field strength.html",
    "urlToImage": "https://scx2.b cdn.net/gfx/news/hires/2021/mit designed project a.jpg",
    "publishedAt": "2021 09 08T11:41:54Z",
    "content": "It was a moment three years in the making, based on intensive research and design work: On Sept. 5, for the first time, a large high temperature superconducting electromagnet was ramped up to a field… [+10644 chars]"
    },
     {
     "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Ella Nilsen, CNN",
    "title": "Biden wants an aggressive transition to electric vehicles. A surprising ally is pumping the brakes",
    "description": "The transition to electric will be a seismic shift for an auto industry dominated by the manufacturing of gas powered vehicles.",
    "url": "https://www.cnn.com/2021/09/08/business/biden uaw electric vehicles climate/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210907123050 uaw ford plant us 0927 file super tease.jpg",
    "publishedAt": "2021 09 08T11:41:48Z",
    "content": "(CNN Business)President Joe Biden wants to corner the market on electric vehicles. In August, he announced a target that by 2030, half of the vehicles sold in the United States will be battery electr… [+7008 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Srishti Mitra",
    "title": "IKEA meets Tesla in these tech enhanced furniture designed to make your home a smart one!",
    "description": "IKEA meets Tesla in these tech enhanced furniture designed to make your home a smart one!I truly believe the right furniture designs make or break a home! After all, furniture is an integral part of any home, it sets the tone...",
    "url": "https://www.yankodesign.com/2021/09/08/ikea meets tesla in these tech enhanced furniture designed to make your home a smart one/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2021/09/ikea meets tesla in these tech enhanced furniture designed to make your home a smart one/IKEA_meets_tesla_tech_enhanced_smart_furniture_designs.jpg",
    "publishedAt": "2021 09 08T11:40:05Z",
    "content": "I truly believe the right furniture designs make or break a home! After all, furniture is an integral part of any home, it sets the tone for it and contributes to the essence of the home. You can exp… [+8235 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Neowin"
    },
    "author": "Usama Jawad",
    "title": "Here is the full list of over 400 cars currently confirmed for Forza Horizon 5",
    "description": "With the release of Forza Horizon 5 just around the corner, Turn 10 Studios has gone ahead and published a list of the 426 cars currently confirmed for the game. The list will expand over time. Read more...",
    "url": "https://www.neowin.net/news/here is the full list of over 400 cars currently confirmed for forza horizon 5/",
    "urlToImage": "https://cdn.neow.in/news/images/uploaded/2021/08/1629813789_forzahorizon5_gamescom 04 16x9_wm_story.jpg",
    "publishedAt": "2021 09 08T11:38:01Z",
    "content": "A couple of weeks ago, Microsoft showcased gameplay footage for its upcoming AAA title, Forza Horizon 5. Although the video content we saw emphasized the music, gameplay elements, and environments, a… [+32843 chars]"
    },
     {
     "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Futures dip on fears over slowing economic growth   Reuters",
    "description": "U.S. stock index futures dipped on Wednesday, suggesting that the S&P 500 and Dow Jones indexes would extend losses for a third straight day, as the spread of the Delta coronavirus variant stoked worries of slowing economic growth.",
    "url": "https://www.reuters.com/business/futures dip fears over slowing economic growth 2021 09 08/",
    "urlToImage": "https://www.reuters.com/resizer/yUoUB0FJ_6P2MoyWmYSzJ0kqATI=/1200x628/smart/filters:quality(80)/cloudfront us east 2.images.arcpublishing.com/reuters/EWFOP2NXVFL4HDSJIH5655JWNQ.jpg",
    "publishedAt": "2021 09 08T11:36:00Z",
    "content": "A trader works on the trading floor at the New York Stock Exchange (NYSE) in Manhattan, New York City, U.S., August 10, 2021. REUTERS/Andrew KellySept 8 (Reuters)   U.S. stock index futures dipped on… [+1717 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "CNA"
    },
    "author": null,
    "title": "Applied Materials aims to improve chip production for electric vehicles",
    "description": "Applied Materials on Wednesday released two new tools aimed at improving the efficiency of making a new class of chips for electric vehicles.Applied is the world's largest maker of tools for making semiconductors. The machines announced on Wednesday are desig…",
    "url": "https://www.channelnewsasia.com/business/applied materials aims improve chip production electric vehicles 2164076",
    "urlToImage": "https://onecms res.cloudinary.com/image/upload/s  GRPPmUuH  /fl_relative%2Cg_south_east%2Cl_one cms:core:watermark:reuters%2Cw_0.1/f_auto%2Cq_auto/c_fill%2Cg_auto%2Ch_676%2Cw_1200/v1/one cms/core/2021 09 08t113230z_1_lynxmpeh870kj_rtroptp_3_applied autos.jpg?itok=Se9rN6eL",
    "publishedAt": "2021 09 08T11:34:32Z",
    "content": "Applied Materials on Wednesday released two new tools aimed at improving the efficiency of making a new class of chips for electric vehicles.\r\nApplied is the world's largest maker of tools for making… [+1905 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Stephen Nellis",
    "title": "Applied Materials aims to improve chip production for electric vehicles",
    "description": "Applied Materials on Wednesday released two new tools aimed at improving the efficiency of making a new class of chips for electric vehicles.  The machines...",
    "url": "https://finance.yahoo.com/news/applied materials aims improve chip 113230259.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/H9MChm3dCn1gdBeore5I0g  ~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24 /https://media.zenfs.com/en/reuters finance.com/b7c1acaf6cc20502dc5245054f11fad6",
    "publishedAt": "2021 09 08T11:32:30Z",
    "content": "By Stephen Nellis\r\n(Reuters)   Applied Materials on Wednesday released two new tools aimed at improving the efficiency of making a new class of chips for electric vehicles.\r\nApplied is the world's la… [+1933 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Peruse through every electric vehicle on sale for 2021 and its range   Roadshow",
    "description": "It's not just Tesla with EVs on sale. Here's every electric car you can buy and its range so you're in the know.",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=151668343",
    "urlToImage": null,
    "publishedAt": "2021 09 08T11:32:27Z",
    "content": "When someone says \"I want a programming language in which I need only\r\nsay what I wish done,\" give him a lollipop."
    },
     {
     "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Applied Materials aims to improve chip production for electric vehicles   Reuters",
    "description": "Applied Materials <a href=\"https://www.reuters.com/companies/AMAT.O\" target=\"_blank\">(AMAT.O)</a> on Wednesday released two new tools aimed at improving the efficiency of making a new class of chips for electric vehicles.",
    "url": "https://www.reuters.com/business/autos transportation/applied materials aims improve chip production electric vehicles 2021 09 08/",
    "urlToImage": "https://www.reuters.com/resizer/7wtF DInpQsQ8qbTYrRx6m2Hwzg=/1200x628/smart/filters:quality(80)/cloudfront us east 2.images.arcpublishing.com/reuters/F53TRLE6UJNZLDE4YQPVDVJXJI.jpg",
    "publishedAt": "2021 09 08T11:32:00Z",
    "content": "Sept 8 (Reuters)   Applied Materials (AMAT.O) on Wednesday released two new tools aimed at improving the efficiency of making a new class of chips for electric vehicles.\r\nApplied is the world's large… [+2007 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Watch: Man Arrested After Tesla Camera Catches Him Faking Accident",
    "description": "Police arrested a man in the southeastern US state of Louisiana after he falsified a police report that a Tesla car hit him in a parking lot.",
    "url": "https://www.ndtv.com/offbeat/tesla hit me claims man on board camera captures him faking injuries arrested 2534027",
    "urlToImage": "https://c.ndtvimg.com/2021 09/nuqeb828_man fakes tesla accident_625x300_08_September_21.jpg",
    "publishedAt": "2021 09 08T11:31:43Z",
    "content": "Arthur Bates Jr was caught faking an accident on camera.\r\nPolice arrested a man in the southeastern US state of Louisiana after he falsified a police report that a Tesla car hit him in a parking lot.… [+2130 chars]"
    },
     {
     "source": {
    "id": "the times of india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "Tesla sold 44,264 China made vehicles in August, local deliveries up",
    "description": "Local sales of China made vehicles jumped to 12,885 cars last month from 8,621 cars in July. Tesla's sales in the first month of each quarter are usually lower than the following two months.",
    "url": "https://economictimes.indiatimes.com/industry/renewables/tesla sold 44264 china made vehicles in august local deliveries up/articleshow/86036445.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid 86036423,width 1070,height 580,imgsize 702672,overlay economictimes/photo.jpg",
    "publishedAt": "2021 09 08T11:27:47Z",
    "content": "U.S. electric vehicle maker Tesla Inc in August sold 44,264 China made vehicles, including 31,379 for export, the China Passenger Car Association (CPCA) said on Wednesday.\r\nLocal sales of China made … [+801 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Android Authority"
    },
    "author": "Tristan Rayner",
    "title": "Daily Authority: Big Apple event ",
    "description": "Apple's iPhone event set for September 14 but questions remain, new Lenovo tech, Bitcoin in El Salvador, and more tech today!",
    "url": "https://www.androidauthority.com/newsletters/da september 8 2021/",
    "urlToImage": "https://cdn57.androidauthority.net/wp content/uploads/2021/09/apple iphone 13 event.jpg",
    "publishedAt": "2021 09 08T11:13:24Z",
    "content": "Apple has announced its next major event for September 14th at 10AM PT, titling the event California Streaming and giving away a few hints in the image emailed to press: <ul><li>Apples Marketing SVP … [+6216 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Eminetra.co.za"
    },
    "author": "jonallen",
    "title": "Could BOSTON DYNAMICS Robots Beat in Fight?",
    "description": "In a large warehouse like room, two humanoid robots embark on an obstacle course. Their barrel shaped torsos, stuffed with processors and batteries, make it look like they go to the gym a lot but negl",
    "url": "https://eminetra.co.za/could boston dynamics robots beat me in a fight/393824/",
    "urlToImage": "https://static01.nyt.com/images/2021/09/12/magazine/12mag screenland/12mag screenland facebookJumbo v2.jpg",
    "publishedAt": "2021 09 08T11:04:46Z",
    "content": "There is a accompanying video that goes with the original – one that makes it look like it was designed to allay any fears its counterpart may have aroused. This is a behind the scenes video, in whic… [+2348 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Phys.Org"
    },
    "author": "Science X staff",
    "title": "Mining waste could be used as an ingredient for cheaper hydrogen fuel production",
    "description": "Researchers have discovered a way to use mining waste as part of a potential cheaper catalyst for hydrogen fuel production.",
    "url": "https://phys.org/news/2021 09 ingredient cheaper hydrogen fuel production.html",
    "urlToImage": "https://scx2.b cdn.net/gfx/news/hires/2021/mining waste could be.jpg",
    "publishedAt": "2021 09 08T11:00:35Z",
    "content": "Researchers have discovered a way to use mining waste as part of a potential cheaper catalyst for hydrogen fuel production.\r\nWater splitting reactions that produce hydrogen are triggered using rare p… [+3942 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Roadshow staff",
    "title": "Peruse through every electric vehicle on sale for 2021 and its range   Roadshow",
    "description": "It's not just Tesla with EVs on sale. Here's every electric car you can buy and its range so you're in the know.",
    "url": "https://www.cnet.com/roadshow/news/electric car ev range/",
    "urlToImage": "https://www.cnet.com/a/img/kY939i1EQ sPK5EaR 1ZHwREOJ4=/1200x630/2020/09/24/d347b721 9cd6 4129 8618 a245c3b7e746/2020 nissan leaf sl plus ogi 1.jpg",
    "publishedAt": "2021 09 08T11:00:04Z",
    "content": "The list of electric cars on sale continues to grow every couple months, and as it grows, it's best to stay informed about how far each of these battery powered machines can go. Even though you don't… [+15601 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "The Dallas Morning News"
    },
    "author": "Mitchell Schnurman",
    "title": "AI may be the next big thing in tech, and Dallas Fort Worth is lagging far behind   The Dallas Morning News",
    "description": "If artificial intelligence is going to help drive the innovation economy, as many believe, Dallas Fort Worth has some ground to make up. A report by...",
    "url": "https://www.dallasnews.com/business/technology/2021/09/08/ai may be the next big thing in tech and dallas fort worth is lagging far behind/",
    "urlToImage": "https://dmn dallas news prod.cdn.arcpublishing.com/resizer/LZc3YcctSKhdZWdco3ksvMWqUSM=/1200x630/smart/filters:no_upscale()/cloudfront us east 1.images.arcpublishing.com/dmn/GBFLFB3WEC5PO3M4I2T2CN22JM.jpg",
    "publishedAt": "2021 09 08T11:00:03Z",
    "content": "If artificial intelligence is going to help drive the innovation economy, as many believe, Dallas Fort Worth has some ground to make up.\r\nA report by researchers at the Brookings Institution, release… [+5417 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Bill Roberson, Contributor, \n Bill Roberson, Contributor\n https://www.forbes.com/sites/billroberson/",
    "title": "The 500+hp RINDEV Unity Side By Side Tames Terrain And Isn’t Street Legal   But What If It Was?",
    "description": "Startup RINDEV is taking the side by side machine into the electric future, but should that future include driving it on public roads? With heat, A/C and other creature comforts, it represents a possible new direction for electric off road machines   if they'…",
    "url": "https://www.forbes.com/sites/billroberson/2021/09/08/the 500hp rindev unity side by side tames terrain and isnt street legalbut what if it was/",
    "urlToImage": "https://thumbor.forbes.com/thumbor/fit in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials images.forbesimg.com%2Fimageserve%2F613833df8dea2507d108efde%2F0x0.jpg",
    "publishedAt": "2021 09 08T11:00:00Z",
    "content": "On the road where it (might) belong.\r\nRender by RINDEV\r\nThe electrification of transportation continues to touch new segments, and one category thats prime for EV conversion is the off road segment. … [+3387 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "PRNewswire"
    },
    "author": null,
    "title": "Commonwealth Fusion Systems creates viable path to commercial fusion power with world's strongest magnet",
    "description": "CAMBRIDGE, Mass., Sept. 8, 2021 /PRNewswire/    Commonwealth Fusion Systems (CFS) and MIT's Plasma Science and Fusion Center (PSFC) today announced the successful test of the world's strongest high temperature superconducting (HTS) magnet, the key technology …",
    "url": "https://www.prnewswire.com/news releases/commonwealth fusion systems creates viable path to commercial fusion power with worlds strongest magnet 301370967.html",
    "urlToImage": "https://mma.prnewswire.com/media/1172159/CFS_Logo.jpg?p=facebook",
    "publishedAt": "2021 09 08T11:00:00Z",
    "content": "CAMBRIDGE, Mass., Sept. 8, 2021 /PRNewswire/    Commonwealth Fusion Systems (CFS) and MIT's Plasma Science and Fusion Center (PSFC) today announced the successful test of the world's strongest high t… [+3430 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Mit.edu"
    },
    "author": "David Chandler | MIT News Office",
    "title": "MIT designed project achieves major advance toward fusion energy",
    "description": "For the first time, a large high temperature superconducting electromagnet was ramped to a field strength of 20 tesla, the most powerful magnetic field of its kind ever created. The demonstration helps resolve the greatest uncertainty in the quest to build th…",
    "url": "https://news.mit.edu/2021/MIT CFS major advance toward fusion energy 0908",
    "urlToImage": "https://news.mit.edu/sites/default/files/images/202109/MIT_Fusion Magnets 01 PRESS.jpg",
    "publishedAt": "2021 09 08T11:00:00Z",
    "content": "It was a moment three years in the making, based on intensive research and design work: On Sept. 5, for the first time, a large high temperature superconducting electromagnet was ramped up to a field… [+10107 chars]"
    }
    ]
    
      
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/everything?q=tesla&from=2021 08 08&sortBy=publishedAt&apiKey=a2f198470e4242b8ac53a1ecafbba5b5";
          let data=await fetch(url);
          let parsedData=await data.json();
          this.setState({articles: parsedData.articles})
      }
   handleprev=()=>{

   }
    
    render() {
        return (
            <div className="container my 3" >
                <h2>Newsapp  Top Headlines</h2>
                 <div className="row" >
                {this.state.articles.map((element)=>{
                    
               return <div className="col md 4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                </div>
                
                <div className="container my-3 d-flex justify-content-between">
                    <button type="button" class="btn btn-dark" onClick={this.handleprev}>Previous</button>
                    <button type="button" class="btn btn-dark" onClick={this.handlenext}>Next</button>
                    </div>
                      

            </div>
        )
    }
}
