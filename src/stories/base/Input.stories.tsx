import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/base/input/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    label: { control: "text" },
    hint: { control: "text" },
    placeholder: { control: "text" },
    isDisabled: { control: "boolean" },
    isInvalid: { control: "boolean" },
    isRequired: { control: "boolean" },
    tooltip: { control: "text" },
  },
  args: { placeholder: "olivia@untitledui.com", size: "sm" },
  decorators: [(Story) => <div style={{ width: "320px" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: "Email" } };
export const WithHint: Story = { args: { label: "Email", hint: "This is a hint text to help the user." } };
export const Invalid: Story = { args: { label: "Email", isInvalid: true, hint: "Please enter a valid email." } };
export const WithTooltip: Story = { args: { label: "Email", tooltip: "We'll never share your email." } };
export const WithShortcut: Story = { args: { label: "Search", placeholder: "Search...", shortcut: "⌘K" } };
export const Required: Story = { args: { label: "Email", isRequired: true } };
export const Disabled: Story = { args: { label: "Email", isDisabled: true } };
export const MediumSize: Story = { args: { label: "Email", size: "md" } };
