import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "link-gray", "link-color", "primary-destructive", "secondary-destructive", "tertiary-destructive", "link-destructive"],
    },
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    isDisabled: { control: "boolean" },
    isLoading: { control: "boolean" },
  },
  args: { children: "Button CTA", color: "primary", size: "sm" },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { color: "primary" } };
export const Secondary: Story = { args: { color: "secondary" } };
export const Tertiary: Story = { args: { color: "tertiary" } };
export const LinkGray: Story = { args: { color: "link-gray" } };
export const LinkColor: Story = { args: { color: "link-color" } };
export const PrimaryDestructive: Story = { args: { color: "primary-destructive", children: "Delete" } };
export const SecondaryDestructive: Story = { args: { color: "secondary-destructive", children: "Delete" } };

export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">X-Large</Button>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="tertiary">Tertiary</Button>
      <Button color="link-gray">Link Gray</Button>
      <Button color="link-color">Link Color</Button>
      <Button color="primary-destructive">Destructive</Button>
      <Button color="secondary-destructive">Sec. Destructive</Button>
      <Button color="tertiary-destructive">Ter. Destructive</Button>
    </div>
  ),
};
