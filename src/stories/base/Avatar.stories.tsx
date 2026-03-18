import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/base/avatar/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl"] },
    status: { control: "select", options: [undefined, "online", "offline"] },
    verified: { control: "boolean" },
  },
  args: { size: "md" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", alt: "User" },
};
export const WithInitials: Story = { args: { initials: "OR" } };
export const Online: Story = { args: { initials: "JD", status: "online" } };
export const Offline: Story = { args: { initials: "JD", status: "offline" } };
export const Verified: Story = { args: { initials: "OR", verified: true } };
export const Placeholder: Story = { args: {} };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Avatar size="xxs" initials="K" />
      <Avatar size="xs" initials="KS" />
      <Avatar size="sm" initials="KS" />
      <Avatar size="md" initials="KS" />
      <Avatar size="lg" initials="KS" />
      <Avatar size="xl" initials="KS" />
      <Avatar size="2xl" initials="KS" />
    </div>
  ),
};
