import { getClient } from "@/db/fakeData";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { ContactInfo } from "./ContactInfo";
import ContactInfoSkeleton from "./ContactInfoSkeleton";
import { NoContactSelected } from "./NoContactSelected";

export const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClient(clientId ?? ""),
    enabled: !!clientId,
  });

  if (!clientId) {
    return <NoContactSelected />;
  }

  if (isLoading && !client) {
    return <ContactInfoSkeleton />;
  }

  if (client) {
    return <ContactInfo client={client} />;
  }
  return <div>Client not found</div>;
};
