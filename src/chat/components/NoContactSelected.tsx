import { MessageCircleMore } from "lucide-react";
export const NoContactSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4">
      <MessageCircleMore className="h-10 w-10 " />
      <p className="font-bold text-2xl text-center">
        Please, select a contact from the list to start a conversation.
      </p>
      <p className="text-sm text-muted-foreground text-center">
        Select a contact from the list to see their details.
      </p>
    </div>
  );
};
