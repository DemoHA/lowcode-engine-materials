import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import primaryButtonImage from './__screenshots__/button-1.png?inline';

const meta: IPublicTypeComponentMetadata = {
  componentName: 'NButton',
  title: '按钮',
  category: '通用',
  props: [
    {
      name: 'children',
      propType: 'string',
    },
    {
      name: 'text',
      propType: 'bool',
    },
    {
      name: 'color',
      propType: 'string',
    },
    {
      name: 'type',
      propType: 'string',
    },
    {
      name: 'size',
      propType: 'string',
    },
    {
      name: 'text-color',
      propType: 'string',
    },
    {
      name: 'dashed',
      propType: 'bool',
    },
    {
      name: 'secondary',
      propType: 'bool',
    },
    {
      name: 'circle',
      propType: 'bool',
    },
    {
      name: 'round',
      propType: 'bool',
    },
    {
      name: 'disabled',
      propType: 'bool',
    },
    {
      name: 'ghost',
      propType: 'bool',
    },
    {
      name: 'loading',
      propType: 'bool',
    },
    {
      name: 'strong',
      propType: 'bool',
    },
    {
      name: 'attr-type',
      propType: 'string',
    },
  ],
  configure: {
    props: [
      {
        title: '按钮功能',
        type: 'group',
        extraProps: {
          display: 'block',
        },
        items: [
          {
            name: 'children',
            title: '按钮内容',
            setter: 'StringSetter',
          },
          {
            name: 'disabled',
            title: '是否禁用',
            setter: 'BoolSetter',
          },
          {
            name: 'loading',
            title: '显示加载状态',
            setter: 'BoolSetter',
          },
          {
            name: 'attr-type',
            title: {
              label: '按钮原生类型',
              tip: '按钮的 DOM 的 type 属性',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  { title: 'button', value: 'button' },
                  { title: 'submit', value: 'submit' },
                  { title: 'reset', value: 'reset' },
                ],
              },
            },
            defaultValue: 'button',
          },
        ],
      },
      {
        title: '按钮样式',
        type: 'group',
        extraProps: {
          display: 'block',
        },
        items: [
          {
            name: 'type',
            title: '按钮的类型',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { title: 'default', value: 'default' },
                  { title: 'tertiary', value: 'tertiary' },
                  { title: 'primary', value: 'primary' },
                  { title: 'success', value: 'success' },
                  { title: 'info', value: 'info' },
                  { title: 'warning', value: 'warning' },
                  { title: 'error', value: 'error' },
                ],
              },
            },
            defaultValue: 'default',
          },
          {
            name: 'text',
            title: '文本按钮',
            setter: 'BoolSetter',
          },
          {
            name: 'link',
            title: '链接按钮',
            setter: 'BoolSetter',
          },
          {
            name: 'size',
            title: '按钮的尺寸',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  { label: 'tiny', value: 'tiny' },
                  { label: 'small', value: 'small' },
                  { label: 'medium', value: 'medium' },
                  { label: 'large', value: 'large' },
                ],
              },
            },
            defaultValue: 'medium',
          },
          {
            name: 'bordered',
            title: '显示边框',
            setter: 'BoolSetter',
            defaultValue: true,
          },
          {
            name: 'circle',
            title: '是否为圆形',
            setter: 'BoolSetter',
          },
          {
            name: 'color',
            title: '按钮颜色',
            setter: 'ColorSetter',
          },
          {
            name: 'text-color',
            title: '按钮文本颜色',
            setter: 'ColorSetter',
          },
          {
            name: 'dashed',
            title: '虚线边框',
            setter: 'BoolSetter',
          },
          {
            name: 'ghost',
            title: '是否透明',
            setter: 'BoolSetter',
          },
          {
            name: 'round',
            title: '是否显示圆角',
            setter: 'BoolSetter',
          },
          {
            name: 'secondary',
            title: '是否是次要按钮',
            setter: 'BoolSetter',
          },
          {
            name: 'strong',
            title: '文字是否加粗',
            setter: 'BoolSetter',
          },
        ],
      },
    ],
    supports: {
      style: true,
      loop: true,
      events: ['onClick'],
    },
  },
  snippets: [
    {
      title: '主按钮',
      screenshot: primaryButtonImage,
      schema: {
        componentName: 'NButton',
        props: {
          type: 'primary',
          children: '按钮',
        },
      },
    },
  ],
};

export default meta;
