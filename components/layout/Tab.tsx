"use client";
// Tab.tsx
import React, {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  ReactNode,
  useContext,
  useState,
} from "react";

// Define context
type TabContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

// Hook to use context
const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("Tab.Item must be used within a Tab");
  return context;
};

// Tab.Item component
type TabItemProps = {
  title: string;
  children: ReactNode;
  index?: number; // will be injected
  tabClassName?: string;
};

const TabItem: React.FC<TabItemProps> = ({ children, index, tabClassName }) => {
  const { activeIndex } = useTabContext();
  return index === activeIndex ? (
    <div className={tabClassName}>{children}</div>
  ) : null;
};

// Tab main component
type TabProps = {
  children: ReactNode;
};

const Tab: React.FC<TabProps> & {
  Item: React.FC<TabItemProps>;
} = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const titles: string[] = [];

  const items = Children.map(children, (child, index) => {
    if (isValidElement<TabItemProps>(child)) {
      titles.push(child.props.title);
      return cloneElement(child, { index });
    }
    return null;
  });

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="flex flex-col gap-2.5">
        <div className="tab-header border-b border-primary flex gap-4">
          {titles.map((title, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative pb-2 transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-green-dark after:transition-all ${
                activeIndex === i ? "after:opacity-100" : "after:opacity-0"
              }`}>
              {title}
            </button>
          ))}
        </div>
        <div className="tab-content">{items}</div>
      </div>
    </TabContext.Provider>
  );
};

// Attach Item as a static subcomponent
Tab.Item = TabItem;

export default Tab;
