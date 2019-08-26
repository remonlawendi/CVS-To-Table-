import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';

class Table extends Component {
  state = {
    data: [],
    clonedData: [],
    header: []
  };
  search = e => {
    if (e.target.value.trim().length === 0) {
      this.setState({ data: this.state.clonedData });
      return;
    }
    const filteredData = this.state.clonedData.filter(row =>
      row[0].toLowerCase().includes(e.target.value)
    );

    this.setState({ data: filteredData });
  };

  sort = index => {
    index = index.toString();

    if (!!this.currentColumn && index === this.currentColumn) {
      this.clickCounter === 'once'
        ? (this.clickCounter = 'twice')
        : (this.clickCounter = 'once');
    } else {
      this.clickCounter = 'once';
    }

    this.currentColumn = index;

    let sortedArray;
    sortedArray = this.state.clonedData.sort((a, b) => {
      if (a[index] && b[index]) {
        if (typeof a[index] === 'string' && typeof b[index] === 'string') {
          if (parseInt(a[index] && b[index])) {
            // so this is a valid number
            if (parseInt(a[index]) < parseInt(b[index])) {
              return this.clickCounter === 'once' ? -1 : 1;
            } else {
              return this.clickCounter === 'once' ? 1 : -1;
            }
          } else {
            // so this is a string

            if (a[index].toLowerCase() < b[index].toLowerCase()) {
              return this.clickCounter === 'once' ? -1 : 1;
            } else {
              return this.clickCounter === 'once' ? 1 : -1;
            }
          }
        }
      }
    });

    this.setState({ data: sortedArray });
  };

  handleForce = data => {
    let header = data[0];
    let acutalData;
    if (this.columnsCount !== undefined && this.rowsCount !== undefined) {
      header = header.slice(0, this.columnsCount);
      acutalData = [...data] // clone
        .map(row => row.slice(0, this.columnsCount))
        .slice(1, this.rowsCount);
    } else {
      acutalData = data.slice(1, data.length);
    }
    this.setState({ header });
    this.setState({ data: acutalData });
    this.setState({ clonedData: acutalData });

    this.clonedData = acutalData;
    this.data = acutalData;
  };

  render() {
    const { data, header } = this.state;
    console.log(this.props);
    return (
      <div>
        <div className='__search_input__container'>
          <input
            type='text'
            id='__search_input'
            onInput={this.search}
            placeholder='search by company name...'
          />
        </div>
        <CSVReader
          className='text-center'
          cssClass='csv-reader-input'
          onFileLoaded={this.handleForce}
          onError={this.handleDarkSideForce}
          inputId='ObiWan'
        />
        <table className='table'>
          <thead>
            <tr>
              {Array.isArray(header) && header.length > 0
                ? header.map(th => (
                    <th onClick={() => this.sort(header.indexOf(th))}>{th}</th>
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            {data.slice(1, data.length).map(dat => (
              <tr>
                {dat.map(td => (
                  <td>{td}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {Array.isArray(header) && header.length > 0
                ? header.map(th => (
                    <th onClick={() => this.sort(header.indexOf(th))}>{th}</th>
                  ))
                : null}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Table;
