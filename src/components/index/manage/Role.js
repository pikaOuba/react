import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../../utils/wrap'
import './Role.scss'
import styles from './Role.scss'
import Button from '../../common/Button'
import { Table, Select, Modal, Input, Form } from 'antd'

import TreeSelect from '../../common/TreeSelect'

class Role extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      createRoleVisible: true,
    }
  }

  showCreateRoleModal = () => { this.setState({createRoleVisible: true}) }

  hideCreateRoleModal = () => {this.setState({createRoleVisible: false }) }

  columns = [{
    title: '创建者',
    dataIndex: 'creator',
    key: 'creator', 
    width: 76,
  }, {
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'channel',
    width: 76
  }, {
    title: '状态',
    dataIndex: 'status',
    key:'status',
    width: 128,
    render: () => {
      return (
        <span>
          <Select defaultValue="启用" style={{ width: 120 }}>
            <Select.Option value="启用">启用</Select.Option>
            <Select.Option value="关闭">关闭</Select.Option>
          </Select>
        </span>
      )
    }
  }, {
    title: '操作',
    dataIndex: '',
    key: 'conversation',
    width: 200,
    render: () => {
      return (
        <div className='row'>
          <div className='mr8'>
            <Button buttonValue='修改角色' borderColor='#DCDFE6' backgroundColor='#fff' fontColor='#001933' width={96} height={32}/>
          </div>
          <Button buttonValue='删除' borderColor='#DCDFE6' backgroundColor='#fff' fontColor='#001933' width={96} height={32}/>
        </div>
      )
    }
  }]

  data = [{
    creator: '系统管理员',
    roleName: '审核管理员',
    status: '启用',
    conversation: '话务员1'
  }, {
    creator: '系统管理员',
    roleName: '审核管理员',
    status: '启用',
    conversation: '话务员1'
  }, {
    creator: '系统管理员',
    roleName: '话务管理员',
    status: '启用',
    conversation: '话务员1'
  }, {
    creator: '系统管理员',
    roleName: '审核管理员',
    status: '启用',
    conversation: '话务员1'
  }]
  
  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }

    return (
      <div>
        <div className={styles.content}>
          <div className={styles.pageName}>
            角色配置
          </div>
          <div className={styles.createRoleButton} onClick={this.showCreateRoleModal.bind(this)}>
            创建角色
          </div>
        </div>
        <Table
          columns={this.columns} dataSource={this.data} 
          // pagination={
          //   {
          //     total: this.data.length,
          //     pageSize: 3,
          //     pageSizeOptions: ['1', '2'],
          //     showSizeChanger: true,
          //     showQuickJumper: true,
          //     showTotal: (e)=>{return `共${e}条`},
          //     onChange: (current, pageSize)=>{this.handleChagePage(current, pageSize)},
          //     onShowSizeChange:(current, pageSize)=>{this.changePageSize(current, pageSize)},
          //   }
          // }
        />
        <Modal
          title="创建角色"
          visible={this.state.createRoleVisible}
          onOk={this.hideCreateRoleModal}
          onCancel={this.hideCreateRoleModal}
          okText="确认"
          cancelText="取消"
          width={376}
          closable={false}
          destroyOnClose={true}
        >
          <div>
            <Form.Item
              {...formItemLayout}
              label="角色名称"
            >
              <Input/>
            </Form.Item>
            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
              <TreeSelect/>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

Role = connect(() => {
  return {}
})(Role)
Role = wrap()(Role)
export default Role


