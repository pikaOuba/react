import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import wrap from '../../utils/wrap'
import { Table, Select, Input, DatePicker } from 'antd'
import Button from '../common/Button'
import styles from './Index.scss'
class Index extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){

  }

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  columns = [{
    title: '导入时间',
    dataIndex: 'date',
    width: 126,
    render: text => <span className='lightColor'>{this.formatTiem(text)[0]}<br/>{this.formatTiem(text)[1]}</span>,
  }, {
    title: '渠道',
    dataIndex: 'channel',
    key: 'channel',
    width: 154
  }, {
    title: '姓名',
    dataIndex: 'name',
    key:'name',
    width: 106,
    render: name => <span className='buleColor'>{name}</span>
  }, {
    title: '电话',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 124
  }, {
    title: '芝麻分',
    dataIndex: 'zhimaPoint',
    key: 'zhimaPoint',
    width: 88
  }, {
    title: '对接话务员',
    dataIndex: 'telCustomName',
    key: 'telCustomName',
    width: 136
  }, {
    title: '呼叫次数',
    dataIndex: 'callCount',
    key: 'callCount',
    width: 96
  }, {
    title: '状态  ',
    dataIndex: 'status',
    key: 'status',
    width: 88
  }, {
    title: '通话结果',
    dataIndex: '',
    key: 'conversation',
    render: (text,record,index) => {
      return (
        <span>
          待处理
      </span>
      )
    }
  }]

  data = [{
    key: '1',
    date: '2018-08-30T05:11:50.000Z',
    name: '小二',
    channel: '第一线下渠道',
    mobile: '186****8080',
    callCount: 6,
    status: '未处理',
    zhimaPoint: 558,
    telCustomName: '话务员1'
  }, {
    key: '2',
    date: '2018-08-30T05:11:50.000Z',
    name: '小一',
    channel: '第一线下渠道',
  }, {
    key: '3',
    date: '2018-08-30T05:11:50.000Z',
    name: '李四',
    channel: '第一线下渠道',
  }, {
    key: '4',
    date: '2018-08-30T05:11:50.000Z',
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

  formatTiem(time) {
    return [moment(time).utcOffset(8).format('YYYY-MM-DD'), moment(time).utcOffset(8).format('hh:mm')]
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.search}>
          <div className={styles.searchRow}>
            <Button buttonValue='导入'/>
            <div className={styles.downLoad}>下载模板</div>
          </div>
          <div className={styles.searchRow}>
            <div>
              <span className={styles.selectLabel}>渠道</span>
              <Select defaultValue="请选择" style={{ width: 128 }} onChange={this.handleSelect.bind(this)} className='searchSelect'>
                <Select.Option value="第一线下渠道">第一线下渠道</Select.Option>
                <Select.Option value="第二线下渠道">第二线下渠道</Select.Option>
                <Select.Option value="第三线下渠道">第三线下渠道</Select.Option>
                <Select.Option value="第四线下渠道">第四线下渠道</Select.Option>
              </Select>
            </div>
            <div className='rangeDate'>
              <span className={`ml24 ${styles.selectLabel}`}>导入时间</span>
              <DatePicker.RangePicker
                defaultValue={[moment(), moment().add('7', 'days')]}
                format={'YYYY-MM-DD'}
                allowClear={false}
              />
            </div>
            <div>
              <span className={`ml24 ${styles.selectLabel}`}>状态</span>
              <Select defaultValue="请选择" style={{ width: 88 }} onChange={this.handleSelect.bind(this)} className='searchSelect'>
                <Select.Option value="未处理">未处理</Select.Option>
                <Select.Option value="处理">处理</Select.Option>
              </Select>
            </div>
            <div>
              <span className={`ml24 ${styles.selectLabel}`}>通话结果</span>
              <Select defaultValue="请选择" style={{ width: 100 }} onChange={this.handleSelect.bind(this)} className='searchSelect'>
                <Select.Option value="未处理">未处理</Select.Option>
                <Select.Option value="处理">处理</Select.Option>
              </Select>
            </div>
            <div className={`ml24 ${styles.searchGroups}`}>
              <Select defaultValue="身份证" style={{ width: 88 }} onChange={this.handleSelect.bind(this)} className='searchSelect groupSelect'>
                <Select.Option value="身份证">身份证</Select.Option>
                <Select.Option value="姓名">姓名</Select.Option>
                <Select.Option value="电话">电话</Select.Option>
              </Select>
              <Input placeholder="填写姓名/电话/身份证" className={styles.input}/>
            </div>
          </div>
          <div className={styles.minnWidthRow}>
            <div>
              <Button buttonValue='批量分配' width={96} height={40} borderColor='#DCDFE6' fontColor='#5878FF' backgroundColor='#fff'/>
            </div>
            <div className={styles.buttons}>
              <Button buttonValue='查询' width={100} height={40} />
              <div className='ml24'><Button buttonValue='重置' width={68} height={40} borderColor='#DCDFE6' fontColor='#5878FF' backgroundColor='#fff'/></div>
              <div className='ml24'><Button buttonValue='导出查询结果' width={124} height={40} borderColor='#DCDFE6' fontColor='#5878FF' backgroundColor='#fff'/></div>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <Table
            onRowClick= {this.onRowClick} 
            rowSelection={this.rowSelection}
            columns={this.columns} dataSource={this.data} 
            className='tableContainer'
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
      </div>
    )
  }
}

Index = connect(() => {
  return {}
})(Index)
Index = wrap()(Index)
export default Index