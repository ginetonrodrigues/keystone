import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/base/checkbox/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    label: { control: "text" },
    hint: { control: "text" },
    isDisabled: { control: "boolean" },
    isIndeterminate: { control: "boolean" },
  },
  args: { size: "sm" },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Accept terms and conditions" } };
export const WithHint: Story = { args: { label: "Remember me", hint: "Save my login details for next time." } };
export const Checked: Story = { args: { label: "Selected", defaultSelected: true } };
export const Indeterminate: Story = { args: { label: "Partial selection", isIndeterminate: true } };
export const Disabled: Story = { args: { label: "Disabled", isDisabled: true } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
    </div>
  ),
};
