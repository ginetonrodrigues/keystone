import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "select", options: ["top", "bottom", "left", "right"] },
    arrow: { control: "boolean" },
  },
  args: { title: "This is a tooltip", placement: "top" },
  decorators: [(Story) => <div style={{ padding: "100px", display: "flex", justifyContent: "center" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button color="secondary">Hover me</Button>
      </TooltipTrigger>
    </Tooltip>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Tooltip title="Tooltip title" description="This is a tooltip with a description text.">
      <TooltipTrigger>
        <Button color="secondary">With description</Button>
      </TooltipTrigger>
    </Tooltip>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip title="Tooltip with arrow" arrow>
      <TooltipTrigger>
        <Button color="secondary">With arrow</Button>
      </TooltipTrigger>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Tooltip title="Top" placement="top"><TooltipTrigger><Button color="secondary">Top</Button></TooltipTrigger></Tooltip>
      <Tooltip title="Bottom" placement="bottom"><TooltipTrigger><Button color="secondary">Bottom</Button></TooltipTrigger></Tooltip>
      <Tooltip title="Left" placement="left"><TooltipTrigger><Button color="secondary">Left</Button></TooltipTrigger></Tooltip>
      <Tooltip title="Right" placement="right"><TooltipTrigger><Button color="secondary">Right</Button></TooltipTrigger></Tooltip>
    </div>
  ),
};
