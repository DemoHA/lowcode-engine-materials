import avatarImage from './__screenshots__/avatar-1.jpg?inline';

const meta = {
  group: 'Antd',
  componentName: 'ATable',
  category: '数据展示',
  props: [
    {
      title: '数据源',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'dataSource',
          title: { label: '表格数据', tip: 'dataSource | 表格数据' },
          propType: 'object',
          setter: 'JsonSetter',
          supportVariable: true,
        },
        {
          name: 'loading',
          title: { label: '加载中', tip: 'loading | 是否加载中' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          supportVariable: true,
        },
        {
          name: 'rowKey',
          title: {
            label: '行Key',
            tip: 'rowKey | 表格行 key 的取值，可以是字符串或一个函数',
          },
          propType: { type: 'oneOfType', value: ['string', 'func'] },
          setter: [
            'StringSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getRowKey(record,index,${extParams}){\n// 通过函数获取表格行 key\nreturn record.id;\n}',
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'id',
        },
      ],
    },
    {
      name: 'columns',
      title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'title',
                    title: { label: '列标题', tip: 'title | 列标题' },
                    propType: { type: 'oneOfType', value: ['string', 'func'] },
                    setter: [
                      'StringSetter',
                      {
                        componentName: 'SlotSetter',
                        title: '列标题插槽',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['options'],
                          value: [],
                        },
                      },
                    ],
                    isRequired: true,
                  },
                  {
                    name: 'dataIndex',
                    title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                    propType: 'string',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'key',
                    title: { label: 'Vue key', tip: 'key | Vue需要的key' },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'align',
                    title: { label: '对齐方式', tip: 'align | 对齐方式' },
                    propType: {
                      type: 'oneOf',
                      value: ['left', 'right', 'center'],
                    },
                    defaultValue: 'left',
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                            {
                              title: 'center',
                              value: 'center',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'fixed',
                    title: { label: '列是否固定', tip: 'fixed | 列是否固定' },
                    description:
                      '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                    defaultValue: '',
                    propType: {
                      type: 'oneOf',
                      value: ['', 'left', 'right'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '不固定',
                              value: '',
                            },
                            {
                              title: '固定在左侧',
                              value: 'left',
                            },
                            {
                              title: '固定在右侧',
                              value: 'right',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'className',
                    title: {
                      label: '列样式类名',
                      tip: 'className | 列样式类名',
                    },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'width',
                    title: { label: '宽度', tip: 'width | 宽度' },
                    propType: {
                      type: 'oneOfType',
                      value: ['number', 'string'],
                    },
                    setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                  },
                  {
                    name: 'sorter',
                    title: {
                      label: '排序规则',
                      tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true',
                    },
                    propType: { type: 'oneOfType', value: ['bool', 'func'] },
                    setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                  },
                  {
                    name: 'ellipsis',
                    title: {
                      label: '文本溢出',
                      tip: '文本溢出是否显示为...',
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'filters',
                    title: {
                      label: '筛选菜单项',
                      tip: 'filters | 表头的筛选菜单项',
                    },
                    propType: 'object',
                    setter: 'JsonSetter',
                  },
                  {
                    name: 'customRender',
                    title: {
                      label: '自定义渲染',
                      tip: 'customRender | 插槽内的物料表达式可通过this.data.record获取当前行数据，this.data.index获取索引',
                    },
                    propType: 'func',
                    setter: [
                      {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['data'],
                          value: [],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: { title: '标题' },
          },
        },
      },
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'showHeader',
          title: { label: '显示表头', tip: 'showHeader | 是否显示表头' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'bordered',
          title: {
            label: '显示边框',
            tip: 'bordered | 是否展示外边框和列边框',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'size',
          title: { label: '表格大小', tip: 'size | 表格大小' },
          propType: {
            type: 'oneOf',
            value: ['default', 'middle', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '中',
                    value: 'middle',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
        },
        {
          name: 'tableLayout',
          title: { label: '表格布局', tip: 'tableLayout | 表格布局' },
          defaultValue: '',
          propType: {
            type: 'oneOf',
            value: ['', 'auto', 'fixed'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: '',
                  },
                  {
                    title: '自动',
                    value: 'auto',
                  },
                  {
                    title: '固定',
                    value: 'fixed',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: '分页',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'pagination',
          title: { label: '显示分页', tip: 'pagination | 显示分页' },
          propType: 'object',
          setter: 'BoolSetter',
          defaultValue: false,
          // extraProps: {
          //   setValue: (target: any, value: any) => {
          //     if (value) {
          //       target.parent.setPropValue('pagination', {
          //         pageSize: 10,
          //       });
          //     }
          //   },
          // },
        },
      ],
    },
    {
      title: '行选择器',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'rowSelection',
          title: { label: '行选择', tip: 'rowSelection | 行选择' },
          propType: 'object',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target: any, value: any) => {
              if (value) {
                target.parent.setPropValue('rowSelection', {
                  type: 'radio',
                });
              }
            },
          },
        },
        {
          name: 'rowSelection.type',
          title: { label: '行选择类型', tip: 'rowSelection.type | 多选/单选' },
          propType: {
            type: 'oneOf',
            value: ['checkbox', 'radio'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '多选',
                    value: 'checkbox',
                  },
                  {
                    title: '单选',
                    value: 'radio',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.fixed',
          title: {
            label: '固定左边',
            tip: 'rowSelection.fixed | 把选择框列固定在左边',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.selectedRowKeys',
          title: {
            label: '选中行Key',
            tip: 'rowSelection.selectedRowKeys | 指定选中项的 key 数组',
          },
          propType: 'object',
          setter: 'JsonSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.preserveSelectedRowKeys',
          title: {
            label: '保留选项',
            tip: 'rowSelection.preserveSelectedRowKeys | 当数据被删除时仍然保留选项',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.getCheckboxProps',
          title: {
            label: '默认属性',
            tip: 'rowSelection.getCheckboxProps | 选择框的默认属性配置',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getCheckboxProps(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
      ],
    },
    {
      title: '行展开',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'expandedRowRender',
          title: {
            label: '展开行渲染',
            tip: 'expandedRowRender | 额外的展开行',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '展开行插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['record', 'index', 'indent', 'expanded'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onExpandedRowRender(record,index,indent,expanded,${extParams}){\n// 展开行渲染\nreturn `${record.id}`}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'defaultExpandAllRows',
          title: {
            label: '初始是否展开所有行',
            tip: 'defaultExpandAllRows|初始时，是否展开所有行',
          },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'rowExpandable',
          title: {
            label: '是否可展开',
            tip: 'rowExpandable | 行是否可展开',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowExpandable(record,${extParams}){\n// 行是否可展开\nreturn true;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    // {
    //   title: '扩展',
    //   display: 'block',
    //   type: 'group',
    //   items: [
    //     {
    //       name: 'title',
    //       title: { label: '表格标题', tip: 'title | 表格标题' },
    //       propType: 'func',
    //       setter: [
    //         {
    //           componentName: 'SlotSetter',
    //           title: '表格标题插槽',
    //           initialValue: {
    //             type: 'JSSlot',
    //             params: ['currentPageData'],
    //             value: [],
    //           },
    //         },
    //         {
    //           componentName: 'FunctionSetter',
    //           props: {
    //             template:
    //               'renderTitle(currentPageData,${extParams}){\n// 自定义渲染表格顶部\nreturn "表格顶部";\n}',
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //     },
    //     {
    //       name: 'footer',
    //       title: { label: '表格尾部', tip: 'footer | 表格尾部' },
    //       propType: 'func',
    //       setter: [
    //         {
    //           componentName: 'SlotSetter',
    //           title: '表格尾部插槽',
    //           initialValue: {
    //             type: 'JSSlot',
    //             params: ['currentPageData'],
    //             value: [],
    //           },
    //         },
    //         {
    //           componentName: 'FunctionSetter',
    //           props: {
    //             template:
    //               'renderFooter(currentPageData,${extParams}){\n// 自定义渲染表格尾部\nreturn "表格尾部";\n}',
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //     },
    //     {
    //       name: 'onHeaderRow',
    //       title: { label: '头部行属性', tip: 'onHeaderRow | 设置头部行属性' },
    //       propType: 'func',
    //       setter: [
    //         {
    //           componentName: 'FunctionSetter',
    //           props: {
    //             template:
    //               'onHeaderRow(columns,index,${extParams}){\n// 设置头部行属性\nreturn {onClick:()=>{}};\n}',
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //     },
    //     {
    //       name: 'onRow',
    //       title: { label: '行属性', tip: 'onRow | 设置行属性' },
    //       propType: 'func',
    //       setter: [
    //         {
    //           componentName: 'FunctionSetter',
    //           props: {
    //             template:
    //               'onRow(record,index,${extParams}){\n// 设置行属性\nreturn {onClick:event=>{}};\n}',
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //     },
    //     {
    //       name: 'rowClassName',
    //       title: { label: '行类名', tip: 'rowClassName | 表格行的类名' },
    //       propType: 'func',
    //       setter: [
    //         {
    //           componentName: 'FunctionSetter',
    //           props: {
    //             template:
    //               'rowClassName(record,index,${extParams}){\n// 表格行的类名\nreturn `className-${record.type}`;\n}',
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //     },
    //   ],
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(pagination,filters,sorter,extra,${extParams}){\n// 分页、排序、筛选变化时触发\nconsole.log('onChange', pagination);}",
        },
        {
          name: 'onExpandedRowsChange',
          template:
            "onExpandedRowsChange(expanded, record,${extParams}){\n// 展开的行变化时触发\nconsole.log('onExpandedRowsChange', expanded, record);}",
        },
        {
          name: 'onExpand',
          template:
            "onExpand(expanded,record){\n// 点击展开图标时触发\nconsole.log('onExpand', expanded, record);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '表格',
      screenshot: avatarImage,
      schema: {
        componentName: 'ATable',
      },
    },
  ],
};

export default meta;
