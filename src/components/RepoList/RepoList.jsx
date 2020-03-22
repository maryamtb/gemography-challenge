import React from "react";
import fetch from "isomorphic-fetch";

import getTimeInterval from "../../utils/getTimeInterval";
import RepoItem from "../RepoItem/RepoItem";

const mapping = {
  marginLeft: '120',
  display: 'inline',
  verticalAlign: 'middle',
  fontSize: '1.6',
  fontWeight: 'normal'
}

class RepoList extends React.Component {
  state = {
    items: [],
    per_page: 20,
    page: 1,
    totalPages: null,
    scrolling: false
  };

  componentWillMount() {
    this.loadRepos();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastLi = document.querySelector("ul.items > li:last-child");
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
  };

  loadRepos = () => {
    const { per_page, page, items } = this.state;
    const today = new Date();
    const minus30 = getTimeInterval(today);
    const url = `https://api.github.com/search/repositories?q=created:>${minus30}&sort=stargazers_count&per_page=${per_page}&page=${page}`;
    console.log("30 days minus today is " + minus30);

    fetch(url)
      .then(response => response.json())
      .then(
        json => {
          this.setState({
            items: [...items, ...json.items],
            scrolling: false,
            totalPages: json.total_pages
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadRepos
    );
  };

  render() {
    return (
      <div>
        <ul className="items" style={mapping}>
          {this.state.items.map(item => (
            <li key={item.id}>
              <RepoItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RepoList;