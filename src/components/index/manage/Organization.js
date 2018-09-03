import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../../utils/wrap'
import './Organization.scss'
import Button from '../../common/Button'
import { Table, Select } from 'antd'
import styles from './Organization.scss'
import { DialogAddEmployee } from '../../common/DialogAddEmployee'

class Organization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      v: false, // 新增员工对话框
      dtext1: '',
      dtext2: '',
      dtext3: ''
    }

  }

  static contextTypes = {
    router: PropTypes.object
  }
  edit = () => {
    this.setState({
      dtext1: 'name1', dtext2: 'text2', dtext3: 'text3'
    })
    this.show()
  }
  del = () => {
    this.setState({
      dtext1: 'text1', dtext2: 'text2', dtext3: 'text3'
    })
    this.show()
  }
  columns = [{
    title: '昵称',
    dataIndex: 'nickname',
    width: 156,
    render: (it) => { return (<span>{it}</span>) }
  }, {
    title: '角色',
    dataIndex: 'channel',
    key: 'channel',
    width: 168,
    render: () => {
      return (
        <span>
          <Select defaultValue="请选择" style={{ width: 120 }} >
            <Select.Option value="有意向">有意向</Select.Option>
            <Select.Option value="无意向">无意向</Select.Option>
            <Select.Option value="未接通">未接通</Select.Option>
            <Select.Option value="挂断">挂断</Select.Option>
          </Select>
        </span>
      )
    }
  }, {
    title: '状态',
    dataIndex: 'name',
    key: 'name',
    width: 176,
    render: () => {
      return (
        <span>
          <Select defaultValue="请选择" style={{ width: 120 }} >
            <Select.Option value="有意向">有意向</Select.Option>
            <Select.Option value="无意向">无意向</Select.Option>
            <Select.Option value="未接通">未接通</Select.Option>
            <Select.Option value="挂断">挂断</Select.Option>
          </Select>
        </span>
      )
    }
  }, {
    title: '操作',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 124,
    render: () => {
      return (<div className='row'>
        <div className='mr8' ><Button buttonValue='修改' borderColor='#DCDFE6' backgroundColor='#fff' fontColor='#001933' width={68} height={32}
          onClick={this.edit.bind(this)}
        /></div>
        <Button buttonValue='删除' borderColor='#DCDFE6' backgroundColor='#fff' fontColor='#001933' width={68} height={32}
          onClick={this.del.bind(this)} />
      </div>)
    }
  }]

  data = [{
    key: '1',
    nickname: '郑汉荣1'
  }, {
    key: '2',
    nickname: '郑汉荣2'
  }, {
    key: '3',
    nickname: '郑汉荣3'
  }, {
    key: '4',
    nickname: '郑汉荣4'
  }]
  show = () => {
    this.setState({
      v: true
    })
  }
  hide = () => {
    this.setState({
      v: false
    })
  }

  handleSubmit() {

  }
  render() {


    return (
      <div className={[styles.content]}>

        <DialogAddEmployee
          v={this.state.v}
          hide={this.hide}
          dtext={{ ...this.state.dtext1, ...this.state.dtext2, ...this.state.dtext3 }}
          handleSubmit={this.handleSubmit} />



        <div className={styles.head}>
          <span className={styles.selectLabel}>机构管理</span>

          <Button buttonValue='添加员工' width={100} height={40} onClick={this.show.bind(this)} />
        </div>


        <Table
          className={styles.table}
          columns={this.columns} dataSource={this.data}
          pagination={false} />
      </div>
    )
  }
}

Organization = connect(() => {
  return {}
})(Organization)
Organization = wrap()(Organization)
export default Organization