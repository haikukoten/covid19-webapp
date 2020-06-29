import React, { Component } from 'react';
import './world.styles.scss';
import UniversalData from '../components/universal-data/universal-data.component';

class World extends Component {
  constructor() {
    super();
    this.state = {
      datarec: [],
    };
  }

  componentDidMount() {
    const myAsyncFunction = async () => {
      const dataResponse = await fetch('https://api.covid19api.com/summary');
      const datas = await dataResponse.json();
      this.setState({ datarec: datas });
    };
    myAsyncFunction();
  }

  render() {
    return (
      <div>
        <UniversalData
          datarec={this.state.datarec}
          timeUpdated={this.state.datarec.Date}
        />
      </div>
    );
  }
}

export default World;