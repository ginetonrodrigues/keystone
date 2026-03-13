import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@/components/base/textarea/textarea";

const meta: Meta<typeof TextArea> = {
  title: "Base/Textarea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    placeholder: { control: "text" },
    isDisabled: { control: "boolean" },
    isInvalid: { control: "boolean" },
    isRequired: { control: "boolean" },
    rows: { control: { type: "number", min: 2, max: 10 } },
  },
  args: { placeholder: "Enter a description...", rows: 4 },
  decorators: [(Story) => <div style={{ width: "400px" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = { args: { label: "Description" } };
export const WithHint: Story = { args: { label: "Bio", hint: "Write a few sentences about yourself." } };
export const Invalid: Story = { args: { label: "Comment", isInvalid: true, hint: "Comment is required." } };
export const Required: Story = { args: { label: "Message", isRequired: true } };
export const Disabled: Story = { args: { label: "Notes", isDisabled: true } };
