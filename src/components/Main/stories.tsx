import { Meta } from '@storybook/react/'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Basic = (args: any) => <Main {...args} />
