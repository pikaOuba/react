import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import { Table, Button, Select, Input } from 'antd'
import './TelserverManage.scss'

class TelserverManage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  // rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //   },
  //   getCheckboxProps: record => ({
  //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
  //     name: record.name,
  //   }),
  // };

  columns = [{
    title: '创建时间',
    dataIndex: 'date',
    render: text => <span>{text}</span>,
  }, {
    title: '渠道',
    dataIndex: 'channel',
    key: 'channel'
  }, {
    title: '姓名',
    dataIndex: 'name',
    key:'name'
  }, {
    title: '电话',
    dataIndex: 'mobile',
    key: 'mobile'
  }, {
    title: '芝麻分',
    dataIndex: 'nazhimaPointme',
    key: 'zhimaPoint'
  }, {
    title: '对接话务员',
    dataIndex: 'telCustomName',
    key: 'telCustomName'
  },{ 
    title: '操作',
    dataIndex: '',
    key: 'operation',
    render: (text,record,index) => {
      return (
        <span>
          <Button>呼叫</Button>
          <Button>短信</Button>
      </span>
      )
    }
  }, {
    title: '呼叫次数',
    dataIndex: 'callCount',
    key: 'callCount'
  }, {
    title: '状态  ',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: '通话结果',
    dataIndex: '',
    key: 'conversation',
    render: (text,record,index) => {
      return (
        <span>
          <Select defaultValue="请选择" style={{ width: 120 }} onChange={this.handleSelect.bind(this)}>
          <Select.Option value="有意向">有意向</Select.Option>
          <Select.Option value="无意向">无意向</Select.Option>
          <Select.Option value="未接通">未接通</Select.Option>
          <Select.Option value="挂断">挂断</Select.Option>
        </Select>
      </span>
      )
    }
  }, {
    title: '备注',
    dataIndex: '',
    key: 'remark',
    render: (text,record,index) => {
      return (
        <Input placeholder="备注" />
      )
    }
  }]

  data = [{
    key: '1',
    date: '2015-05-06',
    name: '小二',
    channel: '第一线下渠道',
  }, {
    key: '2',
    date: '2015-05-06',
    name: '小一',
    channel: '第一线下渠道',
  }, {
    key: '3',
    date: '2015-05-06',
    name: '李四',
    channel: '第一线下渠道',
  }, {
    key: '4',
    date: '2015-05-06',
    name: '詹三',
    channel: '第一线下渠道',
  }]

  handleSelect(value) {
    console.log(`你选择的是${value}`)
  }

  changePageSize(current, pageSize){
    console.log('pageNumber',current, pageSize)
  }

  handleChagePage(current, pageSize) {
    console.log('pageNumber',current, pageSize)
  }

  onRowClick(record, index, event) {
    console.log('row', record, index, event)
  }

  render() {
    return (
      <div>
        话务管理
        <Table
          onRowClick= {this.onRowClick} 
          columns={this.columns} dataSource={this.data} 
          pagination={
            {
              total: this.data.length,
              pageSize: 2,
              pageSizeOptions: ['2', '3', '4'],
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (e)=>{return "共 "+e+" 条"},
              onChange: (current, pageSize)=>{this.handleChagePage(current, pageSize)},
              onShowSizeChange:(current, pageSize)=>{this.changePageSize(current, pageSize)},
            }
            }/>
      </div>
    )
  }
}

TelserverManage = connect(() => {
  return {}
})(TelserverManage)
TelserverManage = wrap()(TelserverManage)
export default TelserverManage