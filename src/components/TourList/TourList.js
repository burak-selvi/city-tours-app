import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './tourlist.scss';
import { tourData } from './../../tourData';

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const { tours } = this.state;
    const afterRemoved = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: afterRemoved
    });
  };

  render() {
    const tour = (
      this.state.tours.map(tour => {
        return <Tour key={tour.id} {...tour} removeTour={this.removeTour} />
      })
    );
    return (
      <div className="tourlist">
        {tour}
      </div>
    );
  }
}
