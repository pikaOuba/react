import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import { Table, Button } from 'element-react'
import './TelserverManage.scss'

class TelserverManage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  tableData = {
    columns: [
      {
        type: 'selection'
      },
      {
        label: "日期",
        prop: "date",
        width: 150
      },
      {
        label: "姓名",
        prop: "name",
        width: 160
      },
      {
        label: "地址",
        prop: "address"
      },
      {
        label: "操作",
        render: function(){
          return (
            <span>
             <Button plain={true} type="info" size="small">呼叫</Button>
             <Button type="danger" size="small">短信</Button>
            </span>
          )
        }
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }]
  }
  
  render() {
    return (
      <div>
        话务管理
        <Table
        columns={this.tableData.columns}
        data={this.tableData.data}
        border={true}
        onSelectChange={(selection) => { console.log(selection) }}
        onSelectAll={(selection) => { console.log(selection) }}/>
      </div>
    )
  }
}

TelserverManage = connect(() => {
  return {}
})(TelserverManage)
TelserverManage = wrap()(TelserverManage)
export default TelserverManage