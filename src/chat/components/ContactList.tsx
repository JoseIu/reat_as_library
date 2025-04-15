import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getClients } from "@/db/fakeData";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

export const ContactList = () => {
  const { clientId } = useParams();
  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <>
                <div className="w-full flex items-center gap-1">
                  <div className="rounded-full bg-gray-200 animate-pulse w-6 h-6"></div>
                  <div className="rounded-md w-full bg-gray-200 animate-pulse  h-6"></div>
                </div>
                <div className="w-full flex items-center gap-1">
                  <div className="rounded-full bg-gray-200 animate-pulse w-6 h-6"></div>
                  <div className="rounded-md w-full bg-gray-200 animate-pulse  h-6"></div>
                </div>
                <div className="w-full flex items-center gap-1">
                  <div className="rounded-full bg-gray-200 animate-pulse w-6 h-6"></div>
                  <div className="rounded-md w-full bg-gray-200 animate-pulse  h-6"></div>
                </div>
              </>
            )}
            {clients?.map((client) => (
              <NavLink
                to={`/chat/${client.id}`}
                className={({ isActive }) =>
                  `w-full flex items-center justify-start px-4 py-1.5 rounded-md ${
                    isActive && "bg-gray-950 text-white"
                  }`
                }
                key={client.id}
              >
                <div
                  className={`h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 flex items-center justify-center  text-xs ${
                    client.id === clientId
                      ? "text-black bg-white"
                      : "text-white"
                  }`}
                >
                  {client.name.charAt(0)}
                </div>
                {client.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
