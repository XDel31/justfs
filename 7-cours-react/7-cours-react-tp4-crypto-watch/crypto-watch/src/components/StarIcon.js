import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("coinList")) {
      let favList = window.localStorage.getItem("coinList").split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      } else {
        setLike(false);
      }
    }
  }, [coinId]);

  const idChecker = () => {
    let favList = null;

    console.log(localStorage.getItem("coinList"));
    console.log(coinId);

    if (localStorage.getItem("coinList")) {
      favList = localStorage.getItem("coinList").split(",");
    }

    if (favList) {
      if (favList.includes(coinId)) {
        localStorage.setItem(
          "coinList",
          favList.filter((coin) => coin !== coinId)
        );
        setLike(false);
      } else {
        localStorage.setItem("coinList", [...favList, coinId]);
        setLike(true);
      }
    } else {
      localStorage.setItem("coinList", coinId);
      setLike(true);
    }
  };

  return (
    <img
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
      onClick={() => idChecker(coinId)}
    />
  );
};

export default StarIcon;
