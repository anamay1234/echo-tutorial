import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { ConversationsPanel } from "../components/conversations-panel"

export const ConversationsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ResizablePanelGroup className="h-full flex-1" orientation="horizontal">
      {/* original = defaultSize={30} maxSize={30} but i
            I changed to 300 cuz i cant see nothing bruh */}
      <ResizablePanel defaultSize={400} maxSize={400} minSize={20}>
        <ConversationsPanel />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-full" defaultSize={70}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
