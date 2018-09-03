import React, { Component } from 'react'
import { Input, Modal, Form } from 'antd'
import styles from './DialogAddEmployee.scss'

class DialogRow extends Component {
  render() {
    return (<div className={styles.dg1}>
      <div className={styles.dg2}>{this.props.name}</div>
      <Input className={styles.dg3} value={this.props.value} ></Input>
    </div>)
  }
}
export class DialogAddEmployee extends Component {

  render() {
    const { handleSubmit, dtext } = this.props
    return (<Modal
      title="添加员工"
      visible={this.props.v}
      onOk={this.props.hide}
      onCancel={this.props.hide}
      okText="确认"
      cancelText="取消"
      width={348}
      closable={false}
      destroyOnClose={true} >
      <Form onSubmit={handleSubmit}>
        <DialogRow name="账号" value={dtext.dtext1} />

        <DialogRow name="密码" value={dtext.dtext2} />
        <DialogRow name="昵称" value={dtext.dtext3} />

      </Form>
    </Modal>)

  }
}