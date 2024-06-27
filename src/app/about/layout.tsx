import React from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
//   const [count, setCount] = useState(0);

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Here is about navbar ....</nav>
      {children}
    </section>
  );
}
