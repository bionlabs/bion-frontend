"use client";

import { ReactNode } from "react";
import { useHydrated } from "@/hooks/useHydrated";

type Props = {
  /**
   * You are encouraged to add a fallback that is the same dimensions
   * as the client rendered children. This will avoid content layout
   * shift which is disgusting
   */
  children(): ReactNode;
  fallback?: ReactNode;
};

/**
 * Render the children only after the JS has loaded client-side. Use an optional
 * fallback component if the JS is not yet loaded.
 *
 * Example: Render a Chart component if JS loads, renders a simple FakeChart
 * component server-side or if there is no JS. The FakeChart can have only the
 * UI without the behavior or be a loading spinner or skeleton.
 * ```tsx
 * return (
 *   <ClientOnly fallback={<FakeChart />}>
 *     {() => <Chart />}
 *   </ClientOnly>
 * );
 * ```
 */
export function ClientOnlyWrapper({ children, fallback = null }: Props) {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>;
}

interface IClientOnly {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ClientOnly: React.FC<IClientOnly> = ({ children, fallback = null }) => {
  return (
    <ClientOnlyWrapper fallback={fallback}>{() => children}</ClientOnlyWrapper>
  );
};

export default ClientOnly;
