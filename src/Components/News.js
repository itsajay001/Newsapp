import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "JINTAMAS SAKSORNCHAI, ALANNA DURKIN RICHER, ERIC TUCKER",
      title:
        "Julian Assange: Plane carrying WikiLeaks founder in Bangkok ahead of plea deal - The Associated Press",
      description:
        "A plane carrying WikiLeaks founder Julian Assange has landed in Thailand. He is on his way to enter a plea in a U.S. court that is expected to free him and resolve the legal case over the site's publication of classified documents. The chartered plane landed …",
      url: "https://apnews.com/article/assange-justice-department-plea-wikileaks-saipan-australia-00eb380879ff636cc9b916f82f82ed40",
      urlToImage:
        "https://dims.apnews.com/dims4/default/3d9bd17/2147483647/strip/true/crop/4946x2782+0+256/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbb%2Fe0%2F6524d6b247ee0f2e1345001246e8%2F089298d4fb854ec387d25e79f1f2a3df",
      publishedAt: "2024-06-25T10:18:00Z",
      content:
        "BANGKOK (AP) A plane carrying Julian Assange landed Tuesday in Bangkok for refueling, as the WikiLeaks founder was on his way to enter a plea deal with the U.S. government that will free him and reso… [+7597 chars]",
    },

    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "HUIZHONG WU",
      title:
        "A Chinese lunar probe returns to Earth with the world's first samples from the far side of the moon - The Associated Press",
      description:
        "China’s Chang’e 6 probe has returned on Earth with rock and soil samples from the little-explored far side of the moon in a global first. The probe landed in northern China on Tuesday afternoon. Chinese scientists anticipate the returned samples will include …",
      url: "https://apnews.com/article/china-far-side-of-moon-probe-samples-c2dd59505402c07f9382bbca14eed4cf",
      urlToImage:
        "https://dims.apnews.com/dims4/default/babe605/2147483647/strip/true/crop/1280x720+0+40/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc1%2F76%2F44fd4810ac0da6e072734e22e9ed%2F3cd7ef9046bc4b5eb1c225b942139b5c",
      publishedAt: "2024-06-25T09:30:00Z",
      content:
        "BANGKOK (AP) Chinas Change 6 probe returned on Earth with rock and soil samples from the little-explored far side of the moon in a global first.\r\nThe probe landed in the Inner Mongolian region in nor… [+3184 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Katherine Faulders, Peter Charalambous",
      title:
        "Trump expressed concern that returning classified docs after subpoena could result in criminal charges, according to sealed notes - ABC News",
      description:
        "Judge Aileen Cannon is considering tossing out the notes as evidence.",
      url: "https://abcnews.go.com/US/trump-expressed-concern-returning-classified-docs-after-subpoena/story?id=111383032",
      urlToImage:
        "https://i.abcnewsfe.com/a/ec015d61-513b-4731-b51f-dfb318c022ab/trump-2-ap-er-221011_1665524210672_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-06-25T09:11:34Z",
      content:
        "Donald Trump privately expressed concerns that turning over potentially classified documents in his possession after a May 2022 subpoena could result in criminal charges while repeatedly engaging in … [+14966 chars]",
    },

    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Tim Fang, Juliette Goodrich",
      title:
        "Tony Brass withdraws from representing Oakland Mayor Sheng Thao - CBS San Francisco",
      description:
        "Attorney Tony Brass, who signed on to represent Oakland Mayor Sheng Thao following an FBI raid at her home last week, announced on Monday that he is no longer representing the mayor.",
      url: "https://www.cbsnews.com/sanfrancisco/news/oakland-mayor-sheng-thao-fbi-raid-attorney-tony-brass-withdraws/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/24/9ebea2ad-f828-4602-abf9-f6d73b5c9282/thumbnail/1200x630/7d569230ca8ddaac9d58703d80d3d571/tony-brass-2.png?v=d44ea471ad55b1f821a0763c85064960",
      publishedAt: "2024-06-25T06:34:32Z",
      content:
        "OAKLAND -- Attorney Tony Brass, who signed on to represent Oakland Mayor Sheng Thao following an FBI raid at her home last week, announced on Monday that he is no longer representing the mayor.\r\nBras… [+2591 chars]",
    },

    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "S Sudarshanan",
      title:
        "Afghanistan storm into maiden World Cup semi-finals; Australia knocked out - ESPNcricinfo",
      description:
        "Afghanistan were led by four-fors from Naveen and Rashid in a match that had a few rain interventions",
      url: "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/afghanistan-vs-bangladesh-52nd-match-super-eights-group-1-1415752/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/383700/383737.6.jpg",
      publishedAt: "2024-06-25T05:38:47Z",
      content: "Semi-finals: India vs England, Afghanistan vs South Africa",
    },

    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Quentyn Kennemer",
      title:
        "Amazon Prime Day 2024 will take place on July 16th and 17th - The Verge",
      description:
        "Amazon Prime Day 2024 will take place on July 16th and 17th, bringing steep discounts on popular products across dozens of categories, from home goods to tech.",
      url: "https://www.theverge.com/2024/6/25/24145258/amazon-prime-day-dates-july-2024-sale",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/33yR7O9Rj6MB1-iqif3RqkLldc8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/16447558/acastro_190621_1777_prime_day_0003.0.jpg",
      publishedAt: "2024-06-25T05:00:00Z",
      content:
        "Amazon Prime Day 2024 will take place on July 16th and 17th\r\nAmazon Prime Day 2024 will take place on July 16th and 17th\r\n / The two-day sales event will feature sharp discounts on thousands of produ… [+3455 chars]",
    },

    {
      source: { id: "cnn", name: "CNN" },
      author: "Christian Edwards, Tara John",
      title:
        "Netanyahu scrambles to contain backlash to comments on ceasefire deal as hostage families release new video - CNN",
      description:
        "Israel’s Prime Minister Benjamin Netanyahu on Monday said he was still “committed” to an Israeli ceasefire and hostage release proposal backed by the United States as he faced blowback from families of Israeli hostages for appearing to walk back his support o…",
      url: "https://www.cnn.com/2024/06/24/middleeast/israel-hostage-forum-video-netanyahu-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/20240624-vhghghg.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-25T03:11:00Z",
      content:
        "Israels Prime Minister Benjamin Netanyahu on Monday said he was still committed to an Israeli ceasefire and hostage release proposal backed by the United States as he faced blowback from families of … [+6021 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Eddie Timanus, Erick Smith, Jordan Mendoza",
      title:
        "College World Series highlights: Tennessee tops Texas A&M for first baseball national title - USA TODAY",
      description:
        "Tennessee is college baseball national champions for the first time after beating Texas A&M in Game 3 of the College World Series.",
      url: "https://www.usatoday.com/story/sports/college/baseball/2024/06/24/college-world-series-tennessee-texas-am-live-updates-highlights/74193677007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/25/USAT/74201342007-usatsi-23615538-1.jpg?crop=3581,2014,x858,y138&width=3200&height=1800&format=pjpg&auto=webp",
      publishedAt: "2024-06-25T02:37:16Z",
      content:
        "Rocky Top is now the top of the college baseball mountain.\r\nTennessee defeated Texas A&amp;M 6-5 in the Mens College World Series championship series winner-take-all game to capture the teams first n… [+15789 chars]",
    },

    {
      source: { id: "nbc-news", name: "NBC News" },
      author: "Antonio Planas, Alicia Victoria Lozano",
      title:
        "Police patrols increased after protesters clash outside Los Angeles synagogue - NBC News",
      description:
        "Police are stepping up patrols outside a synagogue that was an epicenter for protests that turned physical in West Los Angeles over the weekend.",
      url: "https://www.nbcnews.com/news/us-news/police-patrols-increased-protesters-clash-los-angeles-synagogue-rcna158671",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240624-los-angeles-synagogue-protesters-clash-1-se-401p-63a2f5.jpg",
      publishedAt: "2024-06-25T00:32:00Z",
      content:
        "Police are stepping up patrols outside a synagogue that was an epicenter for protests that turned physical in West Los Angeles over the weekend. \r\nPro-Palestinian and Pro-Israeli demonstrators clashe… [+5230 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News Headline</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 88)}
                  description={element.description.slice(1, 80)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
