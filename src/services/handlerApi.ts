import { AxiosResponse } from "axios";

interface Props {
  execute: () => Promise<AxiosResponse>;
}



export const handlerApiAsync = async ({ execute }: Props) => {
  try {
    const { data } = await execute();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}