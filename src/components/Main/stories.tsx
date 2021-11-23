import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}
