import React, { PureComponent } from 'react';
import { Table} from 'antd';

export default class List extends PureComponent {

  render() {
    return ( 
    <Table size="small" className="docyaTable" columns={this.props.columns} dataSource={this.props.data} pagination={{ pageSize: 25 }} scroll={{ y: 500 }} rowKey={record => record.id} />    
    );
  }
}