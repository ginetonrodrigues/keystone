import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="space-y-6 text-center">
        <h1 className="text-display-md font-semibold text-primary">
          Keystone Design System
        </h1>
        <p className="text-lg text-tertiary">
          Run{" "}
          <code className="rounded-md bg-secondary px-2 py-1 font-mono text-sm">
            npm run storybook
          </code>{" "}
          to view the component documentation.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button color="primary" size="md">
            Get Started
          </Button>
          <Button color="secondary" size="md">
            Documentation
          </Button>
          <Badge color="success">v1.0</Badge>
        </div>
      </div>
    </div>
  );
}

export default App;
