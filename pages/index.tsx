import React from "react";
import List from "../components/list/List";

const ListPage = ({ shows = [] }) => {
  return <List shows={shows} />;
};
export const getStaticProps = async () => {
  const shows = await fetch(
    "http://api.tvmaze.com/search/shows?q=batman"
  ).then((res) => res.json());
  return {
    props: {
      shows,
    },
  };
};

export default ListPage;
