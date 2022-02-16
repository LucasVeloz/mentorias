import { api } from "../../../services/api";
import { handlerApiAsync } from "../../../services/handlerApi";
import { paymentBase, paymentBaseList } from "../utils/paymentBaseUrl";


interface PaymentAsyncProps {
  id: number;
}


interface GetPaymentAsyncResponse {}

export async function getPaymentAsync({id}: PaymentAsyncProps) {
  const response = await handlerApiAsync({ execute: () => api.get(`${paymentBase()}/${id}`)})
  return response;
}
export async function getPaymentsListAsync() {
  const response = await handlerApiAsync({ execute: () => api.get(paymentBaseList())})
  return response;
}

export function postPaymentAsync({id}: PaymentAsyncProps) {
  return api.post(`${paymentBase()}/${id}`)
}