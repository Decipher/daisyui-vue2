import DuiButton from './index.vue'

export default {
  title: 'daisyUI/Actions/Button',
  component: DuiButton,
}

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { DuiButton },
//   template: `<DuiButton v-bind="$props"><template v-if="${'default' in args}" v-slot>${args.default}</template></DuiButton>`,
// })

// export const Default = Template.bind({})
// Default.args = {
//   default: 'Button'
// }
export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DuiButton },
  template: `<DuiButton v-bind="$props">Button</DuiButton>`,
})

export const BrandColors = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DuiButton },
  template: `<div>
    <DuiButton v-bind="$props">Button</DuiButton>
    <DuiButton v-bind="$props">Primary</DuiButton>
    <DuiButton v-bind="$props">Secondary</DuiButton>
    <DuiButton v-bind="$props">Accent</DuiButton>
    <DuiButton v-bind="$props">Ghost</DuiButton>
    <DuiButton v-bind="$props">Link</DuiButton>
  </div>`,
})
BrandColors.storyName = "Buttons with brand colors"
