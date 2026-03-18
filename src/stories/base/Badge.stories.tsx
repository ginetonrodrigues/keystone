import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeWithDot, BadgeWithButton } from "@/components/base/badges/badges";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["pill-color", "color", "modern"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["gray", "brand", "error", "warning", "success", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange"] },
  },
  args: { children: "Label", type: "pill-color", size: "md", color: "brand" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Brand: Story = { args: { color: "brand" } };
export const Gray: Story = { args: { color: "gray" } };
export const Error: Story = { args: { color: "error" } };
export const Warning: Story = { args: { color: "warning" } };
export const Success: Story = { args: { color: "success" } };

export const BadgeType: Story = { args: { type: "color", children: "Badge" } };
export const Modern: Story = { args: { type: "modern", color: "gray", children: "Modern" } };

export const WithDot: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <BadgeWithDot color="brand">Brand</BadgeWithDot>
      <BadgeWithDot color="success">Active</BadgeWithDot>
      <BadgeWithDot color="error">Error</BadgeWithDot>
      <BadgeWithDot color="warning">Warning</BadgeWithDot>
      <BadgeWithDot color="gray">Gray</BadgeWithDot>
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <BadgeWithButton color="brand" buttonLabel="Remove">Removable</BadgeWithButton>
      <BadgeWithButton color="error" buttonLabel="Remove">Error</BadgeWithButton>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {(["brand", "gray", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"] as const).map((c) => (
        <Badge key={c} color={c}>{c}</Badge>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
