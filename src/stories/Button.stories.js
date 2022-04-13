import { Button } from '../components/ui';

export default {
    /* The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
};

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// Primary
export const Primary = Template.bind({});
Primary.args = {
    theme: 'default',
    label: 'PRIMARY',
    variant: 'default',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
    theme: 'default',
    label: 'PRIMARY OUTLINED',
    variant: 'outlined',
};

export const PrimaryShaped = Template.bind({});
PrimaryShaped.args = {
    theme: 'default',
    label: 'PRIMARY SHAPED',
    variant: 'shaped',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    theme: 'default',
    label: 'PRIMARY TEXT',
    variant: 'text',
};

// Danger
export const Danger = Template.bind({});
Danger.args = {
    theme: 'danger',
    label: 'Danger',
    variant: 'default',
};

export const DangerOutlined = Template.bind({});
DangerOutlined.args = {
    theme: 'danger',
    label: 'Danger OUTLINED',
    variant: 'outlined',
};

export const DangerShaped = Template.bind({});
DangerShaped.args = {
    theme: 'danger',
    label: 'Danger SHAPED',
    variant: 'shaped',
};

export const DangerText = Template.bind({});
DangerText.args = {
    theme: 'danger',
    label: 'Danger TEXT',
    variant: 'text',
};



/* const ButtonArgs = {
    primary: {
        label: "Primary",
    },
    danger: {
        label: "DANGER",
        theme: "danger"
    },
    success: {
        label: "SUCCESS",
        theme: "success"
    },
    warning: {
        label: "WARNING",
        theme: "warning"
    }
};

const Buttons = Object.values(ButtonArgs).map(args => {
    return Template(args);
});

export const [primary, danger, success, warning] = Buttons; */
