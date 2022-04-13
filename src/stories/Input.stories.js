import { Input } from '../components/ui';

export default {
    /* The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Input',
    component: Input,
};

// We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

// Default
export const Default = Template.bind({});
Default.args = {
    labelText: 'Default',
    placeholder: 'placeholder',
    type: 'text'
};
