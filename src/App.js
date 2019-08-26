import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Table from './Component/table';

class App extends Component {
  state = {
    data: [],
    clonedData: [],
    header: []
  };

  currentColumn = '';
  clickCounter = 'once';

  rowsCount = 0;
  columnsCount = 0;

  data = [];
  colnedData = [];

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

  upload = e => {
    e.preventDefault();

    this.rowsCount = e.target[0].value;
    this.columnsCount = e.target[1].value;
    console.log(this.columnsCount, this.rowsCount);

    return false;
  };

  render() {
    return (
      <div className=''>
        <h1 className='text-center'>Csv File converter</h1>
        <label>Chose the Cvs files</label>

        <form onSubmit={this.upload}>
          <input
            type='number'
            name='rowsCount'
            placeholder='enter rows count'
          />
          <input
            type='number'
            name='columnsCount'
            placeholder='enter columns count'
          />

          <input type='submit' value='upload' />
        </form>

        <Table
          collection={this.data.length ? this.data : []}
          tableHeader={this.state.header}
        />
      </div>
    );
  }
}

export default App;
