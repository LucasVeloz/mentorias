import { getPaymentsListAsync } from "../services/paymentBase";
import { useQuery } from "react-query";

interface UserProps {
  image: string;
  title: string; 
}

interface ListProps {
  thumbnailUrl: string;
  title: string;
}


export const useUsers = () => {
  const { data, isLoading } = useQuery('users', async() => {
    const { data } = await getPaymentsListAsync()
    return data.map(({ title, thumbnailUrl }: ListProps) => ({
      title,
      image: thumbnailUrl,
    }));
  })

  return { users: data as UserProps[], isLoading }
}