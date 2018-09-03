import React from 'react'

import { Tree } from 'antd'

const TreeNode = Tree.TreeNode

const treeData = [{
  title: '话务管理',
  key: '话务管理',
  children: [{
    title: '话务呼叫短信',
    key: '话务呼叫短信',
  }, {
    title: '导入',
    key: '导入',
  }, {
    title: '导出',
    key: '导出',
  }, {
    title: '话务分配',
    key: '话务分配',
  }],
}, {
  title: '审核管理',
  key: '审核管理',
}, {
  title: '系统设置',
  key: '系统设置',
  children: [
    { title: '机构管理', key: '机构管理' },
    { title: '角色管理', key: '角色管理' },
    { title: '审核二维码', key: '审核二维码' },
  ],
}, {
  title: '充值充值',
  key: '充值充值',
}]

class TreeSelect extends React.Component {
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys)
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    })
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys)
    this.setState({ checkedKeys })
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info)
    this.setState({ selectedKeys })
  }

  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode {...item} />
    })
  }

  render() {
    return (
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    )
  }
}

export default TreeSelect