import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    labelPosition: { control: "select", options: ["right", "bottom", "top-floating", "bottom-floating"] },
  },
  args: { value: 60, labelPosition: "right" },
  decorators: [(Story) => <div style={{ width: "400px", padding: "40px 0" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const LabelRight: Story = { args: { labelPosition: "right", value: 60 } };
export const LabelBottom: Story = { args: { labelPosition: "bottom", value: 45 } };
export const TopFloating: Story = { args: { labelPosition: "top-floating", value: 72 } };
export const BottomFloating: Story = { args: { labelPosition: "bottom-floating", value: 35 } };
export const Complete: Story = { args: { labelPosition: "right", value: 100 } };
