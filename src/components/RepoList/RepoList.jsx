import React from "react";
import getTimeInterval from "../../utils/getTimeInterval";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const today = new Date();
    const minus30 = getTimeInterval(today);
    const url = `https://api.github.com/search/repositories?q=created:>${minus30}&sort=stargazers_count&order=desc`;
    console.log(minus30)
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} 
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default RepoList;
