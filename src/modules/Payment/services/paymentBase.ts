import { api } from "../../../services/api";
import { handlerApiAsync } from "../../../services/handlerApi";
import { paymentBase } from "../utils/paymentBaseUrl";


interface PaymentAsyncProps {
  id: number;
}


interface GetPaymentAsyncResponse {}

export async function getPaymentAsync({id}: PaymentAsyncProps) {
  const response = await handlerApiAsync({ execute: () => api.get(`${paymentBase()}/${id}`)})
  return response;
}

export function postPaymentAsync({id}: PaymentAsyncProps) {
  return api.post(`${paymentBase()}/${id}`)
}