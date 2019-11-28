import React from 'react'
import Utils from '../../utils/utils'
import { Table } from 'antd'
import './index.less'

export default class ETable extends React.Component {
  state = {}

  // 处理行点击事件
  onRowClick = (record, index) => {
    let rowSelection = this.props.rowSelection
    if (rowSelection === 'checkbox') {
      let selectedRowKeys = this.props.selectedRowKeys
      let selectedIds = this.props.selectedIds;
      let selectedItem = this.props.selectedItem || []
      if (selectedIds) {
        const i = selectedIds.indexOf(record.id)
        if (i === -1) { // 避免重复添加
          selectedIds.push(record.id)
          selectedRowKeys.push(index)
          selectedItem.push(record)
        } else {
          selectedIds.splice(i, 1)
          selectedRowKeys.splice(i, 1)
          selectedItem.splice(i, 1)
        }

      } else {
        selectedIds = [record.id]
        selectedRowKeys = [index]
        selectedItem = [record]
      }
      this.props.updateSelectedItem(selectedRowKeys, seletedItem || {}, seletecedIds)
    } else {
      let selectKey = [index]
      const selectedRowKeys = this.props.selectedRowKeys
      if (selectedRowKeys && selectedRowKeys[0] == index) {
        return
      }
      this.props.updateSelectedItem(selectKey, record || {})
    }
  }

  // 选择框变更
  onSelectChange = (selectedRowKeys, selectedRows) => {
    let rowSelection = this.props.rowSelection
    const selectedIds = []
    if (rowSelection == 'checkbox') {
      selectedRows.map((item) => {
        seletecedIds.push(item.id)
      })

      this.setState({
        selectedRowKeys,
        seletecedIds,
        seletedItem: selectedRows[0]
      })

    }
    this.props.updateSelectedItem(selectedRowKeys, selectedRows[0], selectedIds)
  }

  
}