"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { Children, isValidElement, ReactNode, useId } from "react";

/**
 * Compound tab component.
 *
 * The public API (`<Tab><Tab.Item title="…">…</Tab.Item></Tab>`) is unchanged,
 * but it is now backed by Radix tabs. The previous hand-rolled version rendered
 * plain buttons with no `role="tab"`, no `aria-selected`, and no arrow-key
 * navigation, so it was invisible to screen readers and unreachable by keyboard
 * beyond tabbing through every trigger.
 */
type TabItemProps = {
  title: string;
  children: ReactNode;
  tabClassName?: string;
};

const TabItem: React.FC<TabItemProps> = ({ children, tabClassName }) => (
  <div className={tabClassName}>{children}</div>
);

type TabProps = {
  children: ReactNode;
  className?: string;
};

const Tab: React.FC<TabProps> & { Item: React.FC<TabItemProps> } = ({
  children,
  className,
}) => {
  const uid = useId();

  const items = Children.toArray(children).filter(
    (child): child is React.ReactElement<TabItemProps> =>
      isValidElement<TabItemProps>(child)
  );

  if (items.length === 0) return null;

  const valueOf = (index: number) => `${uid}-tab-${index}`;

  return (
    <Tabs defaultValue={valueOf(0)} className={className}>
      <TabsList className="h-auto w-full justify-start gap-4 rounded-none border-b border-primary bg-transparent p-0">
        {items.map((item, i) => (
          <TabsTrigger
            key={valueOf(i)}
            value={valueOf(i)}
            className="relative rounded-none border-0 bg-transparent px-0 pb-2 pt-0 text-current shadow-none transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-green-dark after:opacity-0 after:transition-opacity hover:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:opacity-100">
            {item.props.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item, i) => (
        <TabsContent
          key={valueOf(i)}
          value={valueOf(i)}
          className="mt-2.5 focus-visible:outline-none">
          {item}
        </TabsContent>
      ))}
    </Tabs>
  );
};

Tab.Item = TabItem;

export default Tab;
