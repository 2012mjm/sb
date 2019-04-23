import React, { Component } from "react";
import Slider from "../widgets/Slider/Slider";
import BookSlider from "../widgets/BookSlider/BookSlider";
import Banner from "../widgets/Banner/Banner";

import "./Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import journal1 from "./images/01.jpeg";
import journal2 from "./images/02.jpeg";
import journal3 from "./images/03.jpeg";
import journal4 from "./images/04.jpg";
import journal5 from "./images/05.jpeg";

import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";

class MainScreen extends Component {
  render() {
    const { history } = this.props;
    let books = [
      {
        id: 1,
        image: journal1,
        title: "MIDNIGHT FRONT 1",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/1/MIDNIGHT-FRONT-1`
      },
      {
        id: 2,
        image: journal2,
        title: "MIDNIGHT FRONT 2",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/2/MIDNIGHT-FRONT-1`
      },
      {
        id: 3,
        image: journal3,
        title: "MIDNIGHT FRONT 3",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/3/MIDNIGHT-FRONT-1`
      },
      {
        id: 4,
        image: journal4,
        title: "MIDNIGHT FRONT 4",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/4/MIDNIGHT-FRONT-1`
      },
      {
        id: 1,
        image: journal5,
        title: "MIDNIGHT FRONT 5",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/1/MIDNIGHT-FRONT-1`
      },
      {
        id: 1,
        image: journal5,
        title: "MIDNIGHT FRONT 6",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/1/MIDNIGHT-FRONT-1`
      },
      {
        id: 1,
        image: journal1,
        title: "MIDNIGHT FRONT 7",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/1/MIDNIGHT-FRONT-1`
      },
      {
        id: 1,
        image: journal2,
        title: "MIDNIGHT FRONT 8",
        author: "DAVID MACK",
        category: "Story",
        link: `/book/1/MIDNIGHT-FRONT-1`
      }
    ];

    const sliders = [
      {
        image: slide1,
        link: `/book/1/MIDNIGHT-FRONT-1`
      },
      {
        image: slide2,
        link: `/book/۲/MIDNIGHT-FRONT-2`
      }
    ];

    return (
      <div>
        <Slider list={sliders} />

        <BookSlider
          title="نشریات ویژه"
          list={books}
          moreOnClick={() => history.push("/search?sort=special")}
        />

        <Banner />

        <BookSlider
          title="جدیدترین نشریات"
          list={[...books].reverse()}
          moreOnClick={() => history.push("/search?sort=newest")}
        />
      </div>
    );
  }
}

export default MainScreen;
