import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons";

const meta: Meta<typeof RadioGroup> = {
  title: "Base/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
  },
  args: { size: "sm" },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Options">
      <RadioButton value="opt1" label="Option one" />
      <RadioButton value="opt2" label="Option two" />
      <RadioButton value="opt3" label="Option three" />
    </RadioGroup>
  ),
};

export const WithHints: Story = {
  render: () => (
    <RadioGroup aria-label="Plans">
      <RadioButton value="starter" label="Starter" hint="For small teams just getting started" />
      <RadioButton value="pro" label="Professional" hint="For growing businesses" />
      <RadioButton value="enterprise" label="Enterprise" hint="For large organizations" />
    </RadioGroup>
  ),
};

export const MediumSize: Story = {
  render: () => (
    <RadioGroup size="md" aria-label="Options">
      <RadioButton value="a" label="Option A" />
      <RadioButton value="b" label="Option B" />
      <RadioButton value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup isDisabled aria-label="Disabled">
      <RadioButton value="a" label="Option A" />
      <RadioButton value="b" label="Option B" />
    </RadioGroup>
  ),
};
