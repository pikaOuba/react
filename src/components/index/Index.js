import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import wrap from '../../utils/wrap'
import { Table, Select, Input, DatePicker, Modal } from 'antd'
import { getKeyForScenic } from '../../utils/index'
import demoCsv from '../../assests/csv/demo.csv'
import Button from '../common/Button'
import DetailModal from '../common/DetailModal'
import styles from './Index.scss'
class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      importVisible: false, // 导入的弹框
      issueVisible: false,
      telerId: '',
      file: '',
      detailVisible: false
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
  }

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }

  showImportModal = () => { this.setState({importVisible: true}) }

  handleCancel() {
    this.setState({importVisible: false })
    this.setState({file: ''})
    this.refs.fileInput.value = ''
  }

  hideImportModal = () => {
    this.setState({importVisible: false })
    const { file } = this.state
    if (file) {
      this.readFileText(this.state.file).then(e => {
        let datas = e.trim().split(/\r\n|\n|↵/)
        let keys = datas[0].split(',')
        let values = datas.slice(1)
        values = values.map(item => {
          let datas = item.split(','), result = {}
          for(let i = 0, l = keys.length; i < l; i++){
            result[getKeyForScenic(keys[i])] = datas[i]
          }
          return result
        })
        console.log(22, values)
      })
    }
  }

  showIssueModal = () => { this.setState({issueVisible: true}) }

  hideIssueModal = () => {this.setState({issueVisible: false }) }

  columns = [{
    title: '导入时间',
    dataIndex: 'date',
    width: 126,
    render: text => <span className='lightColor'>{this.formatTiem(text)[0]}<br/>{this.formatTiem(text)[1]}</span>,
  }, {
    title: '渠道',
    dataIndex: 'channel',
    key: 'channel',
    width: 174
  }, {
    title: '姓名',
    dataIndex: 'name',
    key:'name',
    width: 126,
    render: text => <span className='buleColor' onClick={this.showDetailModal.bind(this, text)}>{text}</span>
  }, {
    title: '电话',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 134
  }, {
    title: '芝麻分',
    dataIndex: 'zhimaPoint',
    key: 'zhimaPoint',
    width: 120
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
    width: 120
  }, {
    title: '通话结果',
    dataIndex: '',
    key: 'conversation',
    render: () => {
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
    console.log('pageNumber', current, pageSize)
  }

  handleChagePage(current, pageSize) {
    console.log('pageNumber', current, pageSize)
  }

  formatTiem(time) {
    return [moment(time).utcOffset(8).format('YYYY-MM-DD'), moment(time).utcOffset(8).format('hh:mm')]
  }

  handleDispatch(item) {
    this.setState({telerId: item.id})
  }

  handleChooseFile() {
    this.refs.fileInput.click()
  }

  handleChageFile(e) {
    this.setState({
      importVisible: true,
      file: e.target.files[0]
    })
    this.refs.fileInput.value = ''
  }

  readFileText(file, encoding = 'gb2312') {
    return new Promise((resolve)=>{
      let reader = new FileReader()
      reader.onload = (e => {
        resolve(e.target.result)
      })
      reader.readAsText(file, encoding )
    })
  }

  hideDetailModal() {
    this.setState({detailVisible: false})
  }

  showDetailModal(row) {
    console.log(row)
    this.setState({detailVisible: true})
  }

  render() {
    const { importVisible, issueVisible, telerId, detailVisible } = this.state
    return (
      <div className={`miniIndexContent ${styles.content}`}>
        <div className={styles.search}>
          <div className={styles.searchRow}>
            <Button buttonValue='导入' onClick={this.handleChooseFile.bind(this)}/>
            <input type="file" className='fileInput' accept=".csv" ref='fileInput' onChange={this.handleChageFile.bind(this)}/>
            <a className={styles.downLoad} href={demoCsv} download="模板">下载模板</a>
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
              <Input placeholder="填写姓名/电话/身份证" className={styles.input} />
            </div>
          </div>
          <div className={styles.minnWidthRow}>
            <div>
              <Button onClick={this.showIssueModal.bind(this)} buttonValue='批量分配' width={96} height={40} borderColor='#DCDFE6' fontColor='#5878FF' backgroundColor='#fff'/>
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
                showTotal: (e)=>{return `共${e}条`},
                onChange: (current, pageSize)=>{this.handleChagePage(current, pageSize)},
                onShowSizeChange:(current, pageSize)=>{this.changePageSize(current, pageSize)},
              }
            }/>
        </div>
        <Modal
          title="设置导入文档名称"
          visible={importVisible}
          onOk={this.hideImportModal}
          onCancel={this.handleCancel.bind(this)}
          okText="确认"
          cancelText="取消"
          width={304}
          closable={false}
          destroyOnClose={true}
        >
          <Input style={{width: '200px'}}/>
        </Modal>

        <Modal
          title={<span>已选择 50 位客户<br/>请选择分配给话务员</span>}
          visible={issueVisible}
          onOk={this.hideIssueModal}
          onCancel={this.hideIssueModal}
          okText="确认"
          cancelText="取消"
          width={512}
          closable={false}
          destroyOnClose={true}
        >
          <div className='telerConatiner'>
            {
              [{id: 1, name: '爱因斯坦'}, {id: 2, name: '爱新觉罗'}, {id: 3, name: '西熊熊'}, {id: 4, name: 'luluSir'}, {id: 5, name: '菲尔普斯'}].map((item, index)=>{
                return (<div className={ `telerItem ${telerId === item.id ? 'activedItem' : ''}`} key={index} onClick={this.handleDispatch.bind(this, item)}>{item.name}</div>)
              })
            }
          </div>
        </Modal>
        <DetailModal detailVisible={detailVisible} hideDetailModal={this.hideDetailModal.bind(this)}></DetailModal> 
      </div>
    )
  }
}

Index = connect(() => {
  return {}
})(Index)
Index = wrap()(Index)
export default Index