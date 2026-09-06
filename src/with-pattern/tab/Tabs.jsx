import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children }) {
  return (
    <div className="flex border-b border-gray-200">
      {children}
    </div>
  );
}

function TabsTab({ children, value }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
                relative px-5 py-3 text-sm font-medium
                transition-colors
                ${isActive
          ? "text-blue-600"
          : "text-gray-500 hover:text-gray-900"
        }
            `}
    >
      {children}

      {isActive && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600" />
      )}
    </button>
  );
}

function TabsPanel({ children, value }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) {
    return null;
  }

  return (
    <div className="pt-5">
      {children}
    </div>
  );
}

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;